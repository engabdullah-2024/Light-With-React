function menu(foodname, price, image, description){
    //    return <div>
    //       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nam iusto quos sed expedita consequuntur neque nesciunt exercitationem labore facilis!</p>
    //     </div>
    return<div className="flex  gap-5">
      
        <img  className="w-[150px] rounded "       src={image}/>
        <h1 className="font-bold ">{foodname}</h1>
        <p>{description}</p>
        <h2 className="font-semibold">${price}</h2>
        <button className="bg-yellow-500 px-5 py-2 rounded">Order Now</button>
    
    </div>
    
    
      }
      
    
    
      export default menu
    
    
    
      