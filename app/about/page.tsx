import React from "react";
import Link from "next/link";
import ButtonComponent from "@/components/button";

const AboutPage = () => {
  return (
    <div>
      AboutPage
      <Link href="../contact">Contaxt page</Link>
      <ButtonComponent />
    </div>
  );
};

export default AboutPage;
