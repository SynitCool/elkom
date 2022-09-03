// next
import Head from "next/head";

// react
import React from "react";

// core components
import IndexNavbar from "../src/components/Navbars/IndexNavbar.js";
import PageHeader from "../src/components/PageHeader/PageHeader.js";

// index sections
import Login from "../src/sections/Login.js";
import NucleoIcons from "../src/sections/NucleoIcons.js";

export default function Home() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Elkom</title>
      </Head>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <NucleoIcons />
          <Login />
        </div>
      </div>
    </>
  );
}
