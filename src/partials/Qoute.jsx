import React from "react";

function Qoute() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pb-12 md:pb-20">
					<div
						className="relative bg-gray-900 rounded py-10 px-8 md:py-12 md:px-10 shadow-2xl overflow-hidden text-left gap-5 flex flex-col "
						data-aos="zoom-y-out"
					>
						{/* Background illustration */}
						<div
							className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
							aria-hidden="true"
						>
							<svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<radialGradient
										cx="35.542%"
										cy="34.553%"
										fx="35.542%"
										fy="34.553%"
										r="96.031%"
										id="ni-a"
									>
										<stop stopColor="#DFDFDF" offset="0%" />
										<stop stopColor="#4C4C4C" offset="44.317%" />
										<stop stopColor="#333" offset="100%" />
									</radialGradient>
								</defs>
								<g fill="none" fillRule="evenodd">
									<g fill="#FFF">
										<ellipse
											fillOpacity=".04"
											cx="185"
											cy="15.576"
											rx="16"
											ry="15.576"
										/>
										<ellipse
											fillOpacity=".24"
											cx="100"
											cy="68.402"
											rx="24"
											ry="23.364"
										/>
										<ellipse
											fillOpacity=".12"
											cx="29"
											cy="251.231"
											rx="29"
											ry="28.231"
										/>
										<ellipse
											fillOpacity=".64"
											cx="29"
											cy="251.231"
											rx="8"
											ry="7.788"
										/>
										<ellipse
											fillOpacity=".12"
											cx="342"
											cy="31.303"
											rx="8"
											ry="7.788"
										/>
										<ellipse
											fillOpacity=".48"
											cx="62"
											cy="126.811"
											rx="2"
											ry="1.947"
										/>
										<ellipse
											fillOpacity=".12"
											cx="78"
											cy="7.072"
											rx="2"
											ry="1.947"
										/>
										<ellipse
											fillOpacity=".64"
											cx="185"
											cy="15.576"
											rx="6"
											ry="5.841"
										/>
									</g>
									<circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
								</g>
							</svg>
						</div>
						<h3 className="text-white mb-px text-3xl font-bold">
							Layanan Cybersecurity
						</h3>
						<p className="text-gray-300 text-md w-3/5">
							Kemajuan teknologi turut menciptakan risiko keamanan bagi bisnis.
							Solusi Keamanan Siber kami mengintegrasikan pengalaman praktis dan
							keahlian para profesional dengan memberikan implementasi keamanan
							yang komprehensif.
						</p>
						<a className="btn bg-white hover:bg-gray-800 w-fit" href="#0">
							Learn more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Qoute;
