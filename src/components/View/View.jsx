import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function View() {

    const Allcartproducts = useSelector((state) => state.ProductReducer.product)
    // const allproductdata = useSelector(state => state.ProductReducer.product)
    console.log(Allcartproducts, "all data is avail");

    return (
        <Container>
            <Table striped bordered hover className='mt-4'>
                <thead>

                    <tr>
                        <th>Image</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>QTY</th>
                        <th>TOTAL</th>
                        <th>ACTION</th>
                        {/* <th>BUY NOW</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        Allcartproducts.map((val) =>{
                            console.log(val, "alldone");
                            return(
                                <>

                                </>
                            )
                        })
                    }
                </tbody>

            </Table>


        </Container>

    )
}

export default View