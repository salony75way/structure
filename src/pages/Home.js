import AllAssets from "../components/AllAssets/AllAssets";
import Assured from "../components/assured/Assured";
import ClaimSpot from "../components/ClaimSpot";
import LayoutSection from "../components/common/LayoutSection/index";
import React from "react";
import ReadyTrade from "../components/ReadyTrade/ReadyTrade";

const layoutSection1 = {
  image:{
    position: 'right',
    src: 'Rectangle.png'
  },
  heading: "Buy stocks with crypto",
  description:
    "No market closes. No trading fees. All the stocks and crypto coins you love.",
  sendLink: true
};


const layoutSection2 = {
  image:{
    position: 'right',
    src: 'Rectangle.png'
  },
  heading: "Trade crypto and stocks",
  description:
    "Have $200 in Bitcoin and want to purchase $100 of a Tesla stock? No problem, Structure makes this easy with the tap of a button.",
  button: {
    label: "Swap assets",
    link: "",
  },
};

const layoutSection3 = {
  image:{
    position: 'left',
    src: 'Rectangle.png'
  },
  button: {
    label: "Get access now",
    link: "",
  },
  heading: "No market closes",
  description:
    "Trade stocks, crypto, and other assets on Structure 24/7.¹ Markets are always open, weekends and holidays included.",
  sendLink: false
};

const layoutSection4 = {
  image:{
    position: 'right',
    src: 'Rectangle.png'
  },
  button: {
    label: "Start trading",
    link: "",
  },
  heading: "No trading pair limitations",
  description:
    "Unlike Coinbase, Binance, and other crypto exchanges, any asset you own on Structure can be swapped with any crypto or stock we have available. Swap $1 or more of Bitcoin for your favorite new alt coin. Trade $1 or more of your Tesla stock for another stock or crypto coin.",
  sendLink: false
};
const layoutSection5 = {
  image:{
    position: 'left',
    src: 'Rectangle.png'
  },
  button: {
    label: "Send a payment",
    link: "",
  },
  heading: "A better way to send and receive payments",
  description:
    "Send payments in the asset of your choice. On Structure, all assets work like money. Received Bitcoin but really wanted Google stock? Accept payments in the asset of your choice.",
  sendLink: false
};

const layoutSection6 = {
  image:{
    position: 'left',
    src: 'Rectangle.png'
  },
  button: {
    label: "View open positions",
    link: "",
  },
  heading: "Connecting the world of assets",
  description:
    "Structure was created to give people around the world access to the same investment assets.  We’re on a mission to empower investors of all types through secure and easy-to-use  financial tools. Interested in helping us build the future of finance? Checkout our careers page to get started.",
  sendLink: false
};

const layoutSection7 = {
  image:{
    position: 'right',
    src: 'Rectangle.png'
  },
  heading: "Sign up today and get no-fee trading for life.",
  description:
    "No market closes. No trading fees. All the stocks and crypto coins you love.",
  sendLink: true
};


function Home() {
  return (
    <>
      <LayoutSection data={layoutSection1} inputLabel="Ready to start trading?" />
      <AllAssets />
      <ClaimSpot />
      <LayoutSection data={layoutSection2} />
      <LayoutSection data={layoutSection3} />
      <LayoutSection data={layoutSection4} />
      <LayoutSection data={layoutSection5} />
      <ReadyTrade />
      <Assured />
      <LayoutSection data={layoutSection6} />
      <LayoutSection data={layoutSection7} />
    </>
  );
}

export default Home;
