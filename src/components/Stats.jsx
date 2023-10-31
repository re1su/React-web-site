import { stats } from "../constants";
import style from "../style";

function Stats() {
	return (
		<section className={`${style.flexCenter} sm:flex-row flex-col flex-wrap mb-6`}>
			{stats.map((stat) => {
				return <div key={stat.id} className="flex-1 flex justify-center items-center">
					<h4 className="text-[20px] xs:text-[30px] text-white">{stat.value}</h4>
					<p className="text-gradient uppercase text-[20px] leading-5 xs:leading-10 xs:text-[20px] ml-3">{stat.title}</p>
				</div>;
			})}
		</section>
	);
}

export default Stats;
