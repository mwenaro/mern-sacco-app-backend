import { Document, Schema,} from 'mongoose';
import { saccoDBCon } from '../../lib/mongoose';

interface ITransaction extends Document {
  amount: number;
  description: string;
  transactionType: string;
  accountId: string;
}

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  transactionType: { type: String, required: true },
  accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


export default saccoDBCon.models.Transaction || saccoDBCon.model<ITransaction>('Transaction', transactionSchema);



