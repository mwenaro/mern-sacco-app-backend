import mongoose from 'mongoose';
import { wunderberDBCon } from '../../lib/mongoose';


export interface IAppAdmin extends mongoose.Document {
    email: string
    password: string
    AppName?: string
    AccessToken: string
    // created_at?: Date;
    // updated_at?: Date;
}

const appAdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    AccessToken: { type: String, required: true },
   AppName: { type: String, required: true },
    // created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default wunderberDBCon.models.AppAdmin || wunderberDBCon.model<IAppAdmin>('AppAdmin', appAdminSchema);

