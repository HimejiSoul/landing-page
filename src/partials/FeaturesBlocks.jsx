import React from "react";
import WVMP3 from "../images/WVMP-3.jpg";
import Ourteam from "../images/our_team.jpg";
import Collaboration from "../images/collaboration.jpg";

function FeaturesBlocks() {
	return (
		<section className="relative" data-aos="zoom-y-out">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			{/* Section header */}
			{/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
				<h1 className="h2 mb-4">Layanan Cybersecurity</h1>
				<p className="text-xl text-gray-600">
					Kemajuan teknologi turut menciptakan risiko keamanan bagi bisnis.
					Solusi Keamanan Siber kami mengintegrasikan pengalaman praktis dan
					keahlian para profesional dengan memberikan implementasi keamanan yang
					komprehensif.
				</p>
			</div> */}
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					{/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4">Layanan Kami</h2>
						<p className="text-xl ">
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
							cupidatat.
						</p>
					</div> */}

					{/* Items */}
					<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
						{/* 1st item */}
						<div className="relative flex flex-col p-6 bg-white rounded shadow-xl gap-1">
							<img
								className="md:max-w-none mx-auto rounded-lg mb-5 w-full max-w-full"
								src={Ourteam}
								alt="Features bg"
							/>
							<h4 className="text-md font-medium leading-snug tracking-tight bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
								Our Expert
							</h4>
							<h1 className="text-xl font-bold">
								Solusi Relevan Dari Pakar Terbaik
							</h1>
							<p className="text-gray-600 mt-2">
								Tim kami merupakan para ahli bersertifikasi dari berbagai latar
								belakang industri yang berpengalaman dan telah bekerja sama
								selama puluhan tahun dengan berbagai sektor bisnis.
							</p>
							<a
								className=" text-white bg-gradient-to-br from-blue-500 to-teal-400 w-fit mt-5 px-4 py-3 rounded-md"
								href="#0"
							>
								Learn more
							</a>
						</div>

						{/* 2nd item */}
						<div className="relative flex flex-col p-6 bg-white rounded shadow-xl gap-1">
							<img
								className="md:max-w-none mx-auto rounded-lg mb-5 w-full max-w-full"
								src={Collaboration}
								alt="Features bg"
							/>
							<h4 className="text-md font-medium leading-snug tracking-tight bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
								Collaboration
							</h4>
							<h1 className="text-xl font-bold">
								Layanan Kolaborasi Kelas Dunia
							</h1>
							<p className="text-gray-600 mt-2">
								Berkolaborasi dengan firma dan pakar terkemuka baik lokal maupun
								internasional untuk menambah jenis dan kualitas layanan serta
								memastikan bahwa kami memberikan hasil layanan terbaik bagi
								klien.
							</p>
							<a
								className=" text-white bg-gradient-to-br from-blue-500 to-teal-400 w-fit mt-5 px-4 py-3 rounded-md"
								href="#0"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturesBlocks;
