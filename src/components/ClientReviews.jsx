function ClientReviews() {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="0.5"
      className=" w-full h-full px-[8vw] lg:px-32 py-16 bg-zinc-800"
    >
      <h1 className=" text-3xl mb-7">Client&apos;s Reviews</h1>

      <div className="  flex flex-col lg:flex-row items-center gap-5">
        <div className=" cardcontainer h-[50vh] w-full lg:w-1/2">
          {/* Card 1 - Ochi */}
          <div className=" card relative rounded-xl w-full h-full bg-[#004d43] flex justify-center items-center">
            <img src="/ochi.svg" alt="ochi logo" />

            <button className=" absolute bottom-10 text-xs left-10 px-5 py-2 border-2 rounded-full border-[#CDEA68] text-[#CDEA68]">
              &copy;2019-2022
            </button>
          </div>
        </div>

        <div className=" cardcontainer flex flex-col lg:flex-row gap-5 h-full lg:h-[50vh] w-full lg:w-1/2">
          {/* Card 2 - Clutch */}
          <div className=" card relative rounded-xl w-full lg:w-1/2 h-[40vh] lg:h-full bg-[#3e3d3d] flex justify-center lg:items-center items-start pt-10 lg:pt-0">
            <img src="/clutch.svg" alt="clutch logo" />

            <button className=" absolute bottom-10 text-xs left-10 px-5 py-2 border-2 rounded-full border-[#CDEA68] text-[#CDEA68]">
              RATING 5.0 ON CLUTCH
            </button>
          </div>

          {/* Card 3 - The Futur Academy */}
          <div className=" card relative rounded-xl w-full lg:w-1/2 h-[40vh] lg:h-full bg-[#3e3d3d] flex justify-center lg:items-center items-start">
            <img
              className=" scale-50 rounded-full"
              src="/future.png"
              alt="future academy logo"
            />

            <button className=" absolute bottom-10 text-xs left-10 px-5 py-2 border-2 rounded-full border-[#CDEA68] text-[#CDEA68]">
              BUSINESS BOOTCAMP ALUMNI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;
