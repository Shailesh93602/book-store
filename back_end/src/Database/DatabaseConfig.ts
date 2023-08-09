import mongoose from "mongoose";

export const connectDatabase = () => {
  const MONGOURI = process.env.MONGOURI;
  console.log("Database string", MONGOURI);
  mongoose
    .connect(MONGOURI!)
    .then(() => {
      console.log("Database Connection Successfull!");
    })
    .catch((error) => {
      console.log("Database Connection failed.");
      console.log("Error is ", error);
    });
};
