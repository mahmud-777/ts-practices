"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const person_entity_1 = require("./person.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'mydatabase.sqlite', // You can change the database name
    synchronize: true, // This will create the database and tables automatically
    logging: false,
    entities: [person_entity_1.Person],
});
