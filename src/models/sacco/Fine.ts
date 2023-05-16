import { Document, Schema,} from 'mongoose';
import { saccoDBCon } from '../../lib/mongoose';

interface IFine extends Document {
  amount: number;
  description: string;
  transactionId: string;
 
}

const fineSchema = new Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  transactionId: { type: Schema.Types.ObjectId, ref: 'Transaction', required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


export default saccoDBCon.models.Fine || saccoDBCon.model<IFine>('Fine', fineSchema);



