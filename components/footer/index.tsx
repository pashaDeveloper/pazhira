import React from "react";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import Enamad from "./footerContent/Enamad";
import Container from "../shared/container";

const Footer = () => {

  return (
    <Container>

    <footer className="mt-12">
      <div className="border-t-[1px] border-slate-500/30">
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="border-t-[1px] border-slate-500/30 py-4 flex justify-center items-center">
        <Enamad />
      </div>
    </footer>
    </Container>
  );
};

export default Footer;