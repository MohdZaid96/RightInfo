import React, { useEffect, useState } from "react";
import Logo from "../Data/Logo.png";

import * as XLSX from "xlsx";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import Table from "../Components/Table";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Info from "../Components/Info";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const excelFilePath = process.env.PUBLIC_URL + "/data/sample.xlsx";

        const response = await fetch(excelFilePath);
        const data = await response.arrayBuffer();

        const workbook = XLSX.read(new Uint8Array(data), { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);

        setItems(parsedData);
        console.log(parsedData);
      } catch (error) {
        console.error("Error fetching or parsing Excel file", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="rightsideblock">
        <Info dataset={items}/>
        <div className="bar">
          <BarChart dataset={items} />
        </div>
        <div className="pieTable">
          <div className="pie">
            <PieChart dataset={items} />
          </div>
          <div className="tableblock">
            <Table dataset={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
