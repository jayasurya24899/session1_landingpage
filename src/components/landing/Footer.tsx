import React from "react";

const Footer = () => (
  <footer className="bg-[#06020d] border-t border-white/[0.06] py-4">
    <p className="text-center text-white/30 text-xs">
      © {new Date().getFullYear()} All rights reserved.{" "}
      <span className="text-white/50 font-semibold">Brand Bark</span>
      {" "}·{" "}
      <span className="text-white/50 font-semibold">Greenwill Tecgs</span>
    </p>
  </footer>
);

export default Footer;