import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = ["Product", "Blog", "Support", "Contact"];
 const legal = ["Terms", "Privacy", "Legal"];
 return (
   <div className="relative">
     <Container>
       <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
         <div className="lg:col-span-2">
           <div>
             {" "}
             <Link
               href="/"
               className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
             >
               <Image src="/img/logo.svg" alt="SS" width="150" height="50" />
             </Link>
           </div>
         </div>

         <div>
           <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
             {navigation.map((item, index) => (
               <Link
                 key={index}
                 href="/"
                 className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
               >
                 {item}
               </Link>
             ))}
           </div>
         </div>
         <div>
           <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
             {legal.map((item, index) => (
               <Link
                 key={index}
                 href="/"
                 className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
               >
                 {item}
               </Link>
             ))}
           </div>
         </div>
         <div className="">
           <div>Follow us</div>
           <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
             <a
               href="https://twitter.com/web3templates"
               target="_blank"
               rel="noopener"
             >
               <span className="sr-only">Twitter</span>
               <Twitter />
             </a>
             <a
               href="https://twitter.com/web3templates"
               target="_blank"
               rel="noopener"
             >
               <span className="sr-only">Discord</span>
               <Discord />
             </a>
             <a
               href="https://facebook.com/web3templates"
               target="_blank"
               rel="noopener"
             >
               <span className="sr-only">Facebook</span>
               <Facebook />
             </a>
             <a
               href="https://instagram.com/web3templates"
               target="_blank"
               rel="noopener"
             >
               <span className="sr-only">Instagram</span>
               <Instagram />
             </a>
             <a href="https://linkedin.com/" target="_blank" rel="noopener">
               <span className="sr-only">Linkedin</span>
               <Linkedin />
             </a>
           </div>
         </div>
       </div>
     </Container>
   </div>
 );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);
const Discord = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.13c-4.4 0-7.99-3.58-7.99-7.99 0-1.78.58-3.42 1.56-4.75-.03.09-.05.17-.05.26 0 .38.31.69.69.69s.69-.31.69-.69c0-.38-.31-.69-.69-.69-.41 0-.74-.33-.74-.75 0-.18.06-.34.15-.48.04-.08.09-.16.15-.23-2.51.83-4.3 3.25-4.3 6.06 0 3.36 2.72 6.07 6.07 6.07 3.36 0 6.07-2.71 6.07-6.07 0-.34-.03-.67-.08-1 .05-.06.09-.12.14-.19.05-.06.11-.11.17-.17.07-.07.13-.13.2-.19.01-.01.02-.03.03-.04.03-.05.07-.09.1-.14.04-.05.07-.1.1-.15.05-.08.1-.16.14-.24.03-.07.05-.14.07-.22.01-.05.02-.1.03-.16.02-.09.04-.17.05-.26 0-.38-.31-.69-.69-.69-.38 0-.69.31-.69.69 0 .09.02.17.05.25-.3.51-.48 1.09-.48 1.72 0 1.65 1.34 2.99 2.99 2.99s2.99-1.34 2.99-2.99c0-.6-.18-1.16-.48-1.63.3-.08.58-.21.83-.39a3 3 0 0 0-2.17-.97c.32-.33.54-.76.6-1.23 0 0 .01-.05.01-.07 0-.09-.01-.17-.03-.26.33-.03.64-.1.92-.21-.21.28-.45.54-.71.76.03-.05.06-.09.09-.14.09-.12.17-.25.24-.38.02-.05.05-.09.07-.13.04-.09.08-.18.11-.28.04-.12.08-.24.12-.36.04-.14.07-.28.1-.42.03-.14.05-.28.07-.42.02-.16.04-.32.06-.48.01-.09.03-.18.04-.27.01-.1.03-.19.04-.29 0-.01.01-.03.01-.04.01-.05.02-.09.03-.14 0-.04.01-.09.01-.14 0-.06.01-.12.01-.18v-.05c0-.01 0-.01 0-.01 0-.01 0-.01 0-.01l.01-.01h.01c.02-.08.03-.17.05-.25l.01-.04c0-.01 0-.02 0-.02 0-.02.01-.04.01-.06 0-.02.01-.03.01-.05 0-.03.01-.05.01-.08 0-.04.01-.08.01-.12s.01-.07.01-.1c0-.01.01-.02.01-.03 0-.03.01-.06.01-.1 0-.02 0-.03 0-.05 0-.03.01-.05.01-.08 0-.04.01-.09.01-.13 0-.02.01-.04.01-.06 0-.03.01-.06.01-.09 0-.04.01-.08.01-.12s.01-.07.01-.11c0-.03.01-.06.01-.09 0-.03.01-.06.01-.09s.01-.06.01-.09c0-.03.01-.07.01-.1 0-.03.01-.06.01-.09s.01-.06.01-.09c0-.03.01-.07.01-.11c0-.02.01-.04.01-.07 0-.02.01-.03.01-.05 0-.03.01-.06.01-.09 0-.03 0-.06.01-.09 0-.02 0-.04.01-.06s0-.05.01-.08c0-.02.01-.04.01-.06 0-.02.01-.04.01-.06 0-.02.01-.03.01-.05 0-.02.01-.05.01-.07s.01-.04.01-.06c0-.02.01-.03.01-.05s.01-.04.01-.06c0-.02.01-.03.01-.05s.01-.03.01-.04l.01-.02.01-.02c0-.01 0-.01.0 1.44c0 1.44-1.18 2.62-2.62 2.62s-2.62-1.18-2.62-2.62c0-1.08.64-2.01 1.55-2.43-.02.2-.03.41-.03.61 0 2.19 1.73 3.97 3.87 4.1-.4.09-.81.13-1.24.13-.3 0-.59-.03-.88-.08.59 1.82 2.3 3.14 4.32 3.18-1.58 1.24-3.58 1.98-5.75 1.98-.37 0-.74-.02-1.1-.07 2.04 1.3 4.46 2.06 7.06 2.06 8.46 0 13.07-7 13.07-13 .01-.2 0-.4-.02-.59.9-.65 1.68-1.47 2.3-2.4z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);


