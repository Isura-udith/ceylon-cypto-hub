import React, { useState } from "react";
import { FaMobileAlt, FaShieldAlt, FaLock, FaDollarSign, FaGlobe, FaSyncAlt, FaCoins, FaArrowUp } from "react-icons/fa";

const ourWork = [
  {
    icon: <FaMobileAlt size={32} />, 
    title: "Mobile Payment",
    description: "Secure loans using real estate properties as collateral.",
    alt: "mobile",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Security & Control",
    description: "Unlock liquidity by leveraging mortgage securities.",
    alt: "security",
  },
  {
    icon: <FaLock size={32} />,
    title: "Protect the Identity",
    description: "Tap into a global network of lenders and borrowers.",
    alt: "protect",
  },
  {
    icon: <FaDollarSign size={32} />,
    title: "No Transaction Fees",
    description: "Leverage the security and transparency of blockchain technology.",
    alt: "dollar",
  },
];

const card = [
  {
    icon: <FaShieldAlt size={32} />,
    title: "Secure and Transparent",
    description: "Benefit from the security and transparency provided by blockchain technology.",
    name: "shield",
  },
  {
    icon: <FaGlobe size={32} />,
    title: "Global Reach",
    description: "Access financing opportunities from anywhere in the world. Increased revenue and growth opportunities.",
    name: "internet",
  },
  {
    icon: <FaSyncAlt size={32} />,
    title: "Seamless Transactions",
    description: "Facilitate smooth and efficient financing processes on the Radix platform.",
    name: "refresh",
  },
  {
    icon: <FaCoins size={32} />,
    title: "Diverse Asset Coverage",
    description: "Utilize real assets, mortgage securities, and Metaverse assets as collateral.",
    name: "coin",
  },
];

const aboutUsContent = [
  "Briefly explain the concept of assets backed financing and its benefits.",
  "Highlight the unique selling proposition of the InfyToken ecosystem in enabling this type of financing globally and across different asset classes.",
];

const dropDownData = [
  {
    title: "What is assets backed investing in the blockchain?",
    description: "Under both IFRS and the Swiss Code of Obligations, the accounting treatment of cryptocurrencies held by an entity depends on the entity’s business model. If the business model does not permit classification as inventory, the residual category in the Swiss Code of Obligations can be ‘investments’, with fair value movements recognised in profit or loss if there is an observable market price in an active market. For IFRS, the residual category will be intangible assets.",
  },
  {
    title: "Why these Tokens?",
    description: "A crypto token is a representation of an asset or interest that has been tokenized on an existing cryptocurrency's blockchain. Crypto tokens and cryptocurrencies share many similarities, but cryptocurrencies are the native asset of a blockchain.",
  },
  {
    title: "How to buy these tokens?",
    description: "Another option to buy the Token is through a decentralized exchange (DEX) which supports the blockchain where your Token resides. This guide will show you how to buy Token by connecting your crypto wallet to a decentralized exchange (DEX) and using your Binance account to buy the base currency.",
  },
  {
    title: "What is assets backed investing in the blockchain?",
    description: "Cryptocurrencies have evolved beyond digital coins with volatile speculative value. One of the many types of crypto assets that have emerged in recent years and has potential in a range of applications is asset-backed tokens. These tokens represent a bridge between traditional assets and blockchain technology, combining the security and transparency of distributed ledgers with tangible, real-world assets.",
  },
];

