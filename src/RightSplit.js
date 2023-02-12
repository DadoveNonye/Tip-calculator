import React from "react";

function RightSplit({ EachBill, TotalAmt, setEachBill, setTotal }) {
  function RenderEmpty() {
    setEachBill(0.0);
    setTotal(0.0);
  }
  return (
    <div className="rightslpit">
      <div>
        <p>
          Tip Amount <span>/person</span>
        </p>
        <h1>${EachBill}</h1>
      </div>
      <div>
        <p>
          Total <span>/person</span>
        </p>
        <h1>${TotalAmt}</h1>
      </div>
      <button className="btn" onClick={RenderEmpty}>
        RESET
      </button>
    </div>
  );
}

export default RightSplit;
