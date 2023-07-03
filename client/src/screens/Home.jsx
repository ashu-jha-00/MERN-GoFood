import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import Card from "../components/Card";
import Footer from "../components/Footer";
// import Carousel from "../components/Carousel";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState('')

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);

    console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div><Navbar /></div>

      {/* //===========================================   Carousell  ================================================== */}
      <div> <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

        <div className="carousel-inner " id='carousel'>
          <div class=" carousel-caption  " style={{ zIndex: "9" }}>
            <div className="d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
              <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Dig in....." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value)}}  />
              {/* <button className="btn text-white bg-success" type="submit">Search</button> */}
            </div>
          </div>
          <div className="carousel-item active" >
            <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
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
      </div></div>
      {/* //===========================================   Carousell  ================================================== */}


      <div className='container'> {/* boootstrap is mobile first */}
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItem !== [] ? foodItem.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default Home;
