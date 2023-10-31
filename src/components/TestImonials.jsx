import style from "../style";
import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";

function TestImonials() {
	return (
		<div
			id="clients"
			className="flex flex-col mt-[170px] md:w-[1170px] mb-[100px] relative"
		>
			<div className="absolute z-[0] w-[60%] h-[100%] right-[-50%] rounded-full blue__gradient opacity-40"></div>
			<div className="flex sm:flex-row flex-col flex-1 gap-20 items-center mb-[50px]">
				<h2 className={`${style.heading2} sm:ml-5 md:max-w-[550px] ss:max-w-[650px] max-w-[280px]`}>
					What people are saying about us
				</h2>
				<p className={`${style.paragraph} md:max-w-[450px] ss:max-w-[550px] max-w-[320px]`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
			<div className="flex justify-between sm:flex-row flex-col items-center">
				{feedback.map((person) => {
					return <FeedBackCard key={person.id} {...person} />;
				})}
			</div>
		</div>
	);
}

export default TestImonials;
