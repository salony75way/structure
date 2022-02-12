import CentralizeContentSection, {
  Left,
  Right,
} from "../common/CentralizeContentSection";
import React, { useState } from "react";

import Card from "./Card";
import Details from "../Details";
import avalan from "../../assets/img/avalan.png";
import classNames from "classnames";
import cosmos from "../../assets/img/cosmos.png";
import decen from "../../assets/img/decen.png";
import internet from "../../assets/img/internet.png";
import shiba from "../../assets/img/shiba.png";
import styles from "./AllAssets.module.css";
import yearn from "../../assets/img/yearn.png";

const data = [
  {
    id: 1,
    name: "Yearn Classic Finance",
    symbol: yearn,
    price_usd: "$20.19",
    percentage: "109.3%",
  },
  {
    id: 2,
    name: "Decentraland",
    symbol: decen,
    price_usd: "$3.12",
    percentage: "27.1%",
  },
  {
    id: 3,
    name: "SHIBA INU",
    symbol: shiba,
    price_usd: "$0.00005225",
    percentage: "21.4%",
  },
  {
    id: 4,
    name: "Avalanche",
    symbol: avalan,
    price_usd: "$83.31",
    percentage: "22.3%",
  },
  {
    id: 5,
    name: "Internet Computer",
    symbol: internet,
    price_usd: "$46.03",
    percentage: "16.4%",
  },
  {
    id: 6,
    name: "Cosmos",
    symbol: cosmos,
    price_usd: "$31.84",
    percentage: "12.0%",
  },
];

const AllAssets = () => {
  const [isOpen, setIsOpen] = useState(1);
  const value = { label: "Browse all assets" };
  return (
    <CentralizeContentSection>
      <Left>
        <div className={styles.tab_header}>
          <p onClick={() => setIsOpen(1)} className={classNames({[styles.header]: true, [styles.active]: true})}>
            Leaders
          </p>
          <p onClick={() => setIsOpen(2)} className={styles.header}>
            Stocks
          </p>
          <p onClick={() => setIsOpen(3)} className={styles.header}>
            Crypto
          </p>
          <p onClick={() => setIsOpen(4)} className={styles.header}>
            Option(Coming soon)
          </p>
        </div>
        {isOpen === 1 && (
          <div className={styles.cards}>
              {data.map((item, index) => (
                <Card key={index} item={item} />
              ))}
          </div>
        )}

        {isOpen === 2 && (
          <div className="container">
            <div className="row">Stocks</div>
          </div>
        )}
        {isOpen === 3 && (
          <div className="container">
            <div className="row">Crypto</div>
          </div>
        )}
        {isOpen === 4 && (
          <div className="container">
            <div className="row">Option</div>
          </div>
        )}
      </Left>
      <Right>
        <Details
          data={{
            heading: "All of your assets, now in one place",
            description:
              "Deposit crypto to the Structure Mobile App and buy stocks, crypto, and other assets in seconds",
            button: {
              label: value.label,
            },
          }}
        />
      </Right>
    </CentralizeContentSection>
  );
};

export default AllAssets;
