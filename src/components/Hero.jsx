import style from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

function Hero() {
	return (
		<section
			id="home"
			className={`flex md:flex-row flex-col ${style.paddingY} mb-10`}
		>
			<div
				className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
			>
				<div className="flex flex-rov items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img src={discount} alt="discount" />
					<span className="text-white mr-1">20%</span>
					<span className="text-gray-300 mr-1">Discount for</span>
					<span className="text-white mr-1">1 Month</span>
					<span className="text-gray-300 mr-1">Account</span>
				</div>

				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="flex-1 text-white ss:text-[72px] text-[52px] font-poppins font-semibold">
						<span className="">The Next</span>{" "}
						<br className="sm:block hidden" />
						<span className="text-gradient">Generation</span>{" "}
						<br className="sm:block hidden" />
					</h1>
					<div className="sm:flex hidden md:mr-4 mr-0">
						<GetStarted />
					</div>
				</div>

				<h1 className="flex-1 text-white ss:text-[72px] text-[52px] font-poppins font-semibold w-full">
					Payment method.
				</h1>
				<p className={`${style.paragraph} max-w-[640px]`}>
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We examine annual percentage rates,
					annual fees.
				</p>
			</div>

			<div className={`flex flex-1 md:my-0 my-10 ${style.flexCenter} relative` }>
				<img src={robot} alt="robot-img" className="w-[100%] h-[100%] relative z-[5] object-contain" />
				<div
					className={`pink__gradient z-[0] absolute w-[40%] h-[35%] top-0`}
				/>
				<div
					className={`white__gradient z-[1] absolute w-[80%] h-[80%] rounded-full top-0`}
				/>
				<div
					className={`blue__gradient z-[0] bottom-40 right-25 absolute w-[50%] h-[50%]`}
				/>
			</div>

      <div className={`sm:hidden flex justify-center items-center `}>
      <GetStarted />
      </div>
		</section>
	);
}

export default Hero;
