// import { Incprice } from "../Action/Action";

const initiale = {
    product: [],
    products: null
}

const ProductReducer = (state = initiale, action) => {
    // console.log(action.payload.data);
    // console.log(state, "done");
    // console.log(action.payload);

    switch (action.type) {
        case 'ADDCART':
            return (
                {
                    ...state,
                    product: action.payload.id,
                    product: action.payload.data
                }
            )
            // }

    //     // default:
    //     //     return state
                

    //     // console.log(alldata);

    //         case 'REMOVECART':

    //           let alldata = state.product

    //         //   console.log(alldata);

    //         let allprs = alldata.filter((del,id) =>{
    //             return del.id != action.payload
    //         })


    //         return (
    //             {
    //                 ...state,
    //                 product: allprs

    //             }
    //         )

    //        case 'INCPRICE' :
           
    //        const Incid = action.payload

    //         const incqtyprice = state.product.map((item) =>{
    //         return item.id === Incid ? {...item, qty: (item.qty || 1 ) + 1 } :item
    //     })


    //     return (
    //         {
    //             ...state,
    //             product: incqtyprice

    //         }
    //     )
        
    //     case 'DECPRICE' :
           
    //     const decid = action.payload

    //      const decqtyprice = state.product.map((item) =>{
    //         if(item.id === decid && item.qty > 1){

    //             return {...item, qty: (item.qty || 1 ) - 1 } 
    //         }

    //      return item
    //  }).filter((item) => item.qty > 0)


    //  return (
    //      {
    //          ...state,
    //          product: decqtyprice

    //      }
    //  )

        default:
            return state
    }

}


export default ProductReducer