

import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Card from "../Components/Card";
import Footer from '../Components/Footer';
// import Carousel from '../Components/Carousel'; // Fixed from Carousal to Carousel

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFooditem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setFooditem(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input 
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search" 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                />
                {/* <button className="btn btn-outline-success text-white" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img 
                src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className="d-inline h-100 w-100" 
                style={{ filter: "brightness(30%)" }} 
                alt="..." 
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://plus.unsplash.com/premium_photo-1683121324230-2702ea6b47be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" 
                className="d-block w-100" 
                style={{ filter: "brightness(30%)" }} 
                alt="..." 
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb2R8ZW58MHx8MHx8fDA%3D" 
                className="d-block w-100" 
                style={{ filter: "brightness(30%)" }} 
                alt="..." 
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                className="d-block w-100" 
                style={{ filter: "brightness(30%)" }} 
                alt="..." 
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb2R8ZW58MHx8MHx8fDA%3D" 
                className="d-block w-100" 
                style={{ filter: "brightness(30%)" }} 
                alt="..." 
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
{/* carousel yha pe khtm hai */}
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div key={data._id} className='row mt-3'> {/* Changed mc-3 to mt-3 */}
              <div className='fs-3 m-3'>
                {data.CategoryName}
              </div>
              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter(item => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase())) // Fixed toLowerCase
                  .map(filteredItem => (
                    <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3'>
                      <Card 
                        foodItem ={filteredItem}
                        options={filteredItem.options[0]}
                        
                      />
                    </div>
                  ))
              ) : (
                <div>No such data found</div>
              )}
            </div>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </div>

      <Footer />
    </div>
  );
}








// //mt-3 for margin 
// import React, { useEffect, useState } from 'react'
// import Navbar from '../Components/Navbar'
// import Card from "../Components/Card"
// import Footer from '../Components/Footer'

// // import { Link } from 'react-router-dom'

// export default function Home() {

//   const [search, setSearch] = useState([]);       //map array k and hi lagta hao object k andr map nhi lgega
//   const [foodCat, setFoodCat] = useState([]);       //map array k and hi lagta hao object k andr map nhi lgega
//   const [foodItem, setFooditem] = useState([]);
//   const loadData = async () => {
//     let response = await fetch("http://localhost:5000/api/foodData", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     response = await response.json();

//     setFooditem(response[0]);
//     setFoodCat(response[1]);

//     // console.log(response[0], response[1]);

//   }

//   useEffect(() => {
//     loadData()
//   }, [])


//   return (
//     <div>
//       <div> <Navbar /> </div>
//       <div>
//           <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
//             <div className="carousel-inner" id="carousel">
//                 <div className="carousel-caption" style={{ zIndex: "10" }}>
//                   <div className="d-flex justify-content-center" >
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
//                     {/* <button className="btn btn-outline-success text-white " type="submit">Search</button> */}
//                   </div>
//                 </div>
//               <div className="carousel-item active">
//                   <img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-inline h-100 w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//               </div>
//               <div className="carousel-item">
//                   <img src="https://plus.unsplash.com/premium_photo-1683121324230-2702ea6b47be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//               </div>
//               <div className="carousel-item">
//                   <img src="https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//               </div>
//               <div className="carousel-item">
//                   <img src="https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//               </div>
//               <div className="carousel-item">
//                   <img src="https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//               </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//       </div>


//       <div className="container">
//         {foodCat.length > 0 ? (
//           foodCat.map((data) => (
//             <div className='row mc-3'>
//               <div key={data._id} className='fs-3 m-3'>            {/*  Use index or a unique key here */}
//                 {data.CategoryName}
//               </div>
//               <hr />
//               {foodItem.length > 0 ? (                                                                           
//                 foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))                           //{/*  kya ye cheeja jo search bar me hai k ni databse me  */}
//                 .map(filteritems => {
//                   //{/*filter kr k  har category k food ko foodcat vale or fooditem vale se match krega or uske according unke cards display krega */ }
//                   return (
//                     <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
//                       <Card foodName={filteritems.name}
//                         options={filteritems.options[0]}
//                         imgsrc={filteritems.img}                               //ye sara kush databse se mngva rhe hai card pe print krvane k liye ab ye card.js me bhi apply krenge
//                       ></Card>
//                     </div>
//                   )
//                 })

//               ) : <div>No such data found</div>}
//             </div>
//           ))
//         ) : (
//           <div>No categories available</div>
//         )}

//       </div>

//       <div><Footer></Footer></div>
//     </div>
//   )

// }