import { NavLink, useNavigate } from "react-router-dom";
import { NavItem } from "../../components/navbar/NavBar";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const to: string = "/login";

  const navItems: NavItem[] = [
    {
      pageName: "LOGOUT",
      pageNameMobile: "Logout",
      slug: "logout",
      urlEP: "/logout",
    },
    {
      pageName: "PICTURES",
      pageNameMobile: "Pictures",
      slug: "pics",
      urlEP: "/manage-pictures",
    },
    {
      pageName: "PUBLICATIONS",
      pageNameMobile: "Publications",
      slug: "pubs",
      urlEP: "/manage-publications",
    },
    {
      pageName: "TESTIMONIALS",
      pageNameMobile: "Testimonials",
      slug: "tests",
      urlEP: "/manage-testimonials",
    },
    {
      pageName: "EVENTS",
      pageNameMobile: "Events",
      slug: "events",
      urlEP: "/manage-events",
    },
    {
      pageName: "COMPS",
      pageNameMobile: "Comps",
      slug: "comps",
      urlEP: "/manage-comps",
    },
    {
      pageName: "OFFICERS",
      pageNameMobile: "Officers",
      slug: "officers",
      urlEP: "/manage-officers",
    },
  ];

  return (
    <div className="w-screen h-screen grid grid-rows-[20%_5%_60%_15%] place-items-center   bg-primary  p-[2%]">
      <div className="grid place-items-center">
        <img
          src={logo}
          alt=""
          className="aspect-square w-[100px] duration-[10000ms] transition-all hover:rotate-[3600deg]"
        />
      </div>

      <div>
        <p className="text-secondary text-[20pt] font-primary">
          Welcome {auth.user}, we are glad you're apart of the team...
        </p>
      </div>

      <div className="w-full h-full place-items-center grid grid-rows-[25%_25%_25%_25%] grid-cols-[50%_50%]">
        {navItems.map((i) => {
          if (i.slug === "logout")
            return (
              <button
                key={i.slug}
                onClick={() => {
                  logout();
                  navigate(to, { replace: true });
                }}
                className={
                  "bg-redAccent text-secondary p-4 rounded-[30px] col-span-2"
                }
              >
                {i.pageName}
              </button>
            );
          return (
            <NavLink
              key={i.slug}
              to={i.urlEP}
              className={({ isActive }) => {
                if (isActive) return "btn-nav-active";
                return "btn-nav-unactive";
              }}
            >
              {i.pageName}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
