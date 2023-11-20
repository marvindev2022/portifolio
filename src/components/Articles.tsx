import { useEffect, useState } from "react";

export default function Articles() {
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
    <section className="w-full h-full flex flex-wrap justify-center items-center gap-10 py-20">
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
      </article>
    </section>
  );
}
