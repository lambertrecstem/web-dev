import { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export interface NavItem {
  pageName: string;
  pageNameMobile: string;
  slug: string;
  urlEP: string;
}

// Constant navigation items
const navItems: NavItem[] = [
  { pageName: "HOME", pageNameMobile: "Home", slug: "home", urlEP: "/" },
  { pageName: "ABOUT", pageNameMobile: "About", slug: "about", urlEP: "/about" },
  { pageName: "COMPETITIONS", pageNameMobile: "Competitions", slug: "competitions", urlEP: "/competitions" },
  { pageName: "PUBLICATIONS", pageNameMobile: "Publications", slug: "publications", urlEP: "/publications" },
];

// Social Media Icon component
const SocialMediaIcon = () => (
  <div className="grid place-items-center bg-black text-[35pt] text-secondary p-4 rounded-full duration-[1000ms] transition-all hover:rotate-360">
    <FontAwesomeIcon icon={faYoutube} />
  </div>
);

const NavBar = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={`lg:hidden mobile-navbar-button z-50`}>
        <button
          onClick={toggleClass}
          className={`transform-navbar ${active ? "transform-active-navbar-button" : ""}  text-secondary p-[3%] text-[30pt]`}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
      <div
        className={`z-40 lg:hidden mobile-navbar transform-navbar ${active ? "transform-active-navbar" : ""}`}
      >
        <div className="flex flex-col gap-[10%]">
          <div className="flex flex-col gap-[10%]">
            {navItems.map((item) => (
              <NavLink
                key={item.slug}
                to={item.urlEP}
                onClick={toggleClass}
                className={({ isActive }) => isActive ? "btn-nav-active-mobile" : "btn-nav-unactive-mobile"}
              >
                {item.pageNameMobile}
              </NavLink>
            ))}
          </div>
          <div className="lg:hidden relative bottom-[-5%] grid place-items-center mt-[0px] p-[50px]">
            <div className="flex flex-row gap-[10%] justify-evenly">
              <SocialMediaIcon />
              <SocialMediaIcon />
              <SocialMediaIcon />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="xs:hidden w-[100%] lg:flex flex-nowrap flex-row justify-between bg-primary p-[2%]"> */}

      <div className="xs:hidden w-[100%] lg:flex flex-nowrap flex-row justify-between bg-primary p-[2%]">
        <div className="grid w-[20%] place-items-center">
          <img
            src={logo}
            alt=""
            className="aspect-square w-[100px] duration-[10000ms] transition-all hover:rotate-[3600deg]"
          />
        </div>
        <div className="grid w-[60%] place-items-center">
          <div className="w-auto h-auto flex flex-nowrap flex-row gap-[2rem]">
            {navItems.map((item) => (
              <NavLink
                key={item.slug}
                to={item.urlEP}
                className={({ isActive }) => isActive ? "btn-nav-active" : "btn-nav-unactive"}
              >
                {item.pageName}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="grid w-[20%] place-items-center transition-all duration-500">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.google.com/");
            }}
            className="w-[50%] h-[50%] font-primary text-white font-staat hover:tracking-[0.25rem] shadow-lg shadow-black rounded-full transition-all duration-500
              bg-gradient-to-tl from-buttonRedGradientTo via-redAccent to-redAccent
              bg-size-200 bg-pos-0 hover:bg-pos-100 hover:font-bold hover:w-[60%] hover:h-[60%]"
          >
            JOIN
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
