import { Document, Schema } from 'mongoose';
import { saccoDBCon } from '../../lib/mongoose';

interface IUser extends Document {
  firstName: string;
  lastName: string;
  idno:number
  email: string;
  password: string;
  phone: string;
}

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  idno:{type:String, required:true, unique:true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true, unique:true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


export default saccoDBCon.models.User || saccoDBCon.model<IUser>('User', userSchema);