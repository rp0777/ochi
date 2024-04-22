import { useState } from "react";
import { useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      let clientX = e.clientX;
      let clientY = e.clientY;

      let deltaX = clientX - window.innerWidth / 2;
      let deltaY = clientY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    };

    const handleTouchMove = (e) => {
      let touchX = e.touches[0].clientX;
      let touchY = e.touches[0].clientY;

      let deltaX = touchX - window.innerWidth / 2;
      let deltaY = touchY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    };

    if ("ontouchstart" in window) {
      window.addEventListener("touchmove", handleTouchMove);
    } else {
      window.addEventListener("mousemove", handleMove);
    }

    return () => {
      if ("ontouchstart" in window) {
        window.removeEventListener("touchmove", handleTouchMove);
      } else {
        window.removeEventListener("mousemove", handleMove);
      }
    };
  }, []);

  return (
    <section className=" eyes w-full h-[30vh] lg:h-screen overflow-x-hidden lg:overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className=" relative w-full h-full bg-cover lg:bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className=" absolute flex gap-[5vw] lg:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* EYE 1 */}
          <div className=" flex justify-center items-center w-[25vw] h-[25vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-100">
            <div className=" relative w-[15vw] h-[15vw] lg:w-2/3 lg:h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className=" line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2vw] lg:h-10"
              >
                <div className=" w-[2vw] h-[2vw] lg:w-10 lg:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* EYE 2 */}
          <div className=" flex justify-center items-center w-[25vw] h-[25vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-100">
            <div className=" relative w-[15vw] h-[15vw] lg:w-2/3 lg:h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className=" line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2vw] lg:h-10"
              >
                <div className=" w-[2vw] h-[2vw] lg:w-10 lg:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eyes;
