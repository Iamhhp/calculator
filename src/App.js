import './App.css';
import Btn from './components/Btn';
import { Textfit } from 'react-textfit';
import { useState } from 'react';
import { evaluate } from 'mathjs';

let isPoint = false;
let isOperate = false;

const App = () => {
  const operate = ['+', '-', 'x', '/'];

  const [strOperate, setStrOperate] = useState('');

  const handelEqual = () => {
    setStrOperate(evaluate(strOperate));
  };

  const handelOperateC = () => {
    if (operate.includes(strOperate.charAt(strOperate.length - 1))) isOperate = false;
    if (strOperate.endsWith('.')) isPoint = false;
    setStrOperate(strOperate.slice(0, -1));
  };

  const handelOperateClear = () => {
    setStrOperate('');
    isPoint = false;
    isOperate = false;
  };

  const handelNum = (eventObject) => {
    const btnValue = eventObject.target.innerText;
    if (isPoint && btnValue === '.') {
      return;
    } else if (btnValue === '.') {
      isPoint = true;
    }

    if (operate.includes(btnValue) && isOperate) {
      // one enter operate
      if (strOperate.endsWith(btnValue)) {
        // one enter operate
        return;
      } else {
        /// replace operate
        setStrOperate(strOperate.slice(0, -1) + btnValue);
        return;
      }
    } else if (operate.includes(btnValue)) {
      // enter operate
      isPoint = false;
      isOperate = true;
    } else {
      isOperate = false;
    }

    setStrOperate(strOperate + btnValue);
  };

  const btns = [
    ['Clear', 'C', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    [0, '.', '='],
  ];

  const clickHandler = {
    Clear: handelOperateClear,
    C: handelOperateC,
    '=': handelEqual,
    '/': handelNum,
    '*': handelNum,
    '+': handelNum,
    '-': handelNum,
    '.': handelNum,
    0: handelNum,
    1: handelNum,
    2: handelNum,
    3: handelNum,
    4: handelNum,
    5: handelNum,
    6: handelNum,
    7: handelNum,
    8: handelNum,
    9: handelNum,
  };

  return (
    <div className='calculator'>
      <p className='title'>Calculator</p>
      <Textfit className='equal'>{strOperate}</Textfit>
      <div className='btns'>
        {btns.flat().map((btn, i) => (
          <Btn key={i} content={btn} eventHandler={clickHandler[btn]} />
        ))}
      </div>
    </div>
  );
};
export default App;
