function profile({name , bio  , bgColor , image}){
    return<div className="border-black border-2 mt-3 p-3 rounded w-[350px]">
<img    src= {image}></img>
   
   <h1 className="font-bold text-2xl my-3">{name}</h1>
   <div className="flex gap-3">
    <div className="w-[50px] h-[40px] bg-blue-500 roudned">
        <h1>HTML</h1>
    </div>
    <div className="w-[50px] h-[40px] bg-blue-500 roudned">
        <h1>CSS</h1>
    </div>
    <div className="w-[50px] h-[40px] bg-blue-500 roudned">
        <h1>React</h1>
    </div>
    
    
   </div>
   <p> 
    {bio}
   </p>
   <button style={{backgroundColor : bgColor}} className="bg-yellow-500  px-28 py-2 mt-10 rounded">Read More</button>
    </div>
}
export  default profile