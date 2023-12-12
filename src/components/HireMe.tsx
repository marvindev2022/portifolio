import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import svg from "./../assets/animado.png";
import svgDark from "./../assets/ef61681f892c95bd339c1f25682df49b.svg";
import { useTheme } from "../context/theme";

export default function HireMe() {
  const {isDarkMode} = useTheme();
  return (
    <Link
      to="https://web.whatsapp.com/send/?phone=5521964642376"
      target="_blank"
      className="hidden md:block w-auto  top-[-7rem] rounded-[50%]  absolute md:top-[-14rem] xl:top-[-14rem] hd:top-[-22rem] md:right-[1.9375rem]"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img
          src={!isDarkMode ? svgDark : svg}
          alt="svg"
          className="md:w-[18.75rem] md:h-[14.375rem] rounded-[50%] "
        />
      </motion.div>
      <p className={`flex justify-center items-center md:w-24 md:h-24 ${isDarkMode ? 'bg-white text-dark  shadow-dark' : 'bg-dark text-white  shadow-white'} text-center rounded-[50%] absolute bottom-[4.051rem] left-[6.45rem] font-extrabold`}>
        Contate-me
      </p>
    </Link>
  );
}
