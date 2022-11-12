import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

import Giris from "views/IndexSections/Giris.js"
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Giris />
          <Download />
          <NucleoIcons />
          <Examples />
        </div>
        <Footer />
      </div>
    </>
  );
}
