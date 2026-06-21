import { useContextPage } from "../context";
import ScrollToTopButton from "./ScrollToTopButton";

interface Prop {
  active?: Boolean;
  scrollToTop?: Boolean;
}

export default function Footer({ scrollToTop }: Prop) {
  const { isDarkMode } = useContextPage();

  const divider = isDarkMode ? "border-border" : "border-zinc-200";
  const mutedText = isDarkMode ? "text-muted-dark" : "text-zinc-400";

  return (
    <footer
      className={`w-full border-t ${divider} flex flex-col sm:flex-row items-center justify-between px-6 md:px-16 xl:px-32 py-6 relative gap-4`}
    >
      {scrollToTop && <ScrollToTopButton />}
      <span className={`text-sm font-mono ${mutedText}`}>
        Marcus Roza · Engenheiro de Software
      </span>
      <span className={`text-sm ${mutedText}`}>
        © 2026
      </span>
    </footer>
  );
}
