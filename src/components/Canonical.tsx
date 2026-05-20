import { useEffect } from "react";

const Canonical = () => {
  useEffect(() => {
    const existingCanonical =
      document.querySelector("link[rel='canonical']");

    if (existingCanonical) {
      existingCanonical.remove();
    }

    const link = document.createElement("link");

    link.rel = "canonical";
    link.href =
      "https://judeva.com.au" + window.location.pathname;

    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, []);

  return null;
};

export default Canonical;
