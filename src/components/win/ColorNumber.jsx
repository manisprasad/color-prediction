import React, { useEffect, useState, useRef } from 'react';
import "../../index.css";
import "./number.css";
import ConfirmPurchase from "./ConfirmPurchase";
import getRandomColorNumber from './getRandomColorNumber';
import Result from './Result';

const ColorNumber = () => {
    const [time, setTime] = useState(59);
    const [totalMoney, setTotalMoney] = useState(500);
    const [isIntervalCompleted, setIsIntervalCompleted] = useState(true);
    const [selectedAmount, setSelectedAmount] = useState(10);
    const [investingMoney, setInvestingMoney] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [selection, setSelection] = useState("");
    const [isplaying, setIsPlaying] = useState(false);
    const [selectionWord, setSelectionWord] = useState(false)
    const [result, setResult] = useState(-1);
    const [colorNumberHistory, setColorNumberHistory] = useState([]);
    // const [roll, setRoll] = useState(false);
    const [winner, setWinner] = useState(false)
    const isGeneratingRef = useRef(false);



    useEffect(() => {
      if (time === 0) {


        isGeneratingRef.current = true;
    
        const newRandomColorNumber = getRandomColorNumber();
        // const newRandomColorNumber = [1,"Green"];
        setColorNumberHistory(prevHistory => [...prevHistory, newRandomColorNumber]);
        if (isplaying) {
          if (newRandomColorNumber[0] === selectionWord || newRandomColorNumber[1] === selectionWord) {
            setWinner(prev => prev= true);
            setResult(prev => prev = 0);
            console.log(result);
          } else {
            setWinner(prev => prev = false)
            setResult(prev => prev = 0);
            console.log(result);
          }

          setIsPlaying(prev => prev = false);
        }
        isGeneratingRef.current = false; // Reset after generation
      }
    }, [time]);


    
  
    // This useEffect handles the timer interval
    useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsIntervalCompleted(true);
            return 59;
          }
          return prevTime - 1;
        });
      },1000);
  
      return () => clearInterval(interval);
    }, [isIntervalCompleted]);
  
    useEffect(() => {
      // Start the timer loop when the component mounts
      setIsIntervalCompleted(true);
    }, []);
  

  const handleOptionClick = (number) =>{
    setSelection(number)
  }

  const handleColorOption = (color) =>{
    setSelection(color)
  }


    


    return (
        
        <>
        {/* <Result result={!true} selection={"red"} selectedAmount={50} totalAmount={500}/> */}
        {/* <ConfirmPurchase selection={5} totalAmount={totalMoney}/> */}
        <div className="countdown flex  justify-between mr-9 mb-3 items-center">
            <div className="totalMoney-container flex">
                <div className="totalMoney text-xl">{totalMoney}</div>
            </div>
            <div className="countdown-timer flex  card text-white text-4xl font-bold  rounded-lg gap-2">
               {time}
               
            </div>
        </div>

        <div className="flex justify-center items-center container w-screen flex-col mx-auto font-mono gap-4 ">
            <div className="color-container flex flex-wrap gap-2">

            {
  ['bg-green-600', 'bg-violet-600', 'bg-red-600'].map((color, index) => {
    const colorName = color.charAt(3).toUpperCase() + color.slice(4, -4);

    return (
      <div
        key={index}
        onClick={() => handleColorOption(colorName)} // Use a callback function to avoid immediate invocation
        className={`w-max py-4 h-max cursor-pointer hover:scale-105 ${color} p-2 text-white rounded-lg hover:${color.slice(3, -1)}-800`}
      >
        Join {colorName}
      </div>
    );
  })

}


               
            </div>
            <div className="number-container grid grid-cols-5 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
        <div
          key={number}
          className="number p-2 cursor-pointer bg-gray-300 font-bold rounded-md w-max px-6 text-black"
          onClick={() => handleOptionClick(number)}
        >
          {number}
        </div>
      ))}
    </div>
        </div>
        {
            (selection) && <ConfirmPurchase 
            investingMoneyFunction={setInvestingMoney}
            investingMoney={investingMoney}
            selectedAmount={selectedAmount}
            isplaying={isplaying}
            totalMoneyFunction={setTotalMoney}
            multiplier={multiplier} selectedAmountFunction={setSelectedAmount} multiplierFunction={setMultiplier}  isPlayingFunction={setIsPlaying} 
            selectedWordFunction={setSelectionWord} selection={selection} totalAmount={totalMoney} selectionFunction={setSelection}/>
        }

{
  (result != -1) ? (
    <Result 
    // investingMoney={investingMoney}
      totalMoneyFunction={setTotalMoney}
      multiplier={multiplier}
      // selectedAmountFunction={setSelectedAmount}
      multiplierFunction={setMultiplier}
      isPlayingFunction={setIsPlaying}
      selectionWord={selectionWord}
      // selectedWordFunction={setSelectionWord}
      selection={selection}
      totalAmount={totalMoney}
      // selectionFunction={setSelection}
      resultFunction={setResult} // 
      selectedAmount={selectedAmount}
      winner={winner}
    />
  ) : null
}

<div className="result-container flex flex-col ">

<h1 className='text-xl h-8 flex justify-center mx-auto text-center card text-white font-bold bg-white  mt-2 p-3 rounded-md -z-30'>History</h1>
<ul className='flex max-h-72 overflow-x-auto flex-wrap  mx-auto bg-white p-2 rounded-xl gap-3 mt-2 md:w-11/12 w-screen'>
  {colorNumberHistory.slice().reverse().map((item, index) => (
    <li className={`text-white w-max h-max px-3 py-1  bg-${item[1].toLowerCase()}-600 rounded-full`} key={index}>
      {item[0]}
    </li>
  ))}
</ul>

</div>

        </>
    );
}

export default ColorNumber;
