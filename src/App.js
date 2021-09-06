import { useState } from 'react';
import Timer from './components/Timer'

function App() {
const [active, setActive] = useState(false)
const [time, setTime] = useState({seconds: 1500, status:'work'})

function toggle(){
  setActive(!active)
}

function changeTime(time, status){
  setTime({seconds: time, status: status})
  setActive(false)
  console.log(time.status)
  console.log(time.seconds)
}

  return (
    <div className="App">
      <Timer active={active} setActive={setActive} time={time} setTime={setTime}/>
      <button className="bg-blue-500 ml-2hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggle}>Toggle timer</button>
      <button className="bg-blue-500 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => changeTime(1500, 'work')}>Work</button>
      <button className="bg-blue-500 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => changeTime(300, 'short')}>Short break</button>
      <button className="bg-blue-500 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => changeTime(900, 'long')}>Long break</button>
    </div>
  );
}

export default App;
