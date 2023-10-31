import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex justify-between items-center py-6 navbar">
			<a href="#">
				<img src={logo} alt="logo" className="w-[200px] h-[60px]" />
			</a>
			<ul className="list-none ss:flex hidden items-center flex-1 justify-end">
				{navLinks.map((nav) => {
					return (
						<li key={nav.id} className="text-white text-2xl mr-10 last:mr-0">
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					);
				})}
			</ul>

			<div className="ss:hidden">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="object-contain w-8 h-8"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} min-w-[110px] py-6 bg-black-gradient absolute top-20 right-0 mx-6 sidebar rounded-xl`}
				>
					<ul className="list-none flex flex-col items-center flex-1 justify-end">
						{navLinks.map((nav) => {
							return (
								<li key={nav.id} className="text-white mb-5 last:mb-0">
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
