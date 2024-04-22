import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
      className=" w-full h-screen md:h-auto lg:h-screen  bg-zinc-900 pt-1"
    >
      <div className=" textstructure mt-28 md:mt-20 p-10 md:p-5 lg:p-20">
        {/* INTRODUCTION  */}
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className=" w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className=" -mb-1 md:mb-2 lg:mb-4 mr-5 md:mr-2 lg:mr-1 w-[15vw] md:w-[8vw] lg:w-[8vw] h-[8.5vw] md:h-[5vw] lg:h-[4vw] relative"
                >
                  <img
                    className=" ml-2 lg:ml-0 rounded lg:rounded-md scale-[1.5] lg:scale-90"
                    src="/design.jpg"
                    alt=""
                  />
                </motion.div>
              )}
              <h1 className=" uppercase text-[10vw] md:text-[6vw] lg:text-[6vw] leading-[10vw] md:leading-[6.5vw] lg:leading-[5.5vw] tracking-tighter font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* TEXTS & START BUTTON */}
      <div className=" w-full h-[200px] md:h-fit lg:h-fit border-t-[1px] border-zinc-200 mt-[20vw] lg:mt-14 flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center py-5 p-10 lg:px-20">
        {/* TEXTS */}
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className=" text-md lg:text-lg font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        {/* START BUTTON */}
        <div className="start flex items-center gap-5">
          <div className=" px-4 py-2 border-[1px] border-zinc-400 font-light text-md md:text-sm uppercase rounded-full cursor-pointer hover:bg-zinc-800">
            Start the project
          </div>

          <div className=" w-10 h-10 border-[1px] border-zinc-400 hidden md:hidden lg:flex items-center justify-center rounded-full cursor-pointer hover:bg-zinc-800">
            <span className=" rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
