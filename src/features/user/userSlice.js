import {
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
  } from '@reduxjs/toolkit'
  import { client } from '../../api/client'
  
  const userAdapter = createEntityAdapter()

  const initialState = userAdapter.getInitialState({
    signedIn: false,
    userName: ''
  })

  export const selectUser = state => state.user

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignedIn(state, action) {
            const user = action.payload
            user.signedIn = true
          }        
    }
  })

  export default userSlice.reducer