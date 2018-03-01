import * as mongoose from 'mongoose';

const lifeStyleSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number
});

const LifeStyle = mongoose.model('LifeStyle', lifeStyleSchema);

export default LifeStyle;
