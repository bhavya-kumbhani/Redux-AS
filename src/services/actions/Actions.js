import { ADD_TO_CARD } from "../Constants"
export const addToCard =(data)=>{
    return{
        type : ADD_TO_CARD,
        data : data , 
    }
}