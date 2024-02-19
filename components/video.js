import { useState } from "react";
import Container from "./container";
import Image from "next/image";
import promoImg from "../public/img/section4.png";

const Video = () => {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-10 rounded-2xl flex justify-center">
        <Image
          src={promoImg}
          width="400"
          height="200"
          className={"object-cover"}
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </div>
    </Container>
  );
};

export default Video;