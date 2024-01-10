//DO NOT change the function names

import { ADD, REDUCE } from "./actionTypes";

//function to return the reduce action object
const handleReduceActionObj = (val) => {
  return { type: REDUCE, payload: val };
};

//function to return the add action object
const handleAddActionObj = (val) => {
  return { type: ADD, payload: val };
};



export { handleAddActionObj, handleReduceActionObj };
