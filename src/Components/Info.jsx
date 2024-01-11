import React from "react";
import { useState } from "react";

const Info = ({ dataset }) => {
    const [flag,setFlag]=useState(false);
  const uniqueSuppliers = Array.from(
    new Set(dataset.map((entry) => entry["Supplier "]))
  );
  const currentYearEmission = dataset.filter(entry => entry['Year '] === 2023);

const totalEmission = currentYearEmission.reduce((total, entry) => total + entry['Emissions(in CO2e)'], 0);


  return (
    
      
      <div className="info">
        <div className="emission">
          <h3>Current Year Emissions</h3>
          <input type="text" placeholder={totalEmission} />
        </div>
        <div className="revenue">
          <h3>Revenue to emission ratio</h3>
          <input type="text" placeholder="136.0" />
        </div>
        <div className="category">
          <h3>Category-1</h3>
          <input type="text" placeholder="32% of Scope3" />
        </div>
        <div className="suplier">
          <h4>Total number of reached suppliers</h4>
          <h4>{uniqueSuppliers.length}</h4>
        </div>
      </div>
  );
};

export default Info;
