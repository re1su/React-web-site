import { airbnb, binance, coinbase, dropbox } from "../assets";

function Clients() {
	return (
		<div className="flex w-[1170px] max-h-[60px] items-center justify-around md:min-w-[192px] min-w-[120px] flex-1 mb-[150px] md:flex-row flex-col md:gap-0 gap-6">
			<img src={airbnb} alt="airbnb-img" className="object-contain sm:w-[192px] w-[100px]" />
			<img src={binance} alt="binance-img" className="object-contain sm:w-[192px] w-[100px]" />
			<img src={coinbase} alt="coinbase-img" className="object-contain sm:w-[192px] w-[100px]" />
			<img src={dropbox} alt="dropbox-img" className="object-contain sm:w-[192px] w-[100px]" />
		</div>
	);
}

export default Clients;
