// authSlice.js

import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';


const initialState = {

  user:"",
  token:"",
  loading:false,
  error:""
}


export const signUpUser = createAsyncThunk('signupuser',async(body)=>{

const res = await fetch ("http://localhost:7000/api/user/register-user",{
    method:"post",
    headers:{
      'Content-Type':"application/json",
    },
    body:JSON.stringify(body)

})
return await res.json();


})

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{

  },
  extraReducers:{
  [signUpUser.pending]: (state,action)=>{
    state.loading = true
  },

  [signUpUser.fulfilled]: (state,{payload:{error,}})=>{
    state.loading = false
    if(error){
      state.error= error
    }
  },

  [signUpUser.rejected]: (state,action)=>{
    state.loading = true
  },
  }

})
export default authSlice.reducer

