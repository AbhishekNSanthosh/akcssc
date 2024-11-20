import { subtitle, title } from "@/components/primitives";
import Image from "next/image";

export default function AboutAkcs() {

	
		const textGradientStyle = {
		background: "-webkit-linear-gradient(50deg, #FFFFFF, #921C25, #921C25,#FFFFFF)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	  };
  return (
    <div className="md:ml-5 md:pl-10 lg:pl-2">
      <div className="flex justify-center  pt-5 pb-5">
        <h1 className={title()}>Meet our host - <span style={textGradientStyle}> Government Engineering College Kozhikode (GECK)</span></h1>
      </div>
      <div className="flex flex-col lg:flex-row md:pl-16 justify-center gap-8 lg:py-0">
        {/* Left Section (Text) */}
        <section className="flex flex-col text-justify gap-4 py-1 pb-0 md:py-16 max-w-xl ">
          <div className="mb-md px-1 lg:pt-0 md:pt-1 md:pb-1">
            <h1>
            The <b>IEEE Student Branch at Government Engineering College, Kozhikode (GECK)</b>, established in 2012, is a dynamic community focused on fostering professional growth and technical excellence among students. It organizes a variety of events, workshops, and competitions, covering topics like programming, software development, and emerging technologies, alongside webinars and interactive sessions on communication and business writing.
            <br />
            The branch also hosts the <b>Computer Society Student Branch Chapter (CS SBC)</b>, which specializes in computer science-focused activities such as hackathons, coding competitions, and technical talks. This year, IEEE SB GECK proudly hosts <b>AKCSSC 2024</b>, themed <b>"Aspire, Achieve, Accelerate,"</b> providing students across Kerala with opportunities to learn, network, and innovate. By offering mentorship and resources, IEEE SB GECK continues to inspire its members to excel in technology and engineering.            
            </h1>
          </div>
        </section>
        {/* Right Section (Image) */}
        <div className="max-w-lg flex-row pt-10 lg:pt-16 md:pt-2 pl-5 pr-5 lg:pr-0 lg:pl-0">
          {/* Add your image here */}
          <section className="lg:pt-10">
            <div>
              <Image
                src="/geck.png"
                className="relative"
                width={700}
                height={1600}
                alt="akcssc"
                style={{
                  borderRadius: "20px",
                  boxShadow: "6px 6px 0px 0px  #921C25",
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}


