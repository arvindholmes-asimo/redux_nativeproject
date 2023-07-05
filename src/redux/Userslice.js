import {createSlice} from '@reduxjs/toolkit'


export const Userslice = createSlice({
    name: 'user',
    initialState: {
      users: [],
    },
    reducers: {
      addUser: (state, action) => {
        state.users.push(action.payload);
      },
      deleteUser: (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      },
      editUser: (state, action) => {
        const { id, name, phonenumber, email, gender } = action.payload;
        const user = state.users.find((user ) => user.id === id);
        if (user) {
          user.name = name;
          user.phonenumber = phonenumber;
          user.email = email;
          user.gender = gender;
        }
      },
  
    },
  });

  export const getUserById = (state,userId) => {
    return state.users.find(user => user.id === userId)
  }

export const {addUser, deleteUser, editUser  } = Userslice.actions;
 
export default Userslice.reducer;