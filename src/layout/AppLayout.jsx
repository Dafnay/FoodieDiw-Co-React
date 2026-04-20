import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};
