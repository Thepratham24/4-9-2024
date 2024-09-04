import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './Contextreducer';

export default function Card(props) {
  const dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let foodItem = props.item;

  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
      //Quantity change hojaye to update nhi krdega Add to cart krne pe agr same pehle 1 kiya fir 3 to 3 krdega update kr k
    }
    if (food > []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return 
      }
      return
    }



    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size
    });
    await console.log(data);
  };

  // Calculate the final price safely
//   const getPrice = () => {
//     const pricePerUnit = parseInt(options[size], 10); // Ensure parsing is in base 10
//     if (isNaN(pricePerUnit)) {
//       console.error(`Invalid price for size ${size}: ${options[size]}`);
//       return 0; // Fallback to 0 if price is invalid
//     }
//     return qty * pricePerUnit;
//   };

let finalPrice = qty * (parseInt(options[size]) || 0)

  useEffect(() => {
    if (priceRef.current) {
      setSize(priceRef.current.value);
    }
  }, []);

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img
            src={props.foodItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "180px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>

            <select
              className="m-2 h-100 w-30 bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select className="m-2 h-100 w-30 bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}> 
              {priceOptions.map((data) => {
                return <option key={data} value={data}>
                  {data}
                </option>
            })}
            </select>

            <div className="d-inline fs-5">
              Rs {finalPrice}/-
            </div>

            <hr />

            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}











// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatchCart, useCart } from './Contextreducer';

// export default function Card(props) {
// let dispatch = useDispatchCart();
//   const data = useCart();
//   const priceRef = useRef();
//   let options = props.options;
//   let priceOptions = Object.keys(options);
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

//   const handleAddToCart = async () => {
//     await dispatch({
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem.name,
//       price: foodItem.finalPrice,
//       qty: qty,
//       size: size
//     });
//     console.log(data);
//   };

//   const finalPrice = qty * (parseInt(options[size]) || 0);

//   useEffect(() => {
//     if (priceRef.current) {
//       setSize(priceRef.current.value);
//     }
//   }, []);

//   return (
//     <div>
//       <div>
//         <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//           <img
//             src={props.foodItem.img}
//             className="card-img-top"
//             alt="..."
//             style={{ height: "180px", objectFit: "fill" }}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{props.foodItem.name}</h5>

//             <select
//               className="m-2 h-100 w-30 bg-success rounded"
//               onChange={(e) => setSize(e.target.value)}
//             >
//               {Array.from({ length: 6 }, (_, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>

//             <select
//               className="m-2 h-100 w-30 bg-success rounded"
//               ref={priceRef}
//               onChange={(e) => setQty(e.target.value)}
//             >
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>
//                   {data}
//                 </option>
//               ))}
//             </select>

//             <div className="d-inline fs-5">Rs {finalPrice}/-</div>

//             <hr />

//             <button
//               className="btn btn-success justify-center ms-2"
//               onClick={handleAddToCart}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



//=======================================================================================================

// import React, {useEffect,useRef,  useState} from 'react'
// import { useDispatchCart, useCart } from './Contextreducer';
// export default function Card(props) {
// let dispatch= useDispatchCart()
// let data = useCart();
// const priceref = useRef();
//     let options = props.options;
//     let priceOptions= Object.keys(options);
//     const [qty, setQty] =useState(1);
//     const [size , setSize] = useState("")
//     const handleaddtocart= async ()=>{
//         await dispatch({type:"ADD", id:props.foodItem._id, name :props.foodItem.name ,price: props.foodItem.finalPrice ,qty: qty, size: size})
//         console.log(data)
//     }
//     const finalPrice = qty * (parseInt(options[size]) || 0);
//     useEffect(() => {
//         if (priceref.current) {
//           setSize(priceref.current.value);
//         }
//       }, []);
//     return (
//             <div>
//                 <div>
//                     <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"180px", objectFit:"fill"}} /> 
//                         <div className="card-body">
//                             <h5 className="card-title">{props.foodItem.name}</h5>
                           
//                             <select className="m-2 h-100 w-30 bg-success rodnunded" onChange={(e)=>setSize(e.target.value)}>
//                                 {Array.from(Array(6), (e, i) => {
//                                     return (
//                                         <option key={i + 1} value={i + 1}> {i + 1} </option>
//                                     )
//                                 })}
//                             </select>
//                             <select className="m-2 h-100 w-30 bg-success rounded" ref={priceref} onChange={(e)=>setQty(e.target.value)}>
//                                 return(
//                                     {priceOptions.map((data)=>{
//                                         return <option key={data} value={data}>{data}</option>
//                                     })}
//                                 )
                                
//                             </select>
//                             <div className='d-inline fs-5'>
//                                 Rs{finalPrice}/-
//                             </div>

//                         <hr>
//                         </hr>
//                         <button className={'btn btn-success justify-center ms-2'} onClick={handleaddtocart}>Add to cart</button>
//                         </div>
                       
//                     </div>
//                 </div>
//             </div>
       
//     )
// }
