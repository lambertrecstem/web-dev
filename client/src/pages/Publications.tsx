import { useEffect, useState } from "react";
import { Publication } from "../utils/filterButtons";
import PubCard from "../components/PublicationCard";
import filterButtons, { FilterButton } from "../utils/filterButtons";
import axios from "../api/axios";

const Publications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [buttons, setButtons] = useState(filterButtons);
  const [filters, setFilters] = useState<string[]>([]);

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
      .get<Publication[]>("/publications", { signal: controller.signal })
      .then((res) => {
        setPublications([...res.data]);
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
  };

  return (
    <div className="w-full h-auto bg-primary pt-[10%] px-[10%] pb-[50%]">
      <div>
        <p className="text-[40pt] text-secondary font-primary text-center pb-[20%]">
          publications
        </p>
      </div>
      <div className="flex flex-row flex-wrap pb-[10%] gap-[5%] ">
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
      {publications
        .filter((p) => filters.length == 0 || filters.includes(p.slug))
        .map((p) => {
          return <PubCard key={p._id} publication={p} />;
        })}
    </div>
  );
};

export default Publications;
