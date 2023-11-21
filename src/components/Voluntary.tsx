import { useEffect, useState } from "react";

export default function Voluntary() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="w-full max-h-[100%]  flex flex-wrap justify-center items-center gap-10 pt-5">
     <div className=" flex flex-wrap justify-center items-center gap-10 py-20 border" > 
     <h2 className="text-4xl font-[main]">Artigos ComuniCubos</h2>
     <article>
        <iframe
          className="max-h-[50%] overflow-auto"
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117910659337486336"
          height={isMobile ? "300" : "600"}
          width={isMobile ? "300" : "504"}
          allowFullScreen={false}
          title="Publicação incorporada"
        />
      </article>
      <article>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7109636272553439232"
          height={isMobile ? "300" : "600"}
          width={isMobile ? "300" : "504"}
          allowFullScreen={false}
          title="Publicação incorporada"
        />
      </article>
      <article>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7094678989855690752"
          height={isMobile ? "300" : "600"}
          width={isMobile ? "300" : "504"}
          allowFullScreen={false}
          title="Publicação incorporada"
        />
      </article>
      <article>
        <iframe
          src=""
          height={isMobile ? "300" : "600"}
          width={isMobile ? "300" : "504"}
          allowFullScreen={false}
          title="Publicação incorporada"
        />
      </article>
      <article>
        <iframe
          src=""
          height={isMobile ? "300" : "600"}
          width={isMobile ? "300" : "504"}
          allowFullScreen={false}
          title="Publicação incorporada"
        />
      </article></div>
      <div className=" flex flex-wrap justify-center items-center gap-10 py-20 border" >
        <h2 className="text-4xl font-[main]">Artigos Linkedin</h2>
        <article>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117910659337486336"
            height={isMobile ? "300" : "600"}
            width={isMobile ? "300" : "504"}
            allowFullScreen={false}
            title="Publicação incorporada"
          />
        </article><article>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117910659337486336"
            height={isMobile ? "300" : "600"}
            width={isMobile ? "300" : "504"}
            allowFullScreen={false}
            title="Publicação incorporada"
          />
        </article><article>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117910659337486336"
            height={isMobile ? "300" : "600"}
            width={isMobile ? "300" : "504"}
            allowFullScreen={false}
            title="Publicação incorporada"
          />
        </article><article>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117910659337486336"
            height={isMobile ? "300" : "600"}
            width={isMobile ? "300" : "504"}
            allowFullScreen={false}
            title="Publicação incorporada"
          />
        </article>
      </div>
    </section>
  );
}
