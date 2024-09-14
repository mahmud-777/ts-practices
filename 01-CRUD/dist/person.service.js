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
exports.PersonService = void 0;
const person_entity_1 = require("./person.entity");
const person_repository_1 = require("./person.repository");
class PersonService {
    constructor() {
        this.personRepository = new person_repository_1.PersonRepository();
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const person = new person_entity_1.Person(data.name, data.email, data.phone, (_a = data.dateOfBirth) !== null && _a !== void 0 ? _a : new Date());
            return this.personRepository.save(person);
        });
    }
    // update method. check if the id is present or not and then update the person
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield this.personRepository.findOne(id);
            if (!person) {
                return null;
            }
            const { name, email, phone, dateOfBirth } = data;
            const updatePerson = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, person), (name && { name })), (email && { email })), (phone && { phone })), (dateOfBirth && { dateOfBirth }));
            console.log("Updating person:", updatePerson);
            return this.personRepository.update(updatePerson);
        });
    }
    // delete method. check if the id is present or not and then delete the person 
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield this.personRepository.findOne(id);
            if (!person) {
                return;
            }
            yield this.personRepository.delete(id);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.personRepository.findOne(id);
        });
    }
    search(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.personRepository.search(keyword);
        });
    }
}
exports.PersonService = PersonService;
