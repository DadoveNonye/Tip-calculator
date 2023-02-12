import "./App.css";
import LeftSplit from "./LeftSplit";
import RightSplit from "./RightSplit";
import { useRef, useState } from "react";

function App() {
  const BillAmt = useRef();
  const NOPP = useRef();
  const custom = useRef();

  const [Total, setTotal] = useState("");
  const [Bill, setBill] = useState();
  const [People, setPeople] = useState("");
  const [EachBill, setEachBill] = useState("");
  const [cusAmt, setCusAmt] = useState("");

  function CalcTip(val) {
    if (!Bill == "" && !People == "") {
      const bill5 = (val / 100) * Bill;
      const BillPerPerson = bill5 / People;
      setEachBill(BillPerPerson.toFixed(2));
    }
  }
  function CalctTotal(val) {
    const TotalBill = (val / 100) * Bill;
    setTotal(TotalBill.toFixed(2));
  }

  function HandleNum() {
    setBill(BillAmt.current.value);
  }
  function HandlePeople() {
    setPeople(NOPP.current.value);
  }
  function CustomNum() {
    setCusAmt(custom.current.value);
  }

  return (
    <div className="app">
      <LeftSplit
        CalcTip={CalcTip}
        CalctTotal={CalctTotal}
        Total={Total}
        HandleNum={HandleNum}
        Bill={Bill}
        BillAmt={BillAmt}
        HandlePeople={HandlePeople}
        NOPP={NOPP}
        custom={custom}
        CustomNum={CustomNum}
        cusAmt={cusAmt}
      />
      <RightSplit
        TotalAmt={Total}
        EachBill={EachBill}
        setEachBill={setEachBill}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;
