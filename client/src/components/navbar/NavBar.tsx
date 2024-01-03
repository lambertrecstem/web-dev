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

const NavBar = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  const navItems: NavItem[] = [
    { pageName: "HOME", pageNameMobile: "Home", slug: "home", urlEP: "/" },
    {
      pageName: "ABOUT",
      pageNameMobile: "About",
      slug: "about",
      urlEP: "/about",
    },
    {
      pageName: "COMPETITIONS",
      pageNameMobile: "Competitions",
      slug: "competitions",
      urlEP: "/competitions",
    },
    {
      pageName: "EVENTS",
      pageNameMobile: "Events",
      slug: "event",
      urlEP: "/events",
    },
    {
      pageName: "PUBLICATIONS",
      pageNameMobile: "Publications",
      slug: "publications",
      urlEP: "/publications",
    },
  ];

  return (
    <>
      <div className={`lg:hidden mobile-navbar-button z-50`}>
        <button
          onClick={toggleClass}
          className={`transform-navbar ${
            active ? "transform-active-navbar-button" : ""
          }  text-secondary p-[3%] text-[30pt]`}
        >
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          {/* <img className="w-[100px] " src={test} alt="" /> */}
        </button>
      </div>
      <div
        className={`z-40 lg:hidden mobile-navbar transform-navbar ${
          active ? "transform-active-navbar" : ""
        }`}
      >
        <div className="flex flex-col gap-[10%]">
          <div className="flex flex-col gap-[10%]">
            {navItems.map((i) => (
              <NavLink
                key={i.slug}
                to={i.urlEP}
                onClick={toggleClass}
                className={({ isActive }) => {
                  if (isActive) return "btn-nav-active-mobile";
                  return "btn-nav-unactive-mobile";
                }}
              >
                {i.pageNameMobile}
              </NavLink>
            ))}
          </div>
          <div className="lg:hidden relative  bottom-[-5%] grid place-items-center mt-[0px] p-[50px]">
            <div className="flex flex-row gap-[10%] justify-evenly">
              <div className="grid place-items-center bg-black text-[35pt] text-secondary p-4 rounded-full duration-[1000ms] transition-all hover:rotate-360">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="grid place-items-center bg-black text-[35pt] text-secondary p-4 rounded-full duration-[1000ms] transition-all hover:rotate-360">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="grid place-items-center bg-black text-[35pt] text-secondary p-4 rounded-full duration-[1000ms] transition-all hover:rotate-360">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xs:hidden  w-[100%] lg:flex flex-nowrap flex-row justify-between  bg-primary  p-[2%]">
        <div className="grid w-[20%] place-items-center">
          <img
            src={logo}
            alt=""
            className="aspect-square w-[100px] duration-[10000ms] transition-all hover:rotate-[3600deg]"
          />
        </div>
        <div className="grid w-[60%] place-items-center">
          <div className="w-auto h-auto flex flex-nowrap flex-row gap-[2rem] ">
            {navItems.map((i) => (
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
            ))}
          </div>
        </div>
        <div className="grid w-[20%] place-items-center transition-all duration-500 ">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.google.com/");
            }}
            className="w-[50%] h-[50%] font-primary  text-white  font-staat hover:tracking-[0.25rem] shadow-lg shadow-black rounded-full transition-all duration-500
              bg-gradient-to-tl from-buttonRedGradientTo via-redAccent to-redAccent
              bg-size-200 bg-pos-0 hover:bg-pos-100 hover:font-bold hover:w-[60%] hover:h-[60%] "
          >
            JOIN
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;

/*
         
         .btn-grad {
            background-image: linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center;
            color: #fff;
            text-decoration: none;
          }   
*/
// "h-[50%] font-primary text-[1rem] text-secondary font-light mr-[4rem] bg-redAccent px-7 mt-5 duration-500 transition-all hover:bg-secondary hover:text-redAccent  ";
