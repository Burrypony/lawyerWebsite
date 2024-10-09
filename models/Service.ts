import mongoose, { Document, Schema } from "mongoose";

export interface IService extends Document {
  name: string;
  description: string;
  image: string;
  index: number;
}

const serviceSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  index: {
    type: Number,
    require: true
  }
});


const Service = mongoose.model<IService>('Service',serviceSchema);

export default Service;
