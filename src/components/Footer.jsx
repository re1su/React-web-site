import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
	return (
		<div className="flex flex-1 flex-col min-h-[418px] bg-black w-full justify-between px-24 py-7">
			<div className="flex justify-between mt-12 md:flex-row md:gap-0 gap-10 flex-col items-center">
				<div className="">
					<a href="#">
						<img src={logo} alt="logo-image" className="w-[266px] mb-5" />
					</a>
					<p className={`${styles.paragraph} text-xl`}>
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>
				<div className="flex w-full justify-around sm:flex-row flex-col gap-10">
					{footerLinks.map((footerLink) => {
						return (
							<div key={footerLink.title} className="flex flex-col">
								<h4 className="text-white text-xl mb-5">{footerLink.title}</h4>
								<ul className={styles.paragraph}>
									{footerLink.links.map((column) => {
										return (
											<a key={column.name} href={column.link}>
												<li>{column.name}</li>
											</a>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
			<div className="">
				<div className="w-full flex border-t-[1px] border-t-[#212529] mb-5"></div>
				<div className="flex justify-between ss:flex-row flex-col gap-8 items-center">
					<div className="text-white flex">
						<p className="mr-3">Copyright</p>
						<p className="mr-3">©</p>
						<p>2021 HooBank. All Rights Reserved.</p>
					</div>
					<div className="flex gap-5">
						{socialMedia.map((social) => {
							return (
								<a key={social.id} href={social.link}>
									<img src={social.icon} alt="" />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
