import { createSlice } from "@reduxjs/toolkit"

export const CartSlice= createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
          return  state.filter((item)=> item.id!==action.payload);
            //iss state me unhi items ko retain krna jinki id aye hue parameter
            //ki id se that is action.payload se match nhi hoti hai
        },
    }

});
export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;