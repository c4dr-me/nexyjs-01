import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    photo: {
        type: String,
    },
    planId: {
        type: Number,
    },
    creditBalance: {
        type: Number,
        default: 10,
    },
})

const User = models?.User || model("User", UserSchema);

export default User;