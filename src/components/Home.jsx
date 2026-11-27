import React from "react";
import Container from "./Container";
import homeIm from "../assets/homeim.jpg";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";

function Home() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-[#F6F6F3] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
            <img
              src={homeIm}
              alt="kt"
              className="overflow-hidden w-[140px] h-[200px] flex-[0_0_auto] rounded"
            />
            <h1 className="text-[#432c4f] max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              KAITLYN (KATIE) CHENG
              <br />
            </h1>
            <h2 className="text-[#432c4f]">
                {" "}
                currently: engineering at harvey mudd college
              </h2>
          </div>
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 bg-[#F6F6F3] text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                my highlights!
              </h2>
              <ContactIcon className="w-[112px] h-[112px] flex-[0_0_auto]" />
              <h5 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              want to chat?
              </h5>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <Socials />
      </FadeIn>
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#F6F6F3] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            I'm an engineer exploring work at the intersection of materials 
            science and mechanical engineering, while trying to bridge my passion 
            for innovation, sustainability, and conservation.{" "}
            <span className="text-[#8a8a93]">
              {" "}
              join me to explore my unique projects and creative solutions.
            </span>
          </h3>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Home;
