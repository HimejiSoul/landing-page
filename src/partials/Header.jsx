import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [top, setTop] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && "bg-white backdrop-blur-sm shadow-lg"
			}`}
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Site branding */}
					<div className="flex-shrink-0 mr-4">
						{/* Logo */}
						<Link to="/" className="block" aria-label="Cruip">
							<svg
								className="w-8 h-8"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<radialGradient
										cx="21.152%"
										cy="86.063%"
										fx="21.152%"
										fy="86.063%"
										r="79.941%"
										id="header-logo"
									>
										<stop stopColor="#4FD1C5" offset="0%" />
										<stop stopColor="#81E6D9" offset="25.871%" />
										<stop stopColor="#338CF5" offset="100%" />
									</radialGradient>
								</defs>
								<rect
									width="32"
									height="32"
									rx="16"
									fill="url(#header-logo)"
									fillRule="nonzero"
								/>
							</svg>
						</Link>
					</div>

					{/* Site navigation */}
					<nav className="flex">
						<div className="flex flex-col">
							<div className="md:hidden">
								<button
									onClick={toggleMenu}
									className="block text-gray-600 hover:text-gray-900 focus:outline-none"
								>
									☰
								</button>
							</div>
						</div>
						<ul
							className={`${
								isOpen ? "block bg-white justify-start" : "hidden"
							} md:flex md:flex-grow flex-wrap items-center`}
						>
							<li>
								<Link
									to="/Profil"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Profil
								</Link>
							</li>
							<li>
								<Link
									to="/layanan"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Layanan
								</Link>
							</li>
							<li>
								<Link
									to="/wawasan"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Wawasan
								</Link>
							</li>
							<li>
								<Link
									to="/aktivitas"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Aktivitas
								</Link>
							</li>
							<li>
								<Link
									to="/karir"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Karir
								</Link>
							</li>
							<li>
								<Link
									to="/layanan"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Layanan
								</Link>
							</li>
							<li>
								<Link
									to="/kontak"
									className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-4 h-4 mr-2"
									>
										<path
											fill-rule="evenodd"
											d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
											clip-rule="evenodd"
										/>
									</svg>
									Kontak
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
