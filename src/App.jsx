import { useState } from 'react'
import './App.css'

// function App() {
//   const [color, setColor]=useState('pink');
//   // function changeColor(color)
//   // {
//   //   setColor(color);   
//   // }

//   return (
//     <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}>
//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
//           <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-pink-400 '>
//           Red
//           </button>
//           <button onClick={()=>setColor('blue ')}  className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-pink-400 '>
//           Blue
//           </button>

//         </div>
//       </div>   
      
//     </div>
//   )
// }

// export default App



import React from 'react'

function App() {

  const[color,setColor]=useState('orange');

  return (
    <div>
      <div className='w-full h-screen bg-black' style={{backgroundColor:color}}>
        <div className="flex justify-center items-center pt-10  ">
        <button onClick={() => setColor('red')} className='bg-slate-400 p-1 border-2 font-bold rounded-lg m-1 border-zinc-800 text-xl'>Red</button>
        <button onClick={()=>setColor('green')} className='bg-slate-400 p-1 border-2 font-bold rounded-lg   border-zinc-800 text-xl'>Green</button>
        <button onClick={()=>setColor('black')} className='bg-slate-400 p-1 border-2 font-bold rounded-lg m-1 border-zinc-800 text-xl'>Black</button>

      </div>
    
      </div>
    </div>
  )
}

export default App
