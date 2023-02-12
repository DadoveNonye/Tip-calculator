import React from "react";

function LeftSplit({
  CalctTotal,
  CalcTip,
  NOPP,
  HandleNum,
  BillAmt,
  HandlePeople,
  CustomNum,
  custom,
  cusAmt,
}) {
  function Five5() {
    CalcTip(5);
    CalctTotal(5);
  }

  function Ten10() {
    CalcTip(10);
    CalctTotal(10);
  }
  function Five15() {
    CalcTip(15);
    CalctTotal(15);
  }
  function Twenty5() {
    CalcTip(25);
    CalctTotal(25);
  }
  function Fiv50() {
    CalcTip(50);
    CalctTotal(50);
  }
  function test() {
    CalcTip(cusAmt);
    CalctTotal(cusAmt);
  }

  return (
    <div className="leftsplit">
      <div>
        <p>Bill</p>
        <input className="input" ref={BillAmt} onChange={HandleNum} />
      </div>
      <div>
        <p>Select Tip</p>
        <div className="percentageBtn">
          <button onClick={Five5}>5%</button>
          <button onClick={Ten10}>10%</button>
          <button onClick={Five15}>15%</button>
          <button onClick={Twenty5}>25%</button>
          <button onClick={Fiv50}>50%</button>
          <input
            className="cusInput"
            placeholder="CUSTOM"
            onChange={CustomNum}
            onKeyUp={test}
            ref={custom}
          />
        </div>
      </div>
      <div>
        <p>Number Of People</p>
        <input className="input" ref={NOPP} onChange={HandlePeople} />
      </div>
    </div>
  );
}

export default LeftSplit;
