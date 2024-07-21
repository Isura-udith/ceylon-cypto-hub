import { useCallback, useEffect, useRef, useState } from "react";
const Test = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const minuteCircle = useRef();
  const secondCircle = useRef();
  const hourCircle = useRef();
  const daysCircle = useRef();
  const changeCircleoffset = (seconds, minutes, hours, days) => {
    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${
        days > 0 ? 440 - (days * 440) / 365 : 440
      }px`;
      hourCircle.current.style.strokeDashoffset = `${
        hours > 0 ? 451 - (hours * 451) / 24 : 451
      }px`;
      minuteCircle.current.style.strokeDashoffset = `${
        minutes > 0 ? 451 - (minutes * 451) / 60 : 451
      }px`;
      secondCircle.current.style.strokeDashoffset = `${
        seconds > 0 ? 451 - (seconds * 451) / 60 : 451
      }px`;
    }
  };
  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, []);
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 1,
      customDate.getHours() + 6,
      customDate.getMinutes() + 59,
      customDate.getSeconds() + 50
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex min-h-screen h-max md:h-screen flex-col md:flex-row justify-center items-center bg-gradient-to-l sm:bg-gradient-to-t from-[#88adf1] to-[]">
      <div className="relative">
        <svg className="w-48 h-48 -rotate-90">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#88adf1] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            ref={daysCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "440px",
            }}
            className="fill-transparent stroke-white  stroke-[8px]"
          ></circle>
        </svg>
        <div className="absolute flex flex-col items-center w-24 h-20 text-2xl font-semibold text-white top-16 left-11">
          <span className="text-center">{countDownTime?.days}</span>
          <span className="text-center">
            {countDownTime?.days == 1 ? "Day" : "Days"}
          </span>
        </div>
      </div>
      <div className="relative">
        <svg className="w-48 h-48 -rotate-90">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#88adf1] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            ref={hourCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "451px",
            }}
            className="fill-transparent stroke-white  stroke-[8px]"
          ></circle>
        </svg>
        <div className="absolute flex flex-col items-center w-24 h-20 text-2xl font-semibold text-white top-16 left-11">
          <span className="text-center">{countDownTime?.hours}</span>
          <span className="text-center">
            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
          </span>
        </div>
      </div>
      <div className="relative">
        <svg className="w-48 h-48 -rotate-90">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#88adf1] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            ref={minuteCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "451px",
            }}
            className="fill-transparent stroke-white stroke-[8px]"
          ></circle>
        </svg>
        <div className="absolute flex flex-col items-center w-24 h-20 text-2xl font-semibold text-white top-16 left-11">
          <span className="text-center">{countDownTime?.minutes}</span>
          <span className="text-center">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
        </div>
      </div>
      <div className="relative">
        <svg className="w-48 h-48 -rotate-90">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#88adf1] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            cx="90"
            cy="90"
            className=" fill-transparent stroke-white  stroke-[8px]"
            ref={secondCircle}
            style={{
              strokeDasharray: "451px",
            }}
          ></circle>
        </svg>
        <div className="absolute flex flex-col items-center w-24 h-20 text-2xl font-semibold text-white top-16 left-11">
          <span className="text-center">{countDownTime?.seconds}</span>
          <span className="text-center">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Test;