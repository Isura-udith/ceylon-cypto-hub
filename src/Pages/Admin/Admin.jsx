import { Link } from "react-router-dom";

const NeuButton = () => {
    return (
      <div className=" min-h-[200px] flex items-center justify-center pt-60 pb-60 space-x-12">

        <Link to={'/SignDashboard'}>
        <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Sign Details
        </button>
        </Link> 
 
        <Link to={'/TradeDashboard'}>
        <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Trade Details
        </button>
        </Link>

        <Link to={'/TradeClose'}>
        <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Trade Closes
        </button>
        </Link>

      </div>
    );
  };
  
  export default NeuButton;