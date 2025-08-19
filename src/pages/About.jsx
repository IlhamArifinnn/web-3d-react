const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 
        bg-gradient-to-br dark:from-[#f5f5f5] dark:via-[#fff] dark:to-[#e99b63] 
        from-[#181818] via-[#232323] to-[#e99b63]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e99b63]">
        About Me
      </h2>
      <div className="max-w-2xl text-center dark:text-[#232323] text-[#f5f5f5] text-lg leading-relaxed">
        <p>
          Hi, I'm{" "}
          <span className="font-semibold text-[#e99b63]">Ilham Arifin</span>.
          <br />
          I’m an Informatics Engineering student at STT Terpadu Nurul Fikri and
          an aspiring fullstack developer.
        </p>
        <p className="mt-4">
          I've built various academic and personal projects using technologies
          like <span className="font-semibold text-[#e99b63]">React</span>,{" "}
          <span className="font-semibold text-[#e99b63]">Tailwind CSS</span>,{" "}
          <span className="font-semibold text-[#e99b63]">Laravel</span>, and{" "}
          <span className="font-semibold text-[#e99b63]">Node.js</span>.
        </p>
        <p className="mt-4">
          I love turning ideas into real web applications that are functional,
          clean, and user-friendly. I’m always eager to learn new things and
          collaborate on exciting projects!
        </p>
      </div>
    </section>
  );
};

export default About;
