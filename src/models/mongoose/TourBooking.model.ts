import mongoose from 'mongoose';
import { wunderberDBCon } from '../../lib/mongoose';


export interface ITourBooking extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  country: string;
  specialInterests: string;
  tourDuration: string;
  adults: number;
  infants: number;
  kids: number;
  departureDate: Date;
  // createdAt?: Date;
  // updatedAt?: Date;
}

const tourBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  specialInterests: { type: String, required: true },
  tourDuration: { type: String, required: true },
  adults: { type: Number, default: 0 },
  infants: { type: Number, default: 0 },
  kids: { type: Number, default: 0 },
  departureDate: { type: Date, required: true },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default wunderberDBCon.models.TourBooking || wunderberDBCon.model<ITourBooking>('TourBooking', tourBookingSchema);
