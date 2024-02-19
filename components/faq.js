import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is Skiwap free to use?",
    answer:
      "Yes, Skiwap is free to use for basic features such as creating a profile, browsing for collaborators, and engaging in communication with other users. However, we may offer premium features or services in the future that may require a subscription or payment.",
  },
  {
    question: "How can I ensure my privacy and security on Skiwap?",
    answer:
      "Skiwap takes the privacy and security of our users seriously. We have implemented various measures to protect your personal information and ensure a safe and secure experience on our platform. You can control who can view your profile and contact you by adjusting your privacy settings. Additionally, we have a team dedicated to monitoring and addressing any suspicious or inappropriate behavior on Skiwap. If you encounter any issues or concerns, please don't hesitate to reach out to our support team for assistance.",
  },
  {
    question: "Can I use Skiwap to showcase my portfolio?",
    answer:
      "Absolutely! Skiwap provides users with the ability to create personalized portfolios to showcase their skills, projects, and achievements. You can upload images, videos, links to your work, and descriptions to effectively showcase your talents to potential collaborators, mentors, and employers.",
  },
  {
    question:
      "How can I provide feedback or suggestions for improving Skiwap? ",
    answer:
      "We value feedback from our users and are always looking for ways to improve the Skiwap experience. You can provide feedback or suggestions by contacting our support team directly through the app or website. We appreciate your input and strive to incorporate user feedback into our ongoing development efforts.",
  },
];

export default Faq;