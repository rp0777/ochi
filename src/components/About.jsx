function About() {
  return (
    <section className=" bg-[#004D43]">
      <div
        data-scroll
        data-scroll-speed="-.1"
        className=" w-full pt-10 md:pt-32 lg:-mb-36 bg-green-800 text-white rounded-t-3xl"
      >
        {/* ABOUT PARAGRAPH */}
        <h1 className=" w-full md:w-[85%] px-6 md:px-12 pb-10 text-[6.5vw] md:text-[3.5vw] leading-[6.5vw] md:leading-[3.5vw] tracking-tight">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>

        {/* READ MORE WITH PIC SECTION */}
        <div className=" flex flex-col md:flex-row gap-5 w-full pt-8 md:pt-5 px-12 pb-10 border-t-[1px] border-[#3a3f2a]">
          <div className=" w-full md:w-1/2">
            {/* MAIN HEADING */}
            <h1 className=" text-[8vw] md:text-[4vw] leading-[4.5vw] tracking-tight">
              Our approach:
            </h1>

            {/* READ MORE BUTTON */}
            <button className=" uppercase flex items-center gap-5 md:gap-10 mt-6 md:mt-10 px-8 md:px-10 py-4 md:py-6 bg-zinc-900 rounded-full text-white text-base md:text-lg">
              Read More
              <div className=" w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>

          <div className=" w-full mt-5 md:mt-0 md:w-1/2 md:h-[70vh]">
            <img
              className=" rounded-lg"
              src="/about.jpg"
              alt="about section image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
