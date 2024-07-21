import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Trade = () => {
  return (
    <div className="">

      <TextParallaxContent
        imgUrl="https://cdn.pixabay.com/photo/2021/10/09/06/23/stock-market-6693060_1280.jpg?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="How to buy cryptocurrency"
      >
        <ExampleContentTwo />
        
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://cdn.pixabay.com/photo/2021/08/06/00/38/stock-trading-6525084_960_720.jpg??q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       // subheading="Broker"
        heading="Connect with borker"
      >
        <ExampleContentThree />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white"
    >
      <p className="mb-2 text-xl text-center md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-4xl font-bold text-center md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContentTwo = () => (
  <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
    How to buy cryptocurrency
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-blue-100 md:text-2xl">
      The first step is deciding which platform to use. Generally, you can choose between a traditional broker or dedicated cryptocurrency exchange:
 Traditional brokers: 
 These are online brokers who offer ways to buy and sell cryptocurrency, as well as other financial assets like stocks, bonds, and ETFs. These platforms tend to offer lower trading costs but fewer crypto features.
Cryptocurrency exchanges: 
There are many cryptocurrency exchanges to choose from, each offering different cryptocurrencies, wallet storage, interest-bearing account options, and more.
      </p>
    </div>
  </div>
);

const ExampleContentThree = () => (
  <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
    Connect with breker
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Choosing a cryptocurrency exchange is often the first step investors take when exploring the word of digital assets. 
      While there are many ways to exchange cryptocurrencies for one another, centralized crypto exchanges provide a relatively easy way to convert cash into coins and tokens. 
      </p>
    </div>
  </div>
  

);
export default Trade;