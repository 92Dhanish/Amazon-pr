import { db } from "../../components/MyFirebase/Myfirebase";

export const AddCart =(id,data,index) => {
    console.log("doneeeeeeeeeeee    ", data);
    return {
        type : 'ADDCART',
        payload : {id,data,index}
    }
    // console.log(data);
}