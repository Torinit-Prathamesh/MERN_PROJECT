import { Link, useLocation } from "react-router-dom";

function SideDrawer() {
  function handlOpenDrawer() {
    const drawer = document.getElementById("menu");
    drawer.classList.toggle("hidden");
  }

  const Navigations = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Product",
      link: "/product",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "About",
      link: "/about",
    },
  ];

  const location = useLocation();

  return (
    <>
      <label
        onClick={handlOpenDrawer}
        className="cursor-pointer lg:hidden block"
      >
        <svg
          className="fill-current text-gray-900 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <div className={`lg:flex lg:items-center lg:w-auto w-full`} id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            {Navigations?.map((item, index) => {
              const isActive = location.pathname === item.link;
              return (
                <li key={index}>
                  <Link
                    className={`lg:p-4 py-3 px-0 block  ${
                      isActive && "text-palette-primary"
                    }`}
                    to={`${item.link}`}
                    onClick={handlOpenDrawer}
                  >
                    {`${item.text}`}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideDrawer;
