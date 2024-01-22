import { useEffect, useState } from "react";
import { Competition } from "../utils/managementInterfaces";
import { filterButtonsComp, FilterButton } from "../utils/managementInterfaces";
import axios from "../api/axios";
import CompetitionCard from "../components/CompetitionCard";

const Publications = () => {
  const [comps, setComps] = useState<Competition[]>([]);
  const [buttons, setButtons] = useState(filterButtonsComp);
  const [filters, setFilters] = useState<string[]>([]);
  console.log(filters);

  let isMounted = false;
  useEffect(() => {
    if (!isMounted) fetchPublications();

    return () => {
      isMounted = true;
    };
  }, [filters]);

  const fetchPublications = async () => {
    const controller = new AbortController();

    await axios
      .get<Competition[]>("/competitions", { signal: controller.signal })
      .then((res) => {
        setComps([...res.data]);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  };

  const handleFilterUpdate = (updated: FilterButton[]) => {
    setFilters([
      ...updated
        .filter((b) => b.selected && !(b.slug === "all"))
        .map((b) => b.slug),
    ]);
  };

  const handleClick = (btn: FilterButton) => {
    let updated: FilterButton[];
    if (btn.slug === "all" && btn.selected == true) return;
    else if (btn.slug === "all" && btn.selected == false) {
      updated = buttons.map((b) => {
        if (b.slug === "all") return { ...b, selected: true };
        return { ...b, selected: false };
      });
      setButtons([...updated]);
      handleFilterUpdate(updated);
    } else if (
      btn.slug != "all" &&
      buttons.filter((b) => b.slug === "all")[0].selected
    ) {
      updated = buttons.map((b) => {
        if (b.slug === "all") return { ...b, selected: false };
        else if (b.slug === btn.slug) return { ...b, selected: true };
        return b;
      });
      setButtons([...updated]);
      handleFilterUpdate(updated);
    } else {
      updated = buttons.map((b) => {
        if (btn.slug == b.slug) return { ...b, selected: !b.selected };
        return b;
      });
      setButtons([...updated]);
      handleFilterUpdate(updated);
    }

    if (btn.slug === "external" && buttons[buttons.length - 2].selected) {
      updated = buttons.map((b) => {
        if ("internal" == b.slug) return { ...b, selected: false };
        if (b.slug === btn.slug) return { ...b, selected: true };
        return b;
      });
      setButtons([...updated]);
      handleFilterUpdate(updated);
    } else if (
      btn.slug === "internal" &&
      buttons[buttons.length - 1].selected
    ) {
      updated = buttons.map((b) => {
        if ("external" == b.slug) return { ...b, selected: false };
        if (b.slug === btn.slug) return { ...b, selected: true };

        return b;
      });
      setButtons([...updated]);
      handleFilterUpdate(updated);
    }
  };

  return (
    <div className="grid xl:grid-rows-[100px_120px_70px] md:grid-rows-[100px_100px] xs:grid-rows-[100px_160px_190px]  sm:grid-rows-[100px_200px] w-full h-auto bg-primary pb-[50%] overflow-hidden">
      <div></div>
      <p className="w-auto h-auto text-[40pt] text-secondary font-primary xl:mx-[13%] lg:mx-[100px] xs:ml-[30px]">
        competitions
      </p>
      <div className="flex flex-row flex-nowrap sm:h-[150px] xs:h-[170px]  overflow-hidden gap-[10px] xs:w-full xs:flex-wrap md:h-[100px] xs:pl-[30px] xl:px-[13%] lg:px-[100px] xl:h-[100px] w-full">
        {buttons.map((btn) => (
          <button
            key={btn.slug}
            onClick={() => {
              handleClick(btn);
            }}
            className={btn.selected ? btn.activeStyle : btn.unactiveStyle}
          >
            {btn.slug === "all" ? "All" : btn.subject.subject}
          </button>
        ))}
      </div>
      <div className="xs:px-[30px] md:grid-cols-[600px] sm:grid-cols-[350px] xs:grid-cols-[300px]   overflow-hidden py-[5%] lg:px-[100px] xl:px-[13%] grid xl:grid-cols-[50%_50%] lg:grid-cols-[400px_400px] gap-[65px] ">
        {filters.includes("external") || filters.includes("internal")
          ? comps
              .filter((p) => filters.length == 0 || filters.includes(p.type))
              .filter((p) => filters.length == 1 || filters.includes(p.slug))
              .map((p) => {
                return <CompetitionCard key={p._id} competition={p} />;
              })
          : comps
              .filter((p) => filters.length == 0 || filters.includes(p.slug))
              .map((p) => {
                return <CompetitionCard key={p._id} competition={p} />;
              })}
      </div>
    </div>
  );
};

export default Publications;
