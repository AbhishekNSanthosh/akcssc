import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  const textGradientStyle = {
    background: "-webkit-linear-gradient(50deg, #FFFFFF, #921C25, #921C25,#FFFFFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="pl-2">
      <div className="flex justify-center pt-5 pb-5">
        <h1 className={title()}>
          About <span style={textGradientStyle}>AKCSSC</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly gap-8 pt-0">
        <section>
          <div className="lg:pt-16 pl-5 pr-5">
            <Image
              src="/akcssc.jpg"
              className="relative"
              width={500}
              height={500}
              alt="akcssc"
              style={{
                borderRadius: '30px', // Make the edges curved
                boxShadow: '6px 6px 0px 0px  #921C25', // Add a green drop shadow
              }}
            />
          </div>
        </section>

        <div className="max-w-lg pl-2 lg:pl-0">
          <section className="flex flex-row justify-start gap-4 py-1 pb-0 md:py-10 max-w-6xl">
            <div className="mb-md px-1 lg:pt-4 md:pt-1 md:pb-1 text-justify">
              <h1>
                The <b>All Kerala Computer Society Student Convention (AKCSSC)</b> is an annual event by the <b>IEEE Computer Society Kerala Chapter</b>, uniting computer science students, professionals, and educators across Kerala. It fosters knowledge sharing, collaboration, and skill development through inspiring talks, technical workshops, and competitions. The tagline for <b>AKCSSC 2024</b>, <b>&quot;Aspire, Achieve, Accelerate,&quot;</b> encourages participants to set ambitious goals and excel in technology.
                <br />
                This year marks the <b>10th anniversary</b> of AKCSSC, celebrating a decade of innovation and networking. Former IEEE CSKS chairs will join for a special reunion, sharing insights and fostering connections between alumni and students. The event will feature panels, workshops, and retrospectives, honoring its legacy while inspiring future tech leaders.
              </h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
