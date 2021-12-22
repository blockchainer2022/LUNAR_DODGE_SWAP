/* eslint-disable no-unused-vars */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./style.css";
const Index = React.memo(
  ({
    totalSupply = 0,
    tokenSold = 0,
    account = false,
    totalSupplyFormated,
    tokenSoldFormated,
  }) => {
    const total = new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(totalSupply);

    const total2 = new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(tokenSold);
    // console.log("TOTALSUPPLE", totalSupply / 100);
    console.log(totalSupply);
    // const value = (Number(tokenSold) * 100) / Number(totalSupply);

    const progress = (Number(tokenSold) / Number(totalSupply)) * 100;
    const width =
      progress > 0
        ? Math.floor(progress) + 1 >= 100
          ? 100
          : Math.floor(progress) + 1
        : 0;

    // console.log(value);
    const BorderLinearProgress = withStyles((theme) => ({
      root: {
        height: 10,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: "lightgray",
      },
      bar: {
        borderRadius: 5,
        backgroundColor: "#F6A328",
      },
    }))(LinearProgress);

    return (
      <div className="my-4 mb-6 dark:text-gray-50 capitalize">
        {/* <div className="flex mb-1 justify-between items-center">
          <span>{total2}</span>
          <span>{total}</span>
        </div> */}

        {/* <BorderLinearProgress
          variant="determinate"
          value={value ? (value > 1 ? Math.floor(value) + 1 : 2) : 0}
        /> */}
        <div className="progressbar">
          <div className="border-4 border-gray-300 dark:border-white  progress-container overflow-hidden">
            <div
              className="bg-primary  progress-inner"
              style={{
                width: `${width}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="flex mt-1 justify-between items-center">
          <span>
            Total Sold: <span>0</span>
          </span>
          <span>
            SoftCap: <span>125BNB</span>
          </span>
          <span>
            HardCap: <span>250BNB</span>
          </span>
        </div>
      </div>
    );
  }
);

export default Index;
