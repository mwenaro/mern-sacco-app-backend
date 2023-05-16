import mongoose from 'mongoose';
import { wunderberDBCon  } from "../../lib/mongoose";

export interface IEmployee extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    salt?: string;
    role: string;
    // created_at?: Date;
    // updated_at?: Date;
}

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String },
    role: { type: String, required: true, default: 'Employee' },
    // created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default wunderberDBCon.models.Employee || wunderberDBCon.model<IEmployee>('Employee', employeeSchema);