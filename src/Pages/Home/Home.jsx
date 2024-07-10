import React, { useContext, useEffect, useState, useRef } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  const { allCoin = [], currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

 const inputHandler = (event) => {
    setInput(event.target.value);
    if(event.target.value === '') {
      setDisplayCoin(allCoin);
    }
 }

 const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase())   
    })
    setDisplayCoin(coins);
 }
  
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  
  const [votes, setVotes] = useState([
    {
      title: "Tabs",
      votes: 1,
      color: "bg-indigo-500",
    },
    {
      title: "Spaces",
      votes: 2,
      color: "bg-fuchsia-500",
    },
    {
      title: "Who cares bro?",
      votes: 3,
      color: "bg-violet-500",
    },
  ]);

  return (
    <>
    <section className="grid items-center w-full grid-cols-1 gap-8 px-8 py-12 mx-auto max-w-10xl md:grid-cols-2">
          <div>
            <span className="block mb-8 text-4xl font-semibold text-indigo-300 md:text-3xl">
              Hi traders...
            </span>
            <h3 className="text-4xl font-semibold md:text-6xl">
              CEYLON CRYPTO HUB
            </h3>
            <p className="my-4 text-base text-indigo-300 md:text-lg md:my-6">
            Welcome to the largest cryptocurrency marketplac. Buy crypto, sell crypto, and trade crypto.
            Sign up to explore more about crypto.
            </p>
            <button className="px-4 py-2 font-medium text-white transition-all bg-indigo-500 rounded hover:bg-indigo-600 active:scale-95">
              Trade now
            </button>
          </div>
          <ShuffleGrid />
        </section>

      <div className='home'>
       <div className='hero'>
        <form onSubmit={searchHandler}>
         <input onChange={inputHandler} value={input} type="text" placeholder='Search crypto..' required/>
          <datalist id="coinlist">
          {allCoin.map((item, index) => (
          <option key={index} value={item.name} />
          ))}
         </datalist>
         <button type="submit">Search</button>
        </form>

      </div>

      <div className='crypto-table'>
        <div className='table-layout'>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24h Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>

        {
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} className='table-layout' key={item.id}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt={item.name} />
                <p>{item.name} ({item.symbol.toUpperCase()})</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0?"green":"red"}>
                {item.price_change_percentage_24h.toFixed(2)}%</p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>
    </div>

    <section className="px-4 py-12 ">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-2 md:grid-cols-[1fr_400px] md:gap-12">
        <Options votes={votes} setVotes={setVotes} />
        <Bars votes={votes} />
      </div>
    </section>
    </>
  );
}

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/6771178/pexels-photo-6771178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/6771740/pexels-photo-6771740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/7873553/pexels-photo-7873553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/5980866/pexels-photo-5980866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=compress&cs=tinysrgb&w=600&lazy=load?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1037915/pexels-photo-1037915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/342945/pexels-photo-342945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/7681757/pexels-photo-7681757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/8353793/pexels-photo-8353793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/7567234/pexels-photo-7567234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/6120217/pexels-photo-6120217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/15693277/pexels-photo-15693277/free-photo-of-dubai-downtown-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

const Options = ({ votes, setVotes }) => {
  const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

  const handleIncrementVote = (vote) => {
    const newVote = { ...vote, votes: vote.votes + 1 };

    setVotes((pv) => pv.map((v) => (v.title === newVote.title ? newVote : v)));
  };

  return (
    <div className="col-span-1 py-12">
      <h3 className="mb-6 text-3xl font-semibold text-slate-50">
        What's your opinion?
      </h3>
      <div className="mb-6 space-y-2">
        {votes.map((vote) => {
          return (
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleIncrementVote(vote)}
              key={vote.title}
              className={`w-full rounded-md ${vote.color} py-2 font-medium text-white`}
            >
              {vote.title}
            </motion.button>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <span className="mb-2 italic text-slate-400">{totalVotes} votes</span>
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          onClick={() => {
            setVotes((pv) => pv.map((v) => ({ ...v, votes: 0 })));
          }}
          className="rounded-sm bg-slate-700 px-2 py-1.5 text-sm font-medium text-slate-200"
        >
          Reset count
        </motion.button>
      </div>
    </div>
  );
};

const Bars = ({ votes }) => {
  const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

  return (
    <div
      className="col-span-1 grid min-h-[200px] gap-2"
      style={{
        gridTemplateColumns: `repeat(${votes.length}, minmax(0, 1fr))`,
      }}
    >
      {votes.map((vote) => {
        const height = vote.votes
          ? ((vote.votes / totalVotes) * 100).toFixed(2)
          : 0;
        return (
          <div key={vote.title} className="col-span-1">
            <div className="relative flex items-end w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800">
              <motion.span
                animate={{ height: `${height}%` }}
                className={`relative z-0 w-full ${vote.color}`}
                transition={{ type: "spring" }}
              />
              <span className="absolute bottom-0 left-[50%] mt-2 inline-block w-full -translate-x-[50%] p-2 text-center text-sm text-slate-50">
                <b>{vote.title}</b>
                <br></br>
                <span className="text-xs text-slate-200">
                  {vote.votes} votes
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
