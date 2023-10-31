import Button from "./Button";
import style, { layout } from "../style";
import { features } from "../constants";

// eslint-disable-next-line react/prop-types
function Feature({ title, icon, content }) {
	return (
		<div className="flex max-w-[470px] max-h-[115px] gap-3 px-3 py-3 rounded-[18px] feedback-card">
			<div className={`flex items-center justify-center`}>
				<div className="w-[50px] h-[50px] bg-cyan-950 rounded-full z-0 flex justify-center items-center">
					<img
						src={icon}
						alt="feature-icon"
						className="h-[28px] w-[28px] z-1"
					/>
				</div>
			</div>
			<div className="">
				<h3 className="text-white text-xl font-poppins">{title}</h3>
				<p className={`${style.paragraph} text-sm leading-[18px]`}>{content}</p>
			</div>
		</div>
	);
}

function Business() {
	return (
		<section className="ss:mt-[150px] mt-[100px] md:w-[1170px] flex md:flex-row flex-col justify-between items-center ss:mb-[160px]" id="features">
			<div className="md:max-w-[600px]">
				<h2 className={`mb-5 ${style.heading2}`}>
					You do the business, we’ll handle the money.
				</h2>
				<p
					className={`text-[14px] ss:text-[20px] ss:leading-9 leading-5 ${style.paragraph} mb-14`}
				>
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<Button />
			</div>
			<div className={`${layout.sectionImg} flex-col gap-3 max-w-[600px]`}>
				{features.map((feature) => {
					return <Feature key={feature.id} {...feature} />;
				})}
			</div>
		</section>
	);
}

export default Business;
