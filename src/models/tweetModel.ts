import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TweetSchema = new Schema({
  polarity: Number,
  id: Number,
  date: String,
  query: String,
  user: String,
  text: String
});
