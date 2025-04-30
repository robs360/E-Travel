"use client";
import * as React from "react"
import { useState } from "react";
import road from '../../assets/road.png';
import Image from "next/image";
import { Button } from "../ui/button";
import CalendarMode from "../Shadcn/Calender";
import { getCounter } from "@/services/counter";

const Search = ({setInfo}:{setInfo: React.Dispatch<React.SetStateAction<any[]>>}) => {
  const [from, setSelected] = useState('');
  const [to, setSelected2] = useState('');
  const [date, setDate] = React.useState<Date>()
  const onHandleClick = async (e: any) => {
    e.preventDefault()
    console.log(from, to, date)
    if (!date || !from || !to) {
      return
    }
   
    const res = await getCounter(from, to, date)
    console.log(res.data)
    setInfo(res.data)
  }
  return (
    <div className="p-6 rounded-3xl bg-white max-w-5xl mx-auto shadow-2xl">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-4 h-4 rounded-full border-2 border-black"></div>
        <h1 className="font-semibold text-lg text-gray-800">One Way Ticket</h1>
      </div>
      <form onSubmit={onHandleClick} className="flex flex-col gap-6 lg:flex-row items-center">

        <select
          value={from}
          onChange={(e) => setSelected(e.target.value)}
          className="px-4 py-3 text-[15px] h-[45px] w-full lg:w-[240px] text-gray-500 bg-white font-normal border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
        >
          <option value="" disabled>Select Departure</option>
          <option value="chittagong">Chittagong</option>
          <option value="sylhet">Sylhet</option>
          <option value="coxsbazar">Cox's Bazar</option>
        </select>


        <div className="hidden lg:flex items-center">
          <Image src={road} alt="Road Icon" width={35} height={35} className="opacity-80" />
        </div>

        <select
          value={to}
          onChange={(e) => setSelected2(e.target.value)}
          className="px-4 py-3 text-[15px] font-normal  h-[45px] w-full lg:w-[240px] text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
        >
          <option value="" disabled>Select Destination</option>
          <option value="chittagong">Chittagong</option>
          <option value="sylhet">Sylhet</option>
          <option value="coxsbazar">Cox's Bazar</option>
        </select>
        <CalendarMode date={date} setDate={setDate}></CalendarMode>

        <Button type="submit" className="w-full lg:w-[120px] h-[45px] bg-green-600 hover:bg-green-600 transition-all font-semibold text-white rounded-lg">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
