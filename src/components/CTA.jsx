import Button from "./Button";
import styles from "../style";

function CTA() {
	return (
		<div className="flex ss:flex-row ss:gap-0 flex-col gap-10 justify-between items-center w-full px-16 py-10 rounded-2xl bg-black-gradient mb-[82px]">
			<div className="">
				<h2 className={`ss:${styles.heading2} text-[20px]`}>Let’s try our service now!</h2>
				<p className={`ss:${styles.paragraph} text-[15px] max-w-[445px]`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
			<Button />
		</div>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
