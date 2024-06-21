import mongoose from "mongoose";
const MONGO_URI = "mongodb://127.0.1:27017";

export const connectDB = () =>{ mongoose
                                .connect(MONGO_URI,{
                                    dbName: "backendapi",
                                })
                                .then(() => console.log("Database connected"))
                                .catch((e) => console.log(e));

                            }