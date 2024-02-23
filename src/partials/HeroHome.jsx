import React, { useState, useRef, useEffect } from "react";

function HeroHome() {
	return (
		<section className="relative h-screen">
			{/* Illustration behind hero content */}
			<div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
				aria-hidden="true"
			>
				<svg
					width="1360"
					height="578"
					viewBox="0 0 1360 578"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							x1="50%"
							y1="0%"
							x2="50%"
							y2="100%"
							id="illustration-01"
						>
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#EAEAEA" offset="77.402%" />
							<stop stopColor="#DFDFDF" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1232" cy="128" r="128" />
						<circle cx="155" cy="443" r="64" />
					</g>
				</svg>
			</div>

			<div className="max-w-6xl m-auto px-4 sm:px-6 py-12">
				{/* Hero content */}
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					{/* Section header */}
					<div className="text-center pb-12 md:pb-16 mt-10">
						<h1
							className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 "
							data-aos="zoom-y-out"
						>
							What We{" "}
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
								Do?
							</span>
						</h1>
						<div className="max-w-3xl mx-auto">
							<p
								className="text-xl text-gray-600 mb-8 "
								data-aos="zoom-y-out"
								data-aos-delay="150"
							>
								Kami menyadari pentingnya sustainability bagi masa depan entitas
								bisnis & perusahaan. Layanan kami diformulasikan secara khusus
								sesuai dengan kebutuhan dan tujuan bisnis untuk keberlangsungan
								entitas bisnis & perusahaan.
							</p>
							<div
								className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
								data-aos="zoom-y-out"
								data-aos-delay="300"
							>
								<div>
									<a
										className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 rounded-full"
										href="#0"
									>
										Learn more
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-4 h-4 ml-2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;
