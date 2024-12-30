import * as d3 from "d3";
import { useState, useEffect, useRef } from "react";


interface BarchartProps {
    
}


const Barchart = () => {
  const ref: any = useRef();
  const [csv, setCsv] = useState(null)



  // Get Data
//   const getData  = async ()=>{
//     const response = await fetch('/data/csv/aiusage.csv')
//     if(!response) throw new Error('No data found')
//     const csvfile: any = await response.text()
//     console.log(csvfile)
//     setCsv(csvfile)
// }




  useEffect(() => {

    // set the dimensions and margins of the graph
    const margin = { top: 30, right: 30, bottom: 70, left: 60 },
      width = 350 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Parse the Data
    d3.csv(
      '/data/csv/aiusage.csv'
    ).then(function (data: any) {
      // X axis
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(data.map((d: any) => d.Country))
        .padding(0.2);
      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      // Add Y axis
      const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));

      // Bars
      svg
        .selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", (d: any) => x(d.Country))
        .attr("y", (d: any) => y(d.Value))
        .attr("width", x.bandwidth())
        .attr("height", (d: any) => height - y(d.Value))
        .attr("fill", "#2F539B");
    });
   
  
   
  }, []);

  return <div className="relative w-full ">
         <p className="absolute  left-[50px]   top-[-4px] text-center text-2xl">AI Adoption By Country</p>
         <svg  height={400} id="barchart" ref={ref} className=" md:w-[430px] " />
         </div>;
};

export default Barchart;