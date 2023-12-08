import HireMe from "./HireMe";
interface Prop{
  active?:Boolean
}
export default function Footer({active}:Prop) {
  return (
    <footer className="w-screen  flex flex-col lg:h-10 sm:flex-row  items-center  justify-center border-t-2  relative pt-5 lg:pt-12 ">
      {active && <HireMe/>}
      <span className="w-full   flex lg:py-10 p-5 lg:px-32 items-center justify-center">
        2023 © All Rights Reserved.
      </span>
      <span className="w-full  flex lg:py-10 p-5 lg:px-32 items-center  justify-center gap-2">
        Built with <b className="text-red-500"> ❤️ </b> by Marcus Roza
      </span>
    </footer>
  );
}
