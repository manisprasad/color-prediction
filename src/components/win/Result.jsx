import React, { useEffect } from "react";
import "../../index.css";

const Result = ({
  // result,
  totalAmount,
  selectedAmount,
  selection,
  resultFunction,
  totalMoneyFunction,
  multiplier,
  selectionWord,
  winner
}) => {

  useEffect(() =>{
   if(winner){
    if(selectionWord == "Red" || selectionWord == "Green"){
      totalMoneyFunction(prev => prev + totalAmount * multiplier * 2);
    }else if(selectionWord === "Violet"){
      totalMoneyFunction(prev => prev + totalAmount * multiplier * 4);
      
    }else{
      totalMoneyFunction(prev => prev + totalAmount * multiplier * 9)

    }
   }
  },[])
  const handelClose = () =>{
    resultFunction((prev) => prev = -1);

  }
  return (
    <>
      <div className="upper-container w-screen top-0 h-screen fixed">
        <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 w-full text-white card rounded-md border-2">
          <h1 className={`text-3xl font-bold mb-4 text-center ${winner ? 'text-green-500' : 'text-red-500'}`}>
            {(winner) ? 'Won' : 'Loss'}
          </h1>

          <div className="mb-4 flex gap-2">
            <h2 className="text-lg font-semibold">Total Amount = </h2>
            <div className="text-xl font-bold">{totalAmount}</div>
          </div>
          <div className="mb-4 flex gap-2">
            <h2 className="text-lg font-semibold">Your Bid Amount = </h2>
            <div className="text-xl font-bold">{selectedAmount*multiplier}</div>
          </div>
          {(winner) ? (
           
            <div className="mb-4 flex gap-2">
              <h2 className="text-lg font-semibold">Winning Amount =</h2>
              <div className="winning-amount">
                {selectionWord === "Red" || selectionWord === "Green" ? (
                  <div className="text-xl font-bold text-green-500">+{Number(selectedAmount*multiplier) * 2}</div>
                ) : selectionWord === "Violet" ? (
                  <div className="text-xl font-bold text-green-500">+{Number(selectedAmount*multiplier) * 4}</div>
                ) : selectionWord &&  (
                  <div className="text-xl font-bold text-green-500">+{Number(selectedAmount*multiplier) * 9}</div>
                ) }
              </div>
            </div>
          ) : null
        
        }
          { (!winner) ? (
            <>
              <div className="mb4 flex gap-2">
                <h2 className="text-xl font-bold">Winning Amount</h2>
                <div className="winning-amount text-xl font-bold text-red-500">
                  -{selectedAmount * multiplier}
                </div>
              </div>
            </>
          ) : null}
          <button
            onClick={handelClose}
            className="text-white mt-2 bg-red-400 hover:bg-gray-600 px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
