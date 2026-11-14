import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
export default function Home() {
    const [input, setInput] = useState('');
    const [from, setFrom] = useState('10');


    // Convert any value to decimal first 
    const decimal = input === "" ? null : parseInt(input, Number(from))


    return (
        <main className="overflow-hidden  bg-zinc-950 w-full  gap-2 h-screen flex items-center justify-center">


            {/* Input Card */}
            <div className="input bg-zinc-900 rounded-lg flex w-64 h-64 justify-center p-4 gap-3 flex-col">
                <label
                    className="text-white"
                    htmlFor="from">
                    Number
                    <input
                        id="from"
                        className="text-white bg-transparent border-b border-zinc-800 w-full py-2 px-2 outline-none focus:outline-none focus:ring-0 focus:border-zinc-600 placeholder:text-zinc-600"
                        placeholder="Enter your number"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </label>
                <label
                    className="text-white"
                    htmlFor="fromBase">
                    From
                    <div className="flex flex-col">

                        <div className="flex justify-between">
                            <label className="text-zinc-500" htmlFor="binary">Binary</label>
                            <input
                                value="2"
                                id="binary"
                                name="fromBase"
                                checked={from === "2"}
                                onChange={(e) => setFrom(e.target.value)}
                                type="radio" />
                        </div>
                        <div className="flex justify-between">
                            <label className="text-zinc-500" htmlFor="octal">Octal</label>
                            <input
                                value="8"
                                id="octal"
                                name="fromBase"
                                checked={from === "8"}
                                onChange={(e) => setFrom(e.target.value)}
                                type="radio" />
                        </div>
                        <div className="flex justify-between">
                            <label className="text-zinc-500" htmlFor="decimal">Decimal</label>
                            <input
                                value="10"
                                id="decimal"
                                name="fromBase"
                                checked={from === "10"}
                                onChange={(e) => setFrom(e.target.value)}
                                type="radio" />
                        </div>
                        <div className="flex justify-between">
                            <label className="text-zinc-500" htmlFor="hex">Hex</label>
                            <input
                                value="16"
                                id="hex"
                                name="fromBase"
                                checked={from === "16"}
                                onChange={(e) => setFrom(e.target.value)}
                                type="radio" />
                        </div>
                    </div>
                </label>
            </div>



            {/* Output Card */}
            <div className="bg-zinc-900 overflow-hidden rounded-lg w-64 h-64 p-5 flex flex-col justify-center gap-4">

                <div>
                    <p className="text-zinc-500 text-xs tracking-widest">RESULT</p>
                    <h1
                        className="text-white text-4xl font-medium"
                    >
                        {input || "—"}
                    </h1>
                </div>

                <div className="flex flex-col gap-2 border-t border-zinc-800 pt-4">
                    <div className="flex justify-between">
                        <span className="text-zinc-500 text-sm">Binary</span>
                        <span className="text-white text-sm">{decimal === null ? "-" : decimal.toString(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-500 text-sm">Octal</span>
                        <span className="text-white text-sm">—</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-500 text-sm">Decimal</span>
                        <span className="text-white text-sm">—</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-500 text-sm">Hex</span>
                        <span className="text-white text-sm">—</span>
                    </div>
                </div>

            </div>
        </main>
    )
}
