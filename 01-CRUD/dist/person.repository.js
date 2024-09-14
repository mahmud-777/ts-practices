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
exports.PersonRepository = void 0;
const data_source_1 = require("./data-source");
const person_entity_1 = require("./person.entity");
const typeorm_1 = require("typeorm");
class PersonRepository {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(person_entity_1.Person);
    }
    save(person) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.save(person);
        });
    }
    saveMany(people) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.save(people);
        });
    }
    update(person) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.save(person);
        });
    }
    updateMany(people) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.save(people);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
    deleteMany(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(ids);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOne({
                where: {
                    id,
                },
            });
        });
    }
    findMany(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findBy({
                id: (0, typeorm_1.In)(ids),
            });
        });
    }
    search(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find({
                where: [
                    {
                        name: (0, typeorm_1.Like)(`%${keyword}%`),
                    },
                    {
                        email: (0, typeorm_1.Like)(`%${keyword}%`),
                    },
                    {
                        phone: (0, typeorm_1.Like)(`%${keyword}%`),
                    },
                ],
            });
        });
    }
}
exports.PersonRepository = PersonRepository;
