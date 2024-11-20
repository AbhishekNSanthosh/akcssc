import { title } from "@/components/primitives";
import Image from "next/image";
export default function Aboutcsks() {
	const textGradientStyle = {
		background: "-webkit-linear-gradient(50deg, #FFFFFF, #921C25, #921C25,#FFFFFF)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	  };
	return (
	<div className="pl-2">
		<div className="flex justify-center pb-5 pt-5">
			<h1 className={title()}>About <span style={textGradientStyle}>IEEE Computer Society Kerala Chapter</span></h1>
		</div>
		<div className="flex flex-wrap justify-evenly gap-8 pt-0">
			<section >
					<div className="lg:pt-16 pl-5 pr-5">
						<Image src="/csks.jpeg" className="relative" width={500} height={500} alt="akcssc"
						 style={{
							borderRadius: '30px', // Make the edges curved
							boxShadow: '6px 6px 0px 0px  #921C25', // Add a green drop shadow
						  }}
						/>
					</div>
			</section>
		

			<div className="max-w-lg pl-2 lg:pl-0 ">
			<section className="flex flex-row justify-start  gap-4 py-1 pb-0 md:py-10 max-w-6xl  ">
				<div className="mb-md px-1 lg:pt-4 md:pt-1 md:pb-1 text-justify"> 

				<h1>
					The IEEE Computer Society, the world’s leading organization for computer science and technology, serves over 60,000 members globally, connecting a communiAt the heaty of researchers, educators, IT professionals, and students. Within this network, the IEEE Computer Society Kerala Chapter stands out, with 145 professional and 2,051 student members, earning recognition through awards like the IEEE CS(Global) Outstanding Chapter Award in 2018 and the Early Career Professionals Engagement Award in 2022.
					<br />
					Established in 1985 as part of the IEEE Kerala Section, the Kerala Chapter is now the largest Computer Society Chapter globally, comprising 48 Student Branch Chapters and 2,043 members as of 2023. It organizes impactful events like the All Kerala Computer Society Student Convention (AKCSSC) and the annual SlashKey hackathon, fostering collaboration and skill development. In 2022, it co-hosted TechX, a major event featuring workshops on technology and leadership.
					<br />
					The chapter’s success is driven by its dedicated volunteers, including many in IEEE leadership roles, and its outreach efforts, like the Student-Young Professionals team established in 2022. Through its commitment to community, innovation, and volunteerism, the Kerala Chapter has become a respected leader within IEEE, inspiring positive change in technology and beyond.
				</h1>
				
				</div>
			</section>
					
			</div>
		</div>
	</div>
	);
}
