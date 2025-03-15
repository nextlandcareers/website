import NLClogo from "../../assets/NLC logo header.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Translate from "../translate/Translate";
import TranslateImage from "../../assets/translate.png";
import "./navbar.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const items = [
    { name: t("homePage").toUpperCase(), path: "/" },
    { name: t("about").toUpperCase(), path: "/about" },
    { name: t("services").toUpperCase(), path: "/services" },
    { name: t("jobs").toUpperCase(), path: "/jobs" },
    { name: t("clients").toUpperCase(), path: "/clients" },
    { name: t("contact").toUpperCase(), path: "/contact" },
  ];

  const languages = [
    { name: "EN", value: "en" },
    { name: "HU", value: "hn" },
    { name: "DE", value: "gr" },
    { name: "SL", value: "sl" },
  ];

  const handleScroll = () => {
    window.scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRouteClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed right-0 left-0 z-20 top-0 ${
        isScrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="w-full flex flex-wrap items-center justify-between px-10 py-7">
        <Link to="/">
          <div>
            <img
              src={NLClogo}
              alt="NLC_logo"
              className="w-[117px] h-[70px] nlc_logo_image_container"
            />
          </div>
        </Link>

        <div className="languagesContainer">
          {languages.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setLanguage(item.value);
                changeLanguage(item.value);
              }}
              className={`language ${item.value === language ? "active" : ""}`}
              style={{
                borderRight: item.name !== "SL" ? "2px solid white" : "none",
              }}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className="navItem_tranlate_container">
          <div className="navbar-items">
            <div className="plus-jakarta isNotOpen_container">
              {items.map((item, index) => (
                <div key={index} onClick={() => handleRouteClick(item.path)}>
                  <h2
                    className={`block py-2 px-3 text-white cursor-pointer hover:font-bold ${
                      activeLink === item.path ? "font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <button className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="isOpen_container plus-jakarta">
          {items.map((item, index) => (
            <div key={index} onClick={() => handleRouteClick(item.path)}>
              <h2
                className={`block py-2 px-3 text-white cursor-pointer hover:font-bold ${
                  activeLink === item.path ? "font-bold" : ""
                }`}
              >
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