const About = () => {
  return (
    <div className="flex-col w-full gap-2 p-16 px-16 pt-1 mx-auto itemscol-center font-inter sm:px-10">
      <div className="flex items-center w-full gap-2 px-10 py-14 sm:px-20">
        <div className="flex flex-col gap-10">
          <div className="max-w-4xl">
            <span className="text-4xl text-[#c9ccd1] font-semibold">
              Unlock Global Financing Opportunities with Our system.
            </span>
          </div>
          <div className="flex flex-col gap-5 max-w-2l">
            {aboutUsContent?.map((data, index) => (
              <span key={index} className="text-xl text-[#f0f3f7] font-normal">
                {data}
              </span>
            ))}
          </div>
          <button className="flex py-3 px-5 bg-gradient-to-br from-[#9517AF] to-[#3206D3] text-white rounded-md w-fit text-lg hover:bg-gradient-to-l">
            Learn crypto
          </button>
        </div>
        <div className="i hidden lg:block max-w-[750px] xl:min-w-[200px]">
          <img src="https://cdn.pixabay.com/photo/2018/05/04/22/45/image-3375234_960_720.png" alt="Ecosystem" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-16 px-16 sm:px-20">
        <div className="flex flex-col items-center gap-7">
          <span className="font-semibold text-5xl text-[#f1f1f3] text-center">
            Key Features Of InfyToken Ecosystem
          </span>
          <span className="text-2xl font-normal text-center max-w-2l">
            Emphasize the benefits of choosing the Token ecosystem for assets backed financing
          </span>
        </div>
        <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-7">
          {card?.map((data, index) => (
            <div className="flex items-center max-w-[650px] cursor-pointer hover:shadow-lg rounded-2xl" key={index}>
              <div className="w-full bg-gradient-to-t to-[#ab0dca] from-[#3206D3] px-[1px] border py-[1px] 2xl:px-0.5 2xl:py-0.5 rounded-2xl">
                <div className="h-full w-full rounded-2xl py-6 px-5 flex flex-col gap-2.5">
                  <div className="flex items-center justify-center w-12 h-12 text-white">
                    {data.icon}
                  </div>
                  <span className="text-lg sm:text-2xl font-semibold text-[#eff0f1]">
                    {data.title}
                  </span>
                  <span className="text-md sm:text-xl font-normal text-[#eff2f7]">
                    {data.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-10 px-8 pt-16 pb-6 sm:px-20">
        <div className="flex flex-col items-center gap-7">
          <span className="text-2xl sm:text-4xl text-[#e5e6e9] font-semibold">
            Why Choose InfyToken
          </span>
          <span className="text-xl sm:text-2xl text-[#dadee5] font-normal text-center p-8">
            Emphasize the benefits of choosing the Token ecosystem for assets backed financing
          </span>
        </div>
        <div className="flex flex-col-reverse justify-between gap-3 lg:flex-row">
          <img src="https://cdn.pixabay.com/photo/2019/05/20/20/02/money-4217486_1280.png" className="max-h-[500px] hidden sm:block px-16" alt="Financing" />
          <div className="flex flex-col self-center gap-10 lg:self-end">
            {ourWork?.map((data, index) => (
              <div className="flex gap-6" key={index}>
                <div className="flex items-center justify-center w-12 h-12 text-white">
                  {data.icon}
                </div>
                <div className="text-[#e1e3e7] w-fit flex flex-col text-5xl">
                  <span className="font-semibold text-lg sm:text-2xl !leading-[54px]">
                    {data.title}
                  </span>
                  <span className="text-sm font-normal sm:text-xl">
                    {data.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full px-8 pt-16 max-w-screen-3xl sm:px-20 gap-9">
        {dropDownData.map((acc, index) => (
          <div key={index} className="py-1">
            <div className="w-full bg-gradient-to-t to-[#9517AF] from-[#3206D3] px-[1px] 2xl:px-0.5 2xl:py-0.5 py-[1px] rounded-2xl pt-10 max-h-21">
              <div className="w-full h-full rounded-2xl">
                <DropDown title={acc.title} content={acc.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

export const DropDown = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div
      className="w-full gap-3 py-8 bg-transparent cursor-pointer px-7"
      onClick={toggleExpanded}
    >
      <div className="flex flex-row items-center justify-between gap-3 text-left">
        <h5 className="flex-1 text-lg font-medium sm:text-2xl ">{title}</h5>
        <div className="flex items-center justify-center pt-10 rounded-full max-h-2">
          <FaArrowUp size={20} className={`transform ${expanded ? "rotate-180" : ""}`} />
        </div>
      </div>
      <div
        className={`overflow-hidden pt-0 transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-40" : "max-h-1"
        }`}
      >
        <p className="pb-4 text-sm font-normal text-left sm:text-xl ">
          {content}
        </p>
      </div>
    </div>
  );
};