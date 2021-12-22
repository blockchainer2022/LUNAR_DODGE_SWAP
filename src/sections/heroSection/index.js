import { useState, useEffect } from "react";
import { Timer, Form, Progress } from "../../components";
import moment from "moment";
import "./style.css";
import Star from "../../assets/images/star.png";
const Index = ({
  account,
  buy,
  totalSupply,
  tokenSold,
  bnbBalance,
  icoPrice,
  userTokenBalance,
  loadWeb3,
  loadWalleConnect,
  startTime,
  endTime,
  totalSupplyFormated,
  icoPriceFormated,
  tokenSoldFormated,
  fundsRaised,
}) => {
  var e = new Date(Number(endTime * 1000)).toUTCString();
  var s = new Date(Number(startTime * 1000)).toUTCString();
  const start = +new moment(`${s}`).utc() > +new Date();
  // const end = +new moment(`${s} 00:00:00`).utc() < +new Date();

  const difference = +new moment(`${start ? s : e}`).utc() - +new Date();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  return (
    <section className="pt-6 pb-2 text-dark relative">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22,
      ].map((v) => (
        <img
          src={Star}
          alt=""
          className={` z-0 hidden sm:block absolute animate-pulse  star${v}`}
          key={v}
        />
      ))}
      <div className="container">
        <div className="max-w-xl w-full mx-auto">
          <Timer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            startTime={startTime}
            endTime={endTime}
          />
          <Progress
            totalSupply={totalSupply}
            tokenSold={tokenSold}
            account={account}
            totalSupplyFormated={totalSupplyFormated}
            tokenSoldFormated={tokenSoldFormated}
            fundsRaised={fundsRaised}
          />
          <Form
            icoPrice={icoPrice}
            account={account}
            buy={buy}
            bnbBalance={bnbBalance}
            userTokenBalance={userTokenBalance}
            loadWeb3={loadWeb3}
            loadWalleConnect={loadWalleConnect}
            startTime={startTime}
            endTime={endTime}
            icoPriceFormated={icoPriceFormated}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
