import React from "react";
import { AddTransaction } from "./components/AddTransaction";
import  Cards  from "./components/Cards";
import Header  from "./components/Header";
import { Total } from "./components/Total";
import { TransactionHistory } from "./components/TransactionHistory";
import './App.css'
import { GlobalProvoider } from "./context/GobalContext";
function App() {
  return (<GlobalProvoider>
    <div className="App">
      <div className="Container">
<Header/>
<Total/>
<Cards/>
<TransactionHistory/>
<AddTransaction/>
 </div></div></GlobalProvoider>
  );
}

export default App;
