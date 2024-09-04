import React from 'react'

export default function Carousal() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex" >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white " type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active">
          <img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-inline h-100 w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://plus.unsplash.com/premium_photo-1683121324230-2702ea6b47be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
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
  )
}
