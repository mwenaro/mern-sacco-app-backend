import { Document, Schema } from 'mongoose';
import { saccoDBCon } from '../../lib/mongoose';

interface IAccount extends Document {
  accountNumber: string;
  accountType: string;
  balance: number;
  userId: string;
}

const accountSchema = new Schema({
  accountNumber: { type: String, required: true, unique: true },
  accountType: { type: String, required: true },
  balance: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });;


export default saccoDBCon.models.Account || saccoDBCon.model<IAccount>('Account', accountSchema);
