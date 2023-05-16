import mongoose from 'mongoose';
import { wunderberDBCon } from '../../lib/mongoose';

export interface IContactEmail extends mongoose.Document {
  name: string;
  subject: string;
 fro: string;
  body: string;
  // createdAt?: Date;
  // updatedAt?: Date;
}

const contactEmailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
 fro: { type: String, required: true },
  body: { type: String, required: true },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default wunderberDBCon.models.ContactEmail || wunderberDBCon.model<IContactEmail>('ContactEmail', contactEmailSchema);
