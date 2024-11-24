"use client";
import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";
import NextLink from "next/link";
import AboutPage from "./about/page";
import AboutAkcs from "./aboutakcs/page";
import PricingCards from "./pricing/page";
import Aboutcsks from "./aboutcsks/page";
import Head from "next/head";
import Sponser from "./docs/page";
import Gallery from "./gallery/page";

export default function Home() {
  const dissolvingEffectStyle = {
    filter:
      "linear-gradient(90deg, transparent, transparent 20%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.5) 60%, transparent 80%, transparent)",
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/brouchure.pdf";
    downloadLink.download = "brouchure.pdf";
    downloadLink.click();
  };

  const textGradientStyle = {
    background:
      "-webkit-linear-gradient(50deg, #FFFFFF, #921C25, #921C25,#FFFFFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  
  return (
    <div>
      <Head>
        <title>Akcssc</title>
        <meta
          property="og:title"
          content="All kerala computer society student convention"
          key="title"
        />
        <link rel="icon" href="/logo1.png" type="image" />
      </Head>

      <div className="flex flex-wrap justify-evenly gap-8 lg:py-10">
        <section className="flex flex-col justify-start gap-4 py-0 pb-0 md:py-16 max-w-3xl text-center">
          <div className="mb-md px-0 lg:pt-16 md:pt-1 md:pb-1">
            <h1 className={title()}>All&nbsp;</h1>
            <h1 className={title()}>
              <span style={textGradientStyle}>Kerala&nbsp;</span>
            </h1>
            <br />
            <h1 className={title()}>Computer Society&nbsp; </h1>
            <br />
            <h1 className={title()}>
              <span style={textGradientStyle}>Student&nbsp;Convention</span>
            </h1>
            <h1 className={subtitle()}>
              <b>&quot;Aspire, Achieve, Accelerate.&quot;</b>
            </h1>
            <h2 className={subtitle()}>December 13 - 15 2024</h2>
          </div>
        </section>

        {/* Right Section (Image) */}
        <div className="max-w-lg pl-8 pr-8 lg:pr-0 lg:pl-0">
          <section>
            <div>
              <Image
                src="/main.jpeg"
                className="relative"
                width={500}
                height={500}
                alt="roboarm"
              />
            </div>
          </section>
        </div>
      </div>
      
      <div className="flex gap-3 pt-8 lg:pt-3 pr-2 mb-10 justify-center">
        <Link
          as={NextLink}
          href={"#register"}
          className={buttonStyles({
            radius: "full",
            variant: "shadow",
          })}
          style={{ backgroundColor: "#921C25" }}
        >
          <span style={{ color: "white" }}>Register Now</span>
        </Link>
        {/* <Link
          onClick={handleDownload}
          href={""}
          className={buttonStyles({           
            radius: "full",
            variant: "shadow",
          })}
          style={{ backgroundColor: "#921C25" }}
        >
          <span style={{ color: "white" }}>Brochure</span>
        </Link> */}
      </div>

      <div className="pt-16 mt-16 pb-10 mb-16 pl-5 pr-5 lg:pl-0" id="about">
        <section>
          <AboutPage />
        </section>
      </div>

      <div>
        <section className="pr-5 pl-5">
          <AboutAkcs />
        </section>
      </div>

      <div>
        <section className="pr-5 pt-10 pl-5">
          <Aboutcsks />
        </section>
      </div>

      <div className="" id="register">
        <section>
          <PricingCards />
        </section>
      </div>         

      <div>
        <section>
          <Sponser />
        </section>
      </div>

      <div id="gallery">
        <section>
          <Gallery />
        </section>
      </div>
    </div>
  );
}
