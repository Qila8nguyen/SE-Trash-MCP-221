import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  rights: [{
    title: String,
    route: String
  }]
}, { versionKey: false, collection: 'users' })

export default mongoose.models?.Users || mongoose.model('User', UserSchema)