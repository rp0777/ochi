import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div
      data-scroll
      data-scroll-section
      className=" w-full lg:py-10 mb-10 lg:mb-0"
    >
      {/* Main Heading */}
      <div className=" w-full px-[6vw] lg:px-20 border-b-[1px] border-zinc-700 py-4 lg:py-0 lg:pb-20">
        <h1 className=" text-[8vw] lg:text-[3vw]">Featured projects</h1>
      </div>

      <div className=" px-[6vw] lg:px-20">
        <div className=" cards w-full flex flex-col lg:flex-row gap-10 mt-10">
          {/* Card 1 - Fyde */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className=" relative cardcontainer w-full lg:w-1/2 h-full lg:h-[42vw]"
          >
            {/* Card Heading */}
            <div className=" flex justify-start items-center p-4 gap-4">
              <div className="dot bg-white size-2 rounded-full"></div>
              <h1 className=" uppercase">Fyde</h1>
            </div>

            {/* Card Title with hover effect */}
            <h1 className=" absolute hidden lg:flex overflow-hidden text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-bold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.054,
                  }}
                  className=" inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            {/* Card background Image */}
            <div className=" card w-full h-full lg:h-[38vw] overflow-hidden">
              <img
                className=" hover:scale-95 transition-all rounded-xl w-full h-full bg-cover"
                src="/project1.png"
                alt=""
              />
            </div>
          </motion.div>

          {/* Card 1 - Vise */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" relative cardcontainer w-full lg:w-1/2 h-full lg:h-[42vw]"
          >
            {/* Card Heading */}
            <div className=" flex justify-start items-center p-4 gap-4">
              <div className="dot bg-white size-2 rounded-full"></div>
              <h1 className=" uppercase">Vise</h1>
            </div>

            {/* Card Title with hover effect */}
            <h1 className=" absolute hidden lg:flex overflow-hidden text-[#CDEA68] right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-bold">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.054,
                  }}
                  className=" inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            {/* Card background Image */}
            <div className=" card w-full h-full lg:h-[38vw] overflow-hidden">
              <img
                className=" hover:scale-95 transition-all rounded-xl w-full h-full bg-cover"
                src="/project2.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
