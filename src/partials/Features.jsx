import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import WVMP3 from "../images/WVMP-3.jpg";

function Features() {
	const [tab, setTab] = useState(1);

	const tabs = useRef(null);

	const heightFix = () => {
		if (tabs.current.children[tab]) {
			tabs.current.style.height =
				tabs.current.children[tab - 1].offsetHeight + "px";
		}
	};

	useEffect(() => {
		heightFix();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tab]);

	return (
		<section className="relative">
			<div
				className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
				aria-hidden="true"
			></div>
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					<div className="left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2 mb-10"></div>

					{/* Section content */}
					<div className="">
						{/* Content */}
						<div
							className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
							data-aos="fade-right"
						>
							<div className=" mb-8 flex flex-col text-center  mx-auto  ">
								<h3 className="h3 mb-3">Aktivitas</h3>
								<p className="text-xl text-gray-600">Aktivitas & Liputan</p>
							</div>
							{/* Tabs items */}
							<div
								className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-10 md:order-1 items-center flex justify-center"
								data-aos="zoom-y-out"
								ref={tabs}
							>
								<div className="relative flex flex-col text-center lg:text-right">
									{/* Item 1 */}
									<Transition
										show={tab === 1}
										appear={true}
										className="w-full"
										enter="transition ease-in-out duration-700 transform order-first"
										enterStart="opacity-0 translate-y-16"
										enterEnd="opacity-100 translate-y-0"
										leave="transition ease-in-out duration-300 transform absolute"
										leaveStart="opacity-100 translate-y-0"
										leaveEnd="opacity-0 -translate-y-16"
									>
										<div className="relative inline-flex flex-col">
											<img
												className="md:max-w-none mx-auto rounded"
												src={WVMP3}
												width="700"
												alt="Features bg"
											/>
										</div>
									</Transition>
									{/* Item 2 */}
									<Transition
										show={tab === 2}
										appear={true}
										className="w-full"
										enter="transition ease-in-out duration-700 transform order-first"
										enterStart="opacity-0 translate-y-16"
										enterEnd="opacity-100 translate-y-0"
										leave="transition ease-in-out duration-300 transform absolute"
										leaveStart="opacity-100 translate-y-0"
										leaveEnd="opacity-0 -translate-y-16"
									>
										<div className="relative inline-flex flex-col">
											<img
												className="md:max-w-none mx-auto rounded"
												src={WVMP3}
												width="700"
												alt="Features bg"
											/>
										</div>
									</Transition>
									{/* Item 3 */}
									<Transition
										show={tab === 3}
										appear={true}
										className="w-full"
										enter="transition ease-in-out duration-700 transform order-first"
										enterStart="opacity-0 translate-y-16"
										enterEnd="opacity-100 translate-y-0"
										leave="transition ease-in-out duration-300 transform absolute"
										leaveStart="opacity-100 translate-y-0"
										leaveEnd="opacity-0 -translate-y-16"
									>
										<div className="relative inline-flex flex-col">
											<img
												className="md:max-w-none mx-auto rounded"
												src={WVMP3}
												width="700"
												alt="Features bg"
											/>
										</div>
									</Transition>
								</div>
							</div>
							{/* Tabs buttons */}
							<div className="mb-8 md:mb-0 md:grid md:grid-cols-3 md:gap-6 ">
								<a
									className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 1
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(1);
									}}
								>
									<div className="flex justify-between flex-col h-full">
										<div className="font-bold leading-snug tracking-tight mb-1">
											Membangun GRC, Kunci Mencapai Tujuan Strategis Perusahaan
										</div>
										<div className="text-gray-600">
											TVeda Praxis kembali mempersembahkan webinar When Veda
											Meets Praxis: GRC Talks Series. Perusahaan mempunyai visi,
											misi dan tujuan yang ingin dicapai berupa target. Untuk
											mencapai...
										</div>
										<span className="text-sm text-blue-500 hover:underline">
											Baca Lainnya
										</span>
									</div>
								</a>
								<a
									className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 2
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(2);
									}}
								>
									<div className="flex justify-between flex-col h-full">
										<div className="font-bold leading-snug tracking-tight mb-1">
											Veda Praxis Raih PenghargaanTOP Digital Awards 2023
										</div>
										<div className="text-gray-600">
											Memasuki awal minggu, Veda Praxis kembali merasa bangga
											dan terhormat mendapatkan penghargaan sepagi Top Digital
											Implementation 2023 dan Top Leader on Digital
											Implementation 2023...
										</div>
										<span className="text-sm text-blue-500 hover:underline">
											Baca Lainnya
										</span>
									</div>
								</a>
								<a
									className={`flex items-center  text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 3
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(3);
									}}
								>
									<div className="flex justify-between flex-col h-full">
										<div className="font-bold leading-snug tracking-tight mb-1">
											Veda Praxis Vietnam Launching & 18th Anniversary
										</div>
										<div className="text-gray-600">
											Desember bukan sekadar bulan perayaan; bulan ini merupakan
											bulan pencapaian bagi Veda Praxis! Dalam rangka merayakan
											ulang tahun yang ke 18, kami dengan bangga mengumumkan...
										</div>
										<span className="text-sm text-blue-500 hover:underline">
											Baca Lainnya
										</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
