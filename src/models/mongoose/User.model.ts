import mongoose from 'mongoose';
import { wunderberDBCon } from '../../lib/mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  salt?: string;
  role: string;
  // createdAt?: Date;
  // updatedAt?: Date;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String },
  role: { type: String, required: true, default: 'user' },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default wunderberDBCon.models.User || wunderberDBCon.model<IUser>('User', userSchema);
