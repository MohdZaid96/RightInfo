import React, { useEffect, useState } from "react";
import energy from "../Data/energy.png";
import water from "../Data/water.png";
import del from "../Data/del.png";
import * as XLSX from "xlsx";
import {Bar} from "react-chartjs-2"
import Chart from 'chart.js/auto';
import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import Table from "../Components/Table";

const Home = () => {
  const [items,setItems]=useState([]);
  
 
 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const excelFilePath = process.env.PUBLIC_URL + '/data/sample.xlsx';

        const response = await fetch(excelFilePath);
        const data = await response.arrayBuffer();

        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);

        setItems(parsedData);
        console.log(parsedData)
      } catch (error) {
        console.error('Error fetching or parsing Excel file', error);
      }
    };

    fetchData();
  }, []);

    return (
    <div className="main" style={{display:"flex",flexDirection:"row"}} >
      <div
        className="sidebar"
        /*style={{ width: "15.55%", backgroundColor: "#181818" }}*/
        style={{ width: "15.55%", backgroundColor: "#181818" ,height:'100vh'}}
      >
        <h1 style={{padding:"5px", color: "white" ,fontSize:'20px'}}>RightInfo</h1>
        <div
          style={{
            height: "183px",
            //padding: '4.9px',
            border: "1px solid #2C2C2C",
            color: "#2C2C2C",
            display: 'grid'

          }}
        >
          DATA-IN
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{backgroundColor:"#181818",border:'none'}}
            >
            <img src={energy} alt="Example" style={{width: '33px'}}/>Energy
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{backgroundColor:"#181818",border:'none'}}

            >
            <img src={water} alt="Example" style={{width: '23px'}}/> Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            height: "183px",
            border: "1px solid #2C2C2C",
            color: "#2C2C2C",
            display: 'grid'
          }}
        >
          ANALYZE
          <p style={{
            color: 'white'
          }}><img src={energy} alt="Example" style={{width: '33px'}} />
          Energy</p>
          <p style={{
            color: 'white'
          }}><img src={del} alt="Example" style={{width: '23px',marginRight:'5px'}}/>Waste</p> 
        </div>
      </div>
      <div className="">
          <div className="bar" style={{margin: '32px',
            width: "93%",alignItems:"center"}}>
              <BarChart dataset={items} />             
          </div>
          <div style={{display:"flex",flexDirection:'row'}}>
            <div className="pie" >
                <PieChart dataset={items} />
            </div>
            <div className="table">
              <Table dataset={items}/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
