import {useState} from "react";

function App() {
  const[color, setColor] = useState("olive");

  return(
    <div className="w-full h-screen duration-200" style={{background: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("hsl(39, 96%, 34%)")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "hsl(39, 96%, 34%)"}}>Orange</button>
          <button onClick={() => setColor(" hsl(350, 94%, 46%)")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: " hsl(350, 94%, 46%)"}}>Pink</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>
    </div>
  );
}
export default App;