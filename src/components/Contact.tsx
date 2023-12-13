import { useRef, useState } from "react";
import instance from "../server/instance";
import { notifyError, notifySuccess } from "../utils/notify";
import { useContextPage } from "../context";
import Footer from "./Footer";

export default function RenderContact() {
  const { isDarkMode, theme } = useContextPage();
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputMessageRef = useRef<HTMLTextAreaElement>(null);

  const [form, setForm] = useState({
    email: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    title: false,
    message: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    // Remover a borda vermelha quando o usuário começa a digitar
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validateForm = () => {
      let isValid = true;
      const newErrors = { email: false, title: false, message: false };

      if (form.email === "") {
        newErrors.email = true;
        isValid = false;
      }

      if (form.title === "" || form.title.length < 10  ) {
        newErrors.title = true;
        isValid = false;
      }

      if (form.message === "" || form.message.length < 10  ) {
        newErrors.message = true;
        isValid = false;
      }

      setErrors(newErrors);

      return isValid;
    };

    if (!validateForm()) {
      return notifyError("Preencha todos os campos corretamente!");
    }

    try {
      const { data, status } = await instance.post("/sendmail", form);

      if (status === 200) {
        notifySuccess("Mensagem enviada com sucesso!");
        setForm({ email: "", title: "", message: "" });
      } else {
        data.messages.forEach((message: string) => {
          notifyError(message);
        });
      }
    } catch (err: any) {
      err.response?.data.messages.forEach((message: string) => {
        notifyError(message);
      });
    }
  };

  return (
    <>
      <section className={`w-full h-full flex flex-col items-center sm:p-10 gap-2 py-10 ${isDarkMode ? "bg-light" : "bg-dark"} border-2 border-solid bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcontact%2Bus%2Bbanner&psig=AOvVaw0rfxNAwwFeacOiPvCLhU9-&ust=1702583848730000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjNwKGZjYMDFQAAAAAdAAAAABAD')] bg-cover bg-center)`}>
        <h1 className={`font-special font-extrabold text-5xl pb-10 ${!isDarkMode ? "text-white" : "text-black"}`}>Contato</h1>
        <div className={`w-[21.5rem] sm:w-[27.5rem] xl:w-[93rem] hd:w-[31.5rem] col-span-3 rounded-2xl border-2 ${isDarkMode ? "bg-dark border-white" : "bg-light border-dark"} relative`}>
          <div className={`flex justify-center items-center w-full h-full border-2 ${isDarkMode ? "bg-dark border-white" : "bg-light border-dark"} rounded-2xl`}>
            <div className={`w-full h-full bg-gradient-to-b from-${isDarkMode ? "#0000007b" : "#ffffffff"} via-transparent to-${theme} rounded-2`}>
              <form className="flex flex-col justify-center items-center w-full h-full py-10 gap-2 rounded-lg" onSubmit={handleSubmit}>
                <input
                  ref={inputEmailRef}
                  className={`w-10/12 border-2 rounded-lg text-black mb-2 p-2 ${errors.email ? "border-red-500" : "border-black"}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <input
                  ref={inputTitleRef}
                  className={`w-10/12 border-2 rounded-lg text-black mb-2 p-2 ${errors.title ? "border-red-500" : "border-black"}`}
                  type="text"
                  name="title"
                  placeholder="Título"
                  value={form.title}
                  onChange={handleChange}
                />
                <textarea
                  ref={inputMessageRef}
                  className={`w-10/12 h-[25rem] border-2 rounded-lg text-black mb-2 p-2 ${errors.message ? "border-red-500" : "border-black"}`}
                  name="message"
                  placeholder="Mensagem"
                  value={form.message}
                  onChange={handleChange}
                  onResize={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    e.target.style.height = "auto";
                    e.target.style.height = e.target.scrollHeight + "px";
                  }}
                />
                <button
                  className={`w-20 h-10 border-2 ${!isDarkMode ? "border-white bg-black text-white" : "border-black bg-white text-black "} rounded-lg font-extrabold`}
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
