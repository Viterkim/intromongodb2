import mongoose from 'mongoose';

export function getMongoConnection(url: string | undefined): Promise<mongoose.Connection> {
  if (url === undefined) {
    throw new Error('No Mongo URL entered');
  }
  return new Promise((resolve, reject) => {
    mongoose.connect(url, { useNewUrlParser: true });
    mongoose.connection.on('error', (err) => {
      reject(err);
    });
    mongoose.connection.on('open', () => {
      console.log('Mongodb connection established')
      resolve(mongoose.connection);
    })
  });
}
