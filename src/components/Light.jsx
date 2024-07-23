
import{useState} from "react"
function Light (){


    const[color , setColor] = useState(false )
    // Handle On button
    const handleOnButton = () => {
        setColor(true)
    }
    const handleOfButton = () =>{
        setColor(false)
    }
    return <div className="flex justify-center" >
<div  style={{backgroundColor :color == true ? "yellow" : ""}}     className="border-2 border-black w-[400px] h-[400px] rounded-full ">
    <div className="mt-[400px] ml[200px] flex gap-5 mb-10  ">
    <button   style={{backgroundColor:color ===true ? "green" : ""}}    onClick={handleOnButton}  className="bg-yellow-500 text-4xl px-10 py-2 my-2 ">On</button>
    <button  style={{backgroundColor:color === false ? "red" : ""}}  onClick={handleOfButton}   className="bg-yellow-500 text-4xl px-10 py-2 my-2  hover:border-2 border-black hover:background bg-none ">Of</button>
</div>
</div>
    </div>
}
export default Light
