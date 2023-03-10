import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import { FiSend } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import Select from 'react-select'


const options1 = [
    { value: 'TAKA', label: 'TAKA' },
    { value: 'USD', label: 'USD' },
    { value: 'BWP', label: 'BWP' },
    { value: 'BND', label: 'BND' },
    { value: 'XAF', label: 'XAF' },
    { value: 'CVE', label: 'CVE' },
    { value: 'CNY', label: 'CNY' },
    { value: 'NZD', label: 'NZD' },
    { value: 'XCD', label: 'XCD' },

];

const options2 = [
    { value: 'Bkash', label: 'Bkash' },
    { value: 'Nagad', label: 'Nagad' },
    { value: 'Rocket', label: 'Rocket' },
    { value: 'Payoneer', label: 'Payoneer' },
    { value: 'Easy Pay Way', label: 'Easy Pay Way' },
    { value: 'FastSpring', label: 'FastSpring' },
    { value: 'PortWallet', label: 'PortWallet' },
    { value: 'ShurjoPay', label: 'ShurjoPay' },

];











const Payment = () => {

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const selectDate = (date) => {
        var curr = new Date();
        curr.setDate(curr.getDate() + date);
        return curr.toISOString().substring(0, 10);

    }



    return (


        <div className="pt-2">


            <div className="flex justify-between flex-col md:flex-row ">

                {/* Payment-Left */}
                <div className="md:w-[75%] w-[100%]">

                    {/* Payment Date */}
                    <div className="flex gap-10 justify-between items-center px-4 pt-2">
                        <div >
                            <span className="text-slate-600 font-semibold">Date: </span>
                            <input className="outline-none " id="dateRequired" type="date" name="dateRequired" defaultValue={selectDate(0)} />
                        </div>
                        <div >
                            <span className="text-slate-600 font-semibold">Due Date: </span>
                            <input className="outline-none " id="dateRequired" name="dateRequired" type="date" defaultValue={selectDate(3)} />
                        </div>
                    </div>


                    <div className="text-4xl text-blue-400  text-center pt-4 pb-8 border-b border-slate-400">Invoice#001</div>


                    {/* Bill From */}
                    <div className="border-b border-slate-400 pb-6">
                        <div className="px-4 py-2 flex justify-between flex-col md:flex-row gap-2">

                            {/* Bill From left */}
                            <div className="w-[100%] md:w-[40%]">
                                <span className="text-slate-700 font-semibold">Bill From</span>
                                <div className="space-y-6 pt-6 text-slate-700 font-semibold">
                                    <input className='p-4 w-[100%]  h-[50px] bg-slate-200 rounded-lg outline-none' type="email" name="" id="" placeholder="Email" />
                                    <textarea className=' p-4 h-[120px] w-[100%] bg-slate-200 rounded-lg outline-none' placeholder="Email" />
                                </div>
                            </div>

                            {/* Bill from Right */}
                            <div className="w-[100%]  md:w-[40%]">
                                <span className="text-slate-700 font-semibold">Bill To</span>
                                <div className="space-y-6 pt-6 text-slate-700 font-semibold">
                                    <input className='p-4 w-[100%] h-[50px] bg-slate-200 rounded-lg outline-none' type="email" name="" id="" placeholder="Email" />
                                    <textarea className='p-4 h-[120px] w-[100%] bg-slate-200 rounded-lg outline-none ' placeholder="Write Here ...." />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                {/* Payment Right */}
                <div className='md:w-[23%] w-[100%] ' >

                    {/* Payment Button */}
                    <div className='flex flex-col items-center gap-5 border-b border-slate-400 pb-6 pt-5 '>
                        <div className=' cursor-pointer flex items-center py-2 md:py-3 justify-center rounded gap-2 bg-blue-500 font-semibold text-white w-[80%] md:w-[200px]'>
                            <span className='text-[20px]' > <FiSend /></span>
                            <button className="text-[18px]">Send</button>
                        </div>

                        <div className='cursor-pointer flex items-center py-2 md:py-3 justify-center rounded gap-2 bg-emerald-500 font-semibold text-white w-[80%] md:w-[200px]'>
                            <span className='text-[20px]' > <AiOutlineEye /></span>
                            <button className="text-[18px]">Preview</button>
                        </div>

                    </div>

                    {/* Payment input */}

                    <div className="border-slate-400 pb-7 border-b px-4 md:px-0">

                        {/* Currency Input */}
                        <div className=" pt-4 w-[100%] md:w-[70%] flex flex-col gap-3 md:gap-5 ">
                            <span className="text-slate-700 font-semibold">Currency</span>
                            <div className="">
                                <Select options={options1} />
                            </div>
                        </div>

                        {/* Payment Input */}
                        <div className=" pt-5 w-[100%] md:w-[70%] flex flex-col gap-3 md:gap-5">
                            <span className="text-slate-700 font-semibold">Payment Method</span>
                            <div className="">
                                <Select options={options2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Payment Down Part */}
            <div className=" flex justify-between flex-col md:flex-row ">

                {/* Pament Left */}
                <div className="w-[100%]  md:w-[75%]  border-b border-slate-400 pb-6">

                    <div className="flex justify-between gap-7 md:gap-0  px-4 pt-4 md:pt-2 flex-col md:flex-row ">

                        {/* Item  */}
                        <div className="md:w-[25%] w-[100%]">
                            <span className="text-slate-700 font-semibold">Item</span>
                            <div className="space-y-6 pt-3 md:pt-5 text-slate-700 font-semibold">
                                <input className='p-4 w-[100%]  h-[50px] bg-slate-200 rounded-lg outline-none' type="email" name="" id="" placeholder="Email" />
                                <textarea className=' p-4 h-[120px] w-[100%] bg-slate-200 rounded-lg outline-none' placeholder="Write Here..." />
                            </div>
                        </div>

                        {/* QTY Rate */}
                        <div className="md:w-[15%] w-[100%]">
                            <span className="text-slate-700 font-semibold">QTY/Rate</span>
                            <div className="space-y-6 pt-3 md:pt-5 text-slate-700 font-semibold">
                                <input className='p-4 w-[100%] h-[50px] bg-slate-200 rounded outline-none' type="text" name="" id="" placeholder="QTY" />
                                <input className='p-4 w-[100%] h-[50px] bg-slate-200 rounded outline-none' type="text" name="" id="" placeholder="Rate" />
                            </div>
                        </div>

                        {/* Billing Period */}
                        <div className="md:w-[15%] w-[100%]">
                            <span className="text-slate-700 font-semibold">Billing Period</span>
                            <div className="space-y-6 pt-3 md:pt-5 text-slate-700 font-semibold">
                                <input className='p-4 w-[100%] h-[50px] bg-slate-200 rounded outline-none' type="text" name="" id="" placeholder="From" />
                                <input className='p-4 w-[100%] h-[50px] bg-slate-200 rounded outline-none' type="text" name="" id="" placeholder="To" />

                            </div>
                        </div>

                        {/* Ammount */}
                        <div className="md:w-[15%] w-[100%]">
                            <span className="text-slate-700 mb-3 md:pb-5 block font-semibold">Ammount</span>
                            <h2 className="text-slate-800 text-lg font-semibold">$ <span className="text-md">12.35</span></h2>
                        </div>

                        {/* Action */}
                        <div className="md:w-[15%] w-[100%]">
                            <span className="text-slate-700 block  font-semibold">Action</span>
                            <span className="px-4 text-xl text-center "><BiDotsHorizontal /></span>
                        </div>

                    </div>
                </div>

                {/* Payment Right */}
                <div className="w-[100%] md:w-[23%] pt-4 ">
                    <div className=" border-b border-slate-400 pb-6 px-4">
                        <div className='flex items-center justify-between'>
                            <span className=" text-slate-700 block  font-semibold">Notes</span>
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Payment