import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { data } from "./data"





function AllToys() {

const[toys, setToys] = useState(data)

const navigate = useNavigate()
const move = (e) => {
e.preventDefault();
navigate("/AboutToys")
}

const remove = (id) => {
    let newArr = toys.filter(item => item.id !== id)
    setToys(newArr)
    
    }







  return (
    <div className="allStaff">
        <h1 className="header">Welcome to our KIDS Toys shop!!</h1>
        <div className="toy">
       
        {toys.map((item) => {
            const{id, name, image, price}= item;
          return(
            <div key={id} className="alltoys">
                <h3>{name}</h3>

                <img src={image} alt="toys" className="img"/>
                


                <p className="price">Price: {price}</p>
            
                <div className="button">
                <button className="btn" onClick={move}>More Details</button>
                <button className="btn" onClick={()=>remove(id)}>Remove</button>
                </div>
            </div>
          )
        })}
</div>
        <div className="button">
        <button className="btn" onClick={()=>setToys([])}>Delete All Toys</button>
        </div>
      
    </div>
  );
}

export default AllToys;