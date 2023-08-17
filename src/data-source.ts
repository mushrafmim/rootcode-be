import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.QUIZBANK_DB_URI,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
