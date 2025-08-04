import { createSlice } from "@reduxjs/toolkit";
const initialState={
    list:[],
    totalPrice:0
}
const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        add:(state,action)=>{
            let add=false
            state.totalPrice=state.totalPrice+ +action.payload.price
            state.list=state.list?.map(e=>{
                if(e._id==action.payload._id){
                    e.cartQuantity=e.cartQuantity+1
                    add=true
                }
                return e
            })
            if(!add){
                state.list.push({...action.payload,cartQuantity:1})
            }
        },
        remove:(state,action)=>{
            state.totalPrice=state.totalPrice - action.payload.price
            state.list=state.list?.filter(e=>{
                if(e._id==action.payload._id){
                    e.cartQuantity=e.cartQuantity-1
                    if(e.cartQuantity==0){
                        return false
                    }
                }
                return e
            })
        },
        clear:(state)=>{
            state.list=[]
            state.totalPrice=0
        }
    }
})
export const {add,remove,clear}=cartSlice.actions
export default cartSlice.reducer