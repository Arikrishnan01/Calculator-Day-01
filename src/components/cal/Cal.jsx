import React, { useState } from 'react';
import './cal.css';

export default function Cal() {

    const [display, setDisplay] = useState('');

    /** handle click for buttons click values */
    const handleClick = (value) => {
        setDisplay(display + value);
    }

    /**handle calculate and display the value */
    const handleCalculate = () => {
        setDisplay(eval(display));
    }

    /** handle all delete funtion */
    const handleDelete = () => {
        setDisplay("");
    }

    /** handle single value delete */
    const handleSinleDelete = () => {
        setDisplay(display.slice(0, -1));
    }

  return (
    <div className='cal-container'>
        {/* <h6 className='cal-title'>CALCULATOR APP</h6> */}
        <input type="text" value={display} className="display-input" />
        <div className="cal-btn-container">
            <div className="cal-btn-items-con">
                <button onClick={handleDelete} className="cal-btn extra">AC</button>
                <button onClick={handleSinleDelete} className="cal-btn extra">DEL</button>
                <button onClick={() => handleClick(".")} className="cal-btn extra">.</button>
                <button onClick={() => handleClick("+")} className="cal-btn extra">+</button>
            </div>
            <div className="cal-btn-items-con">
                <button onClick={() => handleClick("1")} className="cal-btn">1</button>
                <button onClick={() => handleClick("2")} className="cal-btn">2</button>
                <button onClick={() => handleClick("3")} className="cal-btn">3</button>
                <button onClick={() => handleClick("-")} className="cal-btn extra">-</button>
            </div>
            <div className="cal-btn-items-con">
                <button onClick={() => handleClick("4")} className="cal-btn">4</button>
                <button onClick={() => handleClick("5")} className="cal-btn">5</button>
                <button onClick={() => handleClick("6")} className="cal-btn">6</button>
                <button onClick={() => handleClick("*")} className="cal-btn extra">*</button>
            </div>
            <div className="cal-btn-items-con">
                <button onClick={() => handleClick("7")} className="cal-btn">7</button>
                <button onClick={() => handleClick("8")} className="cal-btn">8</button>
                <button onClick={() => handleClick("9")} className="cal-btn">9</button>
                <button onClick={() => handleClick("/")} className="cal-btn extra">/</button>
            </div>
            <div className="cal-btn-items-con">
                <button onClick={() => handleClick("0")} className="cal-btn">0</button>
                <button onClick={handleCalculate} className="cal-btn extra-equal">=</button>
            </div>
        </div>
    </div>
  )
}
