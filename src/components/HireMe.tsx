import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import svg from "./../assets/animado.png";


export default function HireMe(){

    return(
        <Link
        to="https://api.whatsapp.com/resolve/?deeplink=%2F551197449-8322&not_found=1"
        target="_blank"
        className="hidden md:block w-auto  top-[-7rem] rounded-[50%] text-white absolute md:top-[-15rem] md:left-[.9375rem]"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img
            src={svg}
            alt="svg"
            className="md:w-[18.75rem] md:h-[14.375rem] rounded-[50%] "
          />
        </motion.div>
        <p className="flex justify-center items-center md:w-24 md:h-24 bg-white text-black text-center rounded-[50%] absolute bottom-[4.051rem] left-[6.45rem] shadow-white">
          Contate-me
        </p>
      </Link>
    )
}