import React, { useState } from "react";
import "../../index.css";

const ConfirmPurchase = ({
  selectedWordFunction,
  totalMoneyFunction,
  isPlayingFunction,
  multiplierFunction,
  multiplier = 1,
  selectedAmountFunction,
  selection,
  isplaying,
  totalAmount,
  selectedAmount,
  
  selectionFunction,
}) => {
  

  const [message, setMessage] = useState("");

  const handleCancel = () => {
    selectedAmountFunction((prev) => prev = 10);
    selectionFunction((prev) => (prev = ""));
  };

  const handleBuy = () => {
    if(isplaying){
        setMessage((prev) => prev = "You have alerady 1 pending bid. wait for result")
        return
    }
    selectedWordFunction((prevWord) => (prevWord = selection));
    
    // Update selected amount based on the multiplier
    selectedAmountFunction((prev) => (prev = selectedAmount * multiplier));
  
    if (selectedAmount > totalAmount) {
      setMessage((prev) => (prev = "Not enough Balance to make a bid"));
      selectedAmountFunction((prev) => (prev = 10));
      return;
    }
    
    selectionFunction((prev) => (prev = ""));
    isPlayingFunction((prev) => (prev = true));
    totalMoneyFunction(prev => prev - selectedAmount);
    console.log(selectedAmount);
    
  };
  

  const handleAmount = (number) => {
    selectedAmountFunction((prev) => prev = number);

    console.log(selectedAmount);
  };
  

  const determineColor = () => {
    switch (selection) {
      case "Red":
        return "text-red-500";
      case "Green":
        return "text-green-500";
      case "Violet":
        return "text-purple-500";
      default:
        return "text-white";
    }
  };

  if (selection !== "") {
    return (
      <div className="upper-container  border-2 z-50 border-red-400 top-0 fixed w-screen h-screen">
        <div className="card fixed  left-1/2 transform top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 rounded-md border-2">
          <h2 className="text-xl text-green-600 font-semibold">Selection</h2>
          <h1 className={`text-center text-3xl font-bold mb-2 ${determineColor()}`}>{selection}</h1>
          <h2 className="text-white font-bold text-xl mb-3">Total Amount: {totalAmount}</h2>

          <div className="contract-money flex gap-2 mb-4">
            <h2 className="text-white font-bold text-xl">Amount :</h2>
            <div
              onClick={() => handleAmount(10)}
              className={`number ten p-2 cursor-pointer ${selectedAmount === 10 ? 'bg-black text-white' : 'bg-gray-300 text-black'} font-bold rounded-md px-6`}
            >
              10
            </div>
            <div
              onClick={() => handleAmount(100)}
              className={`number hundred p-2 cursor-pointer ${selectedAmount === 100 ? 'bg-black text-white' : 'bg-gray-300 text-black'} font-bold rounded-md px-6`}
            >
              100
            </div>
            <div
              onClick={() => handleAmount(1000)}
              className={`number thousand p-2 cursor-pointer ${selectedAmount === 1000 ? 'bg-black text-white' : 'bg-gray-300 text-black'} font-bold rounded-md px-6`}
            >
              1000
            </div>
          </div>

          <div className="number-multiplier flex gap-3">
            <label htmlFor="multiplier" className="text-white font-bold text-xl">
              Quantity :
            </label>
            <input
  onInput={(e) => multiplierFunction(Number(e.target.value))}
  className="p-2 rounded-lg"
  placeholder="Enter how much you want to buy"
  type="number"
  name=""
  id="multiplier"
/>

          </div>

          <div className="error-message">
            <h1 className={`text-red-700 mt-2 text-xl text-center`}>{message}</h1>
          </div>

          <div className="button-container flex gap-2">
            <button
              onClick={handleCancel}
              type="button"
              className="bg-red-500 p-2 px-5 rounded-lg font-bold text-black mt-3"
            >
              Cancel
            </button>
            <button
              onClick={handleBuy}
              type="button"
              className="bg-green-500 p-2 px-5 rounded-lg font-bold text-black mt-3"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ConfirmPurchase;
