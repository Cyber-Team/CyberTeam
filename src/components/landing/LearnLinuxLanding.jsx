import React from "react";
import Typewriters from "typewriter-effect";
import Particle from "../Particle/Particle";

function LearnLinuxLanding() {
  return (
    <>
      <Particle />
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 class="my-5 text-base font-medium tracking-tight text-[#da0404] uppercase">
          <Typewriters
            options={{
              strings: ["Learn", "Linux"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p class="max-w-5xl px-5 mt-2 text-4xl font-black leading-tight text-center text-[#da0404] sm:mt-0 sm:px-0 sm:text-5xl">
          Embrace the Penguin: Your Gateway to Linux Expertise.
        </p>

        {/* <p class="max-w-5xl px-5 mt-2 text-md font-black leading-tight text-center text-[#da0404] sm:mt-10 sm:px-0 sm:text-lg">
          Embrace the Penguin: Your Gateway to Linux Expertise. 
        </p> */}
      </div>
    </>
  );
}

export default LearnLinuxLanding;
