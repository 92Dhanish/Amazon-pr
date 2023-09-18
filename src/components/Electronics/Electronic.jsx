import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { parsedata } from '../Productslide/product'
import '../Electronics/Electronic.css'
import { Container } from 'react-bootstrap'
import { AddCart } from '../../Sevices/Action/Action'
import { useNavigate } from 'react-router'

function Electronic() {

  const [Allsmartphones, setphones] = useState([])

  // console.log(Allsmartphones);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {

    fetch('https://dummyjson.com/products/category/smartphones').then(
      res => res.json()
    ).then((res) => {
      console.log(res.products);
      setphones(res.products)
    })
  })

    const handlecart = (id,data) =>{
        // console.log(id,data);
        dispatch(AddCart(id,data));
        navigate('/view');
        
        
    }


  // console.log(Alldata);

  return (
    <Container>

      <div className="   allboxes">

      {
        Allsmartphones.map((data) => {
          return (
            <>
            <section className="box  d-inline-block  ">
                <div className="content ">

                  <div className="left">
                    <div className="product_img">
                      <img src={data.thumbnail} alt="" />
                    </div>
                    <div className="product_details">
                      <h4 className="title">{data.title}</h4>
                      <p className="discription">{data.brand}</p>
                      <p className="price">${data.price} <span className="price_original">$2500</span> <span className="offer"> {data.discountPercentage}% OFF</span></p>
                      <p className="other">inclusive of all taxes</p>
                      <button className='btn btn-success' onClick={(e) =>handlecart(data.id,data)}>ADD TO CART</button>
                    </div>
                  </div>

                  <div className="right">
                    <div className="product_description">
                      <h4>PRODUCT DESCRIPTION</h4>
                      <p>{data.description} Featuring a contemporary refined design with exceptional comfort, this pair is perfect to give your quintessential dressing an upgrade.
                      </p>
                      <p><span className="highlight">Country of Origin -</span>
                        India
                      </p>
                      <p><span className="highlight">stock Available -</span>
                        { " " + data.stock}
                      </p>
                      <p><span className="highlight">Product Rating -</span>
                       { " " + data.rating + " / " + "5"}
                      </p>
                      <p><span className="highlight">Commodity -</span> {data.category}
                      </p>
                      <p><span className="highlight"> Product Brand -</span> {data.brand}
                      </p>
                    </div>
                    
                  </div>

                </div>
                </section>
            </>
          )
        })
      }

      </div>
  </Container>
  )
}

export default Electronic