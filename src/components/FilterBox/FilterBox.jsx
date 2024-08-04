import React, { useEffect, useState } from "react";
import { datarender, months, years } from "../../Utils/DataRender";
import "./FilterBox.css"

const FilterBox = ({getMonthYear}) => {
    const [selectedMonth,setSelectedmonth]=useState("January")
    const [selectedYear,setSelectedYear]=useState(2024)

    const monthrender = () => {
        return datarender(months);
      };
      
      const yearrender = () => {
        const year = [2024, 2025];
        return datarender(years);
      };
      
      // capturing the values from form 
      const handleMonthChange=(e)=>{ 
          setSelectedmonth(e.target.value);
      
      }
      const handleYearChange=(e)=>{
      setSelectedYear(Number(e.target.value))
      }
      
      
      useEffect(()=>{
        const updateParent=()=>{
      
          getMonthYear(selectedMonth,selectedYear)
          }
        updateParent()
      },[selectedMonth,selectedYear,getMonthYear])
      
  return (
    <div>
      <form className="filter-card" >
       <div className="wrapper">

        <div className="month">
        <label htmlFor="month">Month:</label>
        <select value={selectedMonth}
        onChange={handleMonthChange}
        >{monthrender()}</select>

        </div>
      <div className="month">
      <label htmlFor="Year">Year:</label>
        <select
        value={selectedYear}
        onChange={handleYearChange}
        >{yearrender()}</select>
      </div>
        
       </div>
      </form>
    </div>
  );
};

export default FilterBox;
