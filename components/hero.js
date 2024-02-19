import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Connect, Collaborate, and Grow Together
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Welcome to Skiwap your ultimate destination for finding
              collaborators, mastering new skills, and exploring job
              opportunities. Connect with potential partners, mentors, and
              employers seamlessly on Skiwap, simplifying your journey towards
              personal and professional growth.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Create account
              </Link>
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <span> Login</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};



export default Hero;