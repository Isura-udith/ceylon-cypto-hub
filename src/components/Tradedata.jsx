import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tradedata = () => {
    const mybackendurl = 'http://localhost:5000';

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [completionDate, setCompletionDate] = useState('');
    const [pair, setPair] = useState('');
    const [amount, setAmount] = useState('');
    const [cdname, setCdname] = useState('');
    const [cdnumber, setCdnumber] = useState('');
    const [cddate, setCddate] = useState('');
    const [cdcvv, setCdcvv] = useState('');
    const [, setError] = useState('');
    const [step, setStep] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (amount.length < 2) {
            setError('Amount must be at least Rs.100 up');
            return;
        }

        try {
            let res = await fetch(mybackendurl + '/tradedata', {
                method: 'POST',
                body: JSON.stringify({ name, number, email, completionDate, pair, amount, cdname, cdnumber, cddate, cdcvv }),
                headers: {
                    'Content-type': 'application/json',
                },
            });

            let result = await res.json();
            console.log(result);

            if (res.ok) {
                alert('Your request was sent successfully');
                setName('');
                setNumber('');
                setEmail('');
                setPair('');
                setAmount('');
                setCompletionDate('');
                setCdname('');
                setCdnumber('');
                setCddate('');
                setCdcvv('');
                setError('');
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error('Failed to fetch:', error);
            setError('Failed to register. Please try again.');
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const redoStep = () => {
        setStep(1);
    };

    return (
        <div className="relative flex items-center pt-20 max-h-50 max-w-980">
            <div className="container relative flex flex-col w-4/5 max-w-screen-xl mx-auto my-auto">
                <div className="text-5xl tracking-tighter text-center text-white whitespace-pre-line font-BG">
                    Let’s get trade order
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-12 bg-indigo-950 md:w-4/5 rounded-3xl">
                    {step === 1 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="py-12 mx-auto rounded-3xl md:w-3/5"
                        >
                            <div className="text-base font-light text-center ">
                                Step 1/3
                            </div>
                            <div className="w-full h-2 mt-4 bg-white rounded-3xl">
                                <div className="w-1/3 h-full bg-green-500 rounded-3xl"></div>
                            </div>
                            <div className="pb-6 mt-12 text-3xl text-center">
                                Enter your details
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Contact number"
                                    name="number"
                                    className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={nextStep} className="px-4 py-2 mt-4 font-bold text-white bg-black rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="py-12 mx-auto md:w-3/5"
                        >
                            <div className="text-base font-light text-center ">
                                Step 2/3
                            </div>
                            <div className="w-full h-2 mt-4 rounded-3xl" style={{ backgroundColor: '#e0cfc8' }}>
                                <div className="w-2/3 h-full bg-green-500 rounded-3xl"></div>
                            </div>
                            <div className="pb-4 mt-12 text-3xl text-center">
                                Let’s talk budget & timelines
                            </div>
                            <div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Crypto pair ex: Bitcoin"
                                        name="pair"
                                        className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                        value={pair}
                                        onChange={(e) => setPair(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="number"
                                        placeholder="Trade amount Rs.1500.00"
                                        name="amount"
                                        className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center mt-12">
                                    <label className="px-3 text-base">I want to trade on</label>
                                    <input
                                        type="date"
                                        id="completionDate"
                                        name="completionDate"
                                        value={completionDate}
                                        onChange={(e) => setCompletionDate(e.target.value)}
                                        className="px-2 py-2 text-black bg-gray-300 rounded-xl focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center mt-12">
                                <button type="button" onClick={prevStep} className="px-4 py-2 mr-4 font-bold text-white bg-black rounded">
                                    Previous
                                </button>
                                <button type="button" onClick={nextStep} className="px-4 py-2 font-bold text-white bg-black rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="py-12 mx-auto md:w-3/5"
                        >
                            <div className="text-base font-light text-center ">
                                Step 3/3
                            </div>
                            <div className="w-full h-2 mt-4 rounded-3xl" style={{ backgroundColor: '#e0cfc8' }}>
                                <div className="h-full bg-green-500 rounded-3xl w-3/3"></div>
                            </div>
                            <div className="pb-4 mt-12 text-3xl text-center">
                                Payment
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Card holder name"
                                    name="cdname"
                                    className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                    value={cdname}
                                    onChange={(e) => setCdname(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Card number"
                                    name="cdnumber"
                                    className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                    value={cdnumber}
                                    onChange={(e) => setCdnumber(e.target.value)}
                                    maxLength="19"
                                />
                            </div>
                            <div>
                                <input
                                    type="month"
                                    placeholder="Expiry date"
                                    name="cddate"
                                    className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                    value={cddate}
                                    onChange={(e) => setCddate(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    placeholder="CVV"
                                    name="cdcvv"
                                    className="w-full p-2 mt-4 text-black bg-gray-200 border border-gray-300 rounded focus:outline-none"
                                    value={cdcvv}
                                    onChange={(e) => setCdcvv(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-center mt-12">
                                <button type="button" onClick={prevStep} className="px-4 py-2 mr-4 font-bold text-white bg-black rounded">
                                    Previous
                                </button>
                                <button type="submit"  onClick={handleSubmit} className="px-4 py-2 font-bold text-white bg-black rounded">
                                    Payment & Submit
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 4 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="py-12 mx-auto md:w-3/5"
                        >
                            <div className="mt-12 text-base text-center text-green-400">
                                Your submission has been received! We will aim to get back to you within a working day.
                            </div>
                            <div>
                                <div className="flex justify-center mt-12">
                                    <button type="button" onClick={redoStep} className="px-4 py-2 font-bold text-white bg-black rounded">
                                        Redo the planner
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Tradedata;
