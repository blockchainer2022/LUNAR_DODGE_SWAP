import "./style.css";
import moment from "moment";
const Timer = ({ days, hours, minutes, seconds, startTime, endTime }) => {
  var s = new Date(Number(startTime * 1000)).toUTCString();
  var e = new Date(Number(endTime * 1000)).toUTCString();
  // console.log(+new moment(`${s} 00:00:00`).utc() > +new Date());
  const start = +new moment(`${s}`).utc() > +new Date();

  const end = +new moment(`${e}`).utc() < +new Date();

  return (
    <div className="py-2 w-full  rounded-lg dark:text-gray-50">
      <h6 className="text-center text-md relative pb-3">
        {start ? "ICO Starts in" : end ? "ICO has ended" : "ICO ends in"}
      </h6>
      <div className=" mx-auto mt-4 grid grid-flow-col gap-4 justify-center items-center  text-xl sm:text-2xl text-center  text-gray-50  font-sans">
        <span className="w-16  h-10 flex justify-center items-center bg-primary rounded-sm text-base">
          {`${days.toString().padStart(2, "0")}d`}{" "}
        </span>
        <span className="w-16  h-10 flex justify-center items-center bg-primary rounded-sm text-base">
          {`${hours.toString().padStart(2, "0")}h`}{" "}
        </span>
        <span className="w-16  h-10 flex justify-center items-center bg-primary rounded-sm text-base">
          {`${minutes.toString().padStart(2, "0")}m`}{" "}
        </span>
        <span className="w-16  h-10 flex justify-center items-center bg-primary rounded-sm text-base">
          {`${seconds.toString().padStart(2, "0")}s`}{" "}
        </span>
      </div>
    </div>
  );
};

export default Timer;
