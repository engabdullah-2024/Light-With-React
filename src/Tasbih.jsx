import{ useState } from "react"

function Tasbih(){

        const [count, setCount] = useState(0);
      
        return <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-6xl font-bold mb-4">{count}</div>
            <div>
              <button   onClick={() => setCount (count+1)}    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
               
              >
                Count
              </button>
              <button    onClick={() => setCount (0)}    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              
              >
                Reset
              </button>
            </div>
          </div>
        
      };
      
      





export default Tasbih