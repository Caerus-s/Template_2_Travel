import './App.css'
import Navbar from './components/navbar'

function App() {

  return (
    <div className='text-black font-semibold text-4xl w-screen h-screen flex justify-center items-center p-4 bg-slate-100'>
      <Navbar/>
      {/* <svg>
      <path d="M125 5 L225 5 L225 200 L75 200 L75 75 Z"  />
      </svg> */}
    </div>
  )
}

export default App
