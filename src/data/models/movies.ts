import { Document, model, Schema } from 'mongoose';

export interface MoviesDocument extends Document {
  _id: string;
  title: string;
  image: string;
  genre: string;
  year: number;
  links: Array<string>;
}

// Definir el esquema de la película
export const moviesSchema = new Schema({
  _id: String,
  title: String,
  image: String,
  genre: String,
  year: Number,
  links: { type: Array, required: true },
});

// Definir el modelo de la película
export const Movies = model<MoviesDocument>("Movies", moviesSchema);
