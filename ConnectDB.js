import mongoose from "mongoose";

export const connectToDB = () => {
  try {
    mongoose
      .connect(`${process.env.MONGODB_URI}`, {
        dbName: "PerfumeShop",
      })
      .then(() => console.log("Connected to database successfully!!"));
  } catch (err) {
    console.log("Error connecting to Database ", err);
  }
};
