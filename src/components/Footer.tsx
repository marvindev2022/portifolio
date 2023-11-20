export default function Footer() {
  return (
    <footer className="w-[390px] md:w-full  flex items-center  border-t-2">
      <span className="hidden sm:flex w-full sm:w-1/2  md:py-10 p-5 md:px-32 items-center relative">
        2023 © All Rights Reserved.
      </span>
      <span className="w-full sm:w-1/2  flex md:py-10 p-5 md:px-32 items-center justify-center gap-2 relative ">
        Built with <b className="text-red-500"> ❤️ </b> by Marcus Roza
      </span>
    </footer>
  );
}
