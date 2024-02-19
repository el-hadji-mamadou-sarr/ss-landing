import {
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  FaceSmileIcon,
  LifebuoyIcon,
  LinkIcon,
  MagnifyingGlassCircleIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/section1.jpg";
import benefitTwoImg from "../public/img/section2.png";
import benefitThreeImg from "../public/img/section3.png";

const benefitOne = {
  title: "Personalized Feeds",
  desc: "Experience a curated selection of content designed specifically for you. Effortlessly navigate through feeds tailored to your interests, swiping to like what resonates and pass on what doesn't. Connect with like-minded individuals and forge meaningful relationships with ease.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Tailored Experience",
      desc: "Get content personalized to your interests, making your experience more enjoyable and engaging.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Efficient Discovery",
      desc: "Easily discover new connections, opportunities, and resources by swiping through feeds, saving you time and effort.",
      icon: <LifebuoyIcon />,
    },
    {
      title: "Meaningful Connections",
      desc: "Connect effortlessly with like-minded individuals, fostering a sense of community and collaboration within Skiwap.",
      icon: <LinkIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Mentorship",
  desc: "Find guidance, support, and expertise from experienced mentors who can help you grow personally and professionally. Connect with mentors who share your interests and aspirations, fostering valuable relationships and learning opportunities.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Expert Guidance",
      desc: "Access expert guidance and advice from experienced mentors who can offer valuable insights and perspectives.",
      icon: <TrophyIcon />,
    },
    {
      title: "Personalized Support",
      desc: "Receive personalized support tailored to your goals, challenges, and aspirations, helping you navigate your professional journey with confidence.",
      icon: <QuestionMarkCircleIcon />,
    },
    {
      title: "Networking Opportunities",
      desc: "Expand your network and connect with mentors who can introduce you to valuable opportunities, resources, and connections within your field.",
      icon: <UsersIcon />,
    },
  ],
};

const benefitThree = {
  title: "Job Recruitment",
  desc: "Discover job opportunities tailored to your skills and interests. Effortlessly browse through listings, connect with potential employers, and take the next step in your career journey.",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Tailored Job Listings",
      desc: "Access job listings curated to match your skills, preferences, and career goals, ensuring a more relevant job search experience.",
      icon: <BriefcaseIcon />,
    },
    {
      title: "Efficient Job Search",
      desc: "Streamline your job search process by easily browsing through listings, saving time and effort in finding the right opportunities.",
      icon: <MagnifyingGlassCircleIcon />,
    },
    {
      title: "Direct Connection with Employers",
      desc: "Connect directly with employers and recruiters, expanding your network and increasing your chances of landing your dream job.",
      icon: <ChatBubbleBottomCenterIcon />,
    },
  ],
};


export { benefitOne, benefitTwo, benefitThree };
