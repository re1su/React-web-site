import style from "../style";
import { arrowUp } from "../assets";

function GetStarted() {
	return (
		<div
			className={`flex flex-row w-[140px] h-[140px] rounded-full bg-blue-gradient flexCenter p-[2px] ${style.flexCenter} cursor-pointer`}
		>
			<div
				className={`flex-row w-[100%] h-[100%] rounded-full bg-primary ${style.flexCenter} flex flex-col`}
			>
				<div className={`leading-[20px] ${style.flexStart}`}>
					<p className="text-[18px] font-medium leading-[23px]">
						<span className="text-gradient">Get</span>
					</p>
					<img
						src={arrowUp}
						alt="arrowUp"
						className="w-[23px] h-[23px] object-contain ml-1"
					/>
				</div>
				<p className="text-[18px] font-medium">
					<span className="text-gradient text-[18px]">Started</span>
				</p>
			</div>
		</div>
	);
}

export default GetStarted;
