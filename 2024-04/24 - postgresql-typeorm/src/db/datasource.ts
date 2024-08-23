import { DataSource, DataSourceOptions } from "typeorm";
import { Country } from "./Entities/Country.entity";
import { User } from "./Entities/User.entity";
import { connection } from "./connection";



  export default new DataSource(connection);