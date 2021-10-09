import React, { useState } from 'react';
import './App.css';
import { getLifePathNumber, getDaysInMonth } from './LifePathNumUtils';

function App() {
  /*
  January   – 31 days.
  February  – 28 days in a common year and 29 days in leap years.
  March     – 31 days.
  April     – 30 days.
  May       – 31 days.
  June      – 30 days.
  July      – 31 days.
  August    – 31 days.
  September – 30 days
  October   – 31 days
  November  – 30 days
  December  – 31 days
  */

  const months = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const [curDay, setCurDay] = useState(8);
  const [curYear, setCurYear] = useState(1801);
  const [curMonth, setCurMonth] = useState(months[0]);
  const [curMonthNum, setCurMonthNum] = useState(1);//the integer representation of the current selected month, jan is 1, feb 2 and so on
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(curMonthNum, curYear));
  const [lifePathNum, setLifePathNum] = useState(getLifePathNumber(`${curDay}/${curMonthNum}/${curYear}`));

  // console.log(getDaysInMonth(2, 2000));

  const monthChanged = (e: any) => {
    const monthNum = months.findIndex((month) => month === e.target.value) + 1;
    setCurMonthNum(monthNum);
    setCurMonth(months[monthNum - 1]);
    // console.log(`month selected ${e.target.value} num selected ${monthNum}`);
    setLifePathNum(getLifePathNumber(`${curDay}/${monthNum}/${curYear}`));
    setDaysInMonth(getDaysInMonth(monthNum, curYear));
  }

  const dayChanged = (e: any) =>{
    const newDay:number = Number(e.target.value) + 1;
    // console.log(`day changed vals are newday${newDay} curMonthNum${curMonthNum}`)
    setCurDay(newDay);
    setLifePathNum(getLifePathNumber(`${newDay}/${curMonthNum}/${curYear}`));
  }

  const yearChanged = (e: any) =>{
    const newYear = Number(e.target.value) + 1;
    setCurYear(newYear);
    setLifePathNum(getLifePathNumber(`${curDay}/${curMonthNum}/${newYear}`));
  }

  // console.log(new Date().getFullYear());

  return (
    <div className="App">
      {/* {getLifePathNumber("8/8/1995")} 22<br/> 
      {getLifePathNumber("9/28/1999")} 11<br/>
      {getLifePathNumber("1/19/2001")} 5<br/>
      {getLifePathNumber("1/1/1999")} 3<br/> */}
      <div className="selectContainer">
      <label htmlFor="month">Month</label>
      <select className="dateDropDown" name="month" id="month" onChange={monthChanged}>
        {months.map(month => {
          return <option key={month} value={month}>{month}</option>
        })}
      </select>
      </div>
      <div className="selectContainer">
      <label htmlFor="day">Day</label>
      <select className="dateDropDown" name="day" id="day" onChange={dayChanged}>
        {[...Array(daysInMonth)].map((e, i) =>{
          return <option key={i} value={i}>{i+1}</option>
        })}
      </select>
      </div>
      <div className="selectContainer">
      <label htmlFor="year">Year</label>
      {/* <select className="dateDropDown" name="year" id="year" onChange={yearChanged}>
        {[...Array(new Date().getFullYear() - 1800)].map((e, i) =>{
          return <option key={i} value={i+1800}>{i+1801}</option>
        })}
      </select> */}
      <select className="dateDropDown" name="year" id="year" onChange={yearChanged}>
        {[...Array(new Date().getFullYear() - 1800)].map((e, i) =>{
          return <option key={i} value={2021 - i - 1}>{2021 - i}</option>
        })}
      </select>
      </div>
      <div className="lifePath">The lifepath number for<br/>{curMonth}/{curDay}/{curYear} is {lifePathNum}</div>
    </div>
  );
}

export default App;
