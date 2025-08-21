const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 
        bg-gradient-to-br dark:from-[#f5f5f5] dark:via-[#fff] dark:to-[#e99b63] 
        from-[#181818] via-[#333] to-[#e99b63]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e99b63]">
        Contact Me
      </h2>
      <p className="max-w-xl text-center dark:text-[#333] text-[#f5f5f5] text-lg leading-relaxed mb-8">
        Have a question or want to collaborate on a project? Feel free to reach
        out to me!
      </p>
      <form className="w-full max-w-lg dark:bg-white bg-[#333] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium dark:text-[#333] text-[#f5f5f5]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e99b63] dark:bg-gray-100 bg-[#181818] text-[#333] dark:text-[#f5f5f5]"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium dark:text-[#333] text-[#f5f5f5]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e99b63] dark:bg-gray-100 bg-[#181818] text-[#333] dark:text-[#f5f5f5]"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium dark:text-[#333] text-[#f5f5f5]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e99b63] dark:bg-gray-100 bg-[#181818] text-[#333] dark:text-[#f5f5f5]"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#e99b63] text-white font-semibold rounded-md hover:bg-[#d88a57] transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
