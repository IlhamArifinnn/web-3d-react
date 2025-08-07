import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* tag box-with gradient border */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black dark:bg-white rounded-full flex items-center justify-center gap-1 text-sm font-medium tracking-wide">
            <i className="bx bx-diamond"></i>
            PORTFOLIO
          </div>
        </div>

        {/* main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider my-4 leading-snug">
          Hi, I'm Ilham 👋
          <br />
          Frontend Developer & Tech Enthusiast
        </h1>

        {/* description */}
        <p className="text-base sm:text-lg md:text-base tracking-wider text-slate-600 max-w-[25rem] lg:max-w-[30rem]">
          Passionate about crafting beautiful and responsive user interfaces
          using modern web technologies. Let's build amazing digital experiences
          together.
        </p>

        {/* buttons */}
        <div className="flex gap-4 mt-5">
          <a
            href="https://github.com/IlhamArifinnn"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2a2a2a] py-1  px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] dark:hover:bg-gray-300"
          >
            GitHub <i className="bx bx-link-external"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ilham-arifin-5191a6298/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2a2a2a] py-1 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] dark:hover:bg-gray-300"
          >
            LinkedIn <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* 3D robot */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="2500"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/Oa1xSh-QPnhV50Ib/scene.splinecode"
      />
    </section>
  );
};

export default Hero;
