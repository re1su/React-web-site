import { card } from "../assets";
import style from "../style";
import Button from "./Button";

function CarDeal() {
	return (
		<div id="product" className="flex sm:flex-row flex-col items-center justify-between md:w-[1170px] max-h-[449px] sm:mb-0 mb-[250px]">
			<div className="max-w-[570px]">
				<h2 className={`${style.heading2} text-white`}>
					Find a better card deal in few easy steps.
				</h2>
				<p className={`${style.paragraph} mb-5`}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate veritatis cumque sit nostrum quis illum itaque odit ratione molestiae culpa!
				</p>
				<Button />
			</div>
			<div className="">
				<img
					src={card}
					alt="card-deal-image"
					className="h-[400px] object-contain"
				/>
			</div>
		</div>
	);
}

export default CarDeal;
