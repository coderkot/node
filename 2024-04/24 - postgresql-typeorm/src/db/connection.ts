import { DataSource, DataSourceOptions } from "typeorm";
import { Country } from "./Entities/Country.entity";
import { User } from "./Entities/User.entity";

export const connection:DataSourceOptions={
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "fancy_otus",

    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    migrationsTableName:"__migrations"
  };
