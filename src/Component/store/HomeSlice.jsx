import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'counter',
  initialState:{
    url:{},
    genre:{}
  },
  reducers: {
   setUrl(state,action){
    state.url=action.payload;
   },
   setGenere(state,action){
    state.genre=action.payload;
   }

  },
})

// Action creators are generated for each case reducer function
export const { setUrl,setGenere } = homeSlice.actions

export default homeSlice.reducer