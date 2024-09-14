"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const person_entity_1 = require("./person.entity");
function savePerson() {
    return __awaiter(this, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize();
        const person = new person_entity_1.Person(`John ${Math.random()} `, `john.${Math.random()}@example.com`, `+1 555 555 ${Math.floor(Math.random() * 100)}`, new Date(`19${Math.floor(Math.random() * 100) + 50}-01-01`));
        yield data_source_1.AppDataSource.manager.save(person);
        console.log('Person saved successfully: ', person);
        yield data_source_1.AppDataSource.destroy();
    });
}
savePerson();
