import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import './product.js'
import '../Productslide/product.css'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function ProductSlide() {
  const navigate = useNavigate()
  // const allview = parsedata

  // const handlesubmit = (e) =>{
  //   alert("helloo")
  //   // navigate('/Electronic')

  // }


  return (
    <div className="container">
      <div className="maincard d-flex justify-content-end mt-4 bg-light border border-success">
        <div className="  me-4 d-flex  align-items-center " style={{ width: '15rem' }} >
          <div className="card-body justify-content-center text-center">
            <h3 className="card-text ">Best of Smartphones</h3>
            <button className="btn btn-outline-success" type="submit" onClick={() => navigate('/Electronic')} >view All Product</button>
          </div>
        </div>
        <div className="card border-0 me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">tshirt</p>
          </div>
        </div>
        <div className=" card border-0 me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">tshirt</p>
          </div>
        </div>
        <div className="card me-4 border-0" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className=" card me-4 border-0" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4 border-0" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
      </div>
      <div className="maincard d-flex justify-content-end mt-4">
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">tshirt</p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card me-4" style={{ width: '15rem' }}>
          <img className="card-img-top" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductSlide