import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true
      },
      email:{
        type: String,
        required: true,
        unique: true
      },
      lastName:{
        type: String,
        required: false
      },
      phoneNumber: {
        type: Number,
        required: false
      },
      password: {
        type: String,
        required: true
      },
      confirmPassword: {
        type: String,
        required: false
      },
    },
    {
      collection: "UserInfo",
    }
    // { timestamps: true }

  );  
const Users = mongoose.model('UserInfo', usersSchema);
  
export default Users;