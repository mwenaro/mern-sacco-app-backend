import mongoose from "mongoose";
function getDbURI(dbname: string) {
  const MONGO_DB_URI_DEV = `mongodb://localhost:27017/${dbname}?retryWrites=true&w=majority`;
  const ENV = process.env.NODE_ENV || 'developemnt'

  return ENV === "production"
    ? `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_DB_USER}:${process.env.NEXT_PUBLIC_MONGO_DB_PWD}@cluster0.2f29nts.mongodb.net/${dbname}?retryWrites=true&w=majority`
    : MONGO_DB_URI_DEV;

}
const MONGO_DB_URI = getDbURI('wunderber_db')
export const saccoDBCon = mongoose.createConnection(getDbURI('sacco_app_db'));
export const wunderberDBCon = mongoose.createConnection(MONGO_DB_URI);

export const mongoDB = async () => {
  let conn: any = null;
  try {
    conn = await mongoose.connect(MONGO_DB_URI);

    // conn = true;
  } catch (error: any) {
    conn = { errr: error.message };
  } finally {
    // console.log({conn})
    return conn;
  }

  /*,{
    /*useNewUrlParser: true,
    
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    
  });*/
};


export default mongoDB;
