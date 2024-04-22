import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className=" w-full py-[20vw] md:py-[10vw] lg:py-[5vw] rounded-t-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" text-[45vw] md:text-[20vw] lg:text-[16vw] leading-none uppercase -mb-2 md:mb-1 mt-1 lg:-mt-10 font-semibold pr-20"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" text-[45vw] md:text-[20vw] lg:text-[16vw] leading-none uppercase -mb-2 md:mb-1 mt-1 lg:-mt-10 font-semibold pr-20"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
