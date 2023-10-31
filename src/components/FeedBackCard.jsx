import { quotes } from "../assets";
import styles from "../style";

// eslint-disable-next-line react/prop-types
function FeedBackCard({ content, name, title, img }) {
	return (
		<div
			className={
				"md:w-[370px] sm:w-[270px] xs:w-full flex flex-col justify-between px-8 py-12 w-[270px] h-[395px] feedback-card rounded-[18px]"
			}
		>
			<img src={quotes} alt="" className="w-[43px]" />
			<h3 className="text-white font-poppins text-xl">{content}</h3>
			<div className="flex justify-start items-center gap-4">
				<img src={img} alt="" />
				<div className="">
					<h3 className="text-white font-poppins text-lg">{name}</h3>
					<p className={`${styles.paragraph} text-base`}>{title}</p>
				</div>
			</div>
		</div>
	);
}

export default FeedBackCard;
