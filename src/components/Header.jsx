import { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
      >
        <a href="#">IlhamArifinnn</a>
      </h1>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-12">
        {["Home", "About", "Project", "Contact"].map((item, index) => (
          <a
            key={index}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={1000 + index * 500}
            className="text-base tracking-wider transition-colors hover:text-yellow-400 z-50"
            href={`/${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-xl md:mr-4 mr-2 transition-colors hover:text-yellow-400 z-50"
        >
          <i className={`bx ${theme === "dark" ? "bx-sun" : "bx-moon"}`}></i>
        </button>
      </nav>

      {/* Sign In */}
      {/* <button className="hidden md:block bg-[#a7a7a7] text-black py-2 px-6 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SignIn
      </button> */}

      {/* Mobile menu button */}
      <button
        className="md:hidden text-3xl p-2 z-50"
        onClick={toggleMobileMenu}
      >
        <i className={isMobile ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      {/* Mobile menu */}
      {isMobile && (
        <div className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
          <nav className="flex flex-col gap-6 items-center">
            {["Home", "About", "Project", "Contact"].map((item, i) => (
              <a
                key={i}
                className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsMobile(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
