import { apple, google, bill } from "../assets";
import style from "../style";

function Billing() {
	return (
		<div className="flex sm:flex-row sm:mb-0 flex-col md:justify-between h-[455px] items-center mb-[500px] md:w-[1170px]">
			<div className="relative">
				<img src={bill} alt="bill-image" className="h-[455px] object-contain" />
				<div className="absolute blue__gradient left-[-85%] bottom-[90%] w-[100%] h-[100%] opacity-20 z-[1]"></div>
				<div className="absolute pink__gradient left-[-85%] bottom-[-50%] w-[90%] h-[90%] z-[2]"></div>
			</div>
			<div className="ss:max-w-[540px]">
				<h2 className={`mb-5 ${style.heading2}`}>
					Easily control your billing & invoicing.
				</h2>
				<p className={style.paragraph}>
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
					aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
					placerat.
				</p>
				<div className="flex mt-10 gap-6 ">
					<button>
						<a href="#">
							<img src={apple} alt="apple" />
						</a>
					</button>

					<button>
						<a href="#">
							<img src={google} alt="google-play" />
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Billing;
