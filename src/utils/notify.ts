import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css"; 
const widthScreen = window.screen.width;
export const notifySuccess = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: false,
    style: {
      borderRadius: "10px",
      width: "385px",
      height: "54px",
      top: "100px",
      right: `${widthScreen > 768 ? "-10" : "80"}px`,
      left: `${widthScreen > 768 ? "0" : "20"}px`,

      bottom: "0",
      opacity: 1,
    },
    className: "bg-green-500 text-white", 
  });
};

export const notifyError = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    theme: "colored",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      borderRadius: "10px",
      width: "385px",
      height: "54px",
      top: "100px",
      right: `${widthScreen > 768 ? "80" : "0"}px`,
      left: `${widthScreen > 768 ? "0" : "20"}px`,
      bottom: "0",
      opacity: 1,
    },
    className: "bg-red-500 text-white",
  });
};
