"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const readline = __importStar(require("readline"));
const data_source_1 = require("./data-source");
const person_entity_1 = require("./person.entity");
const person_service_1 = require("./person.service");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let personService;
const savePerson = () => __awaiter(void 0, void 0, void 0, function* () {
    // read input from terminal or console. use async and await to wait for the input
    const name = yield new Promise((resolve) => {
        const prompt = " Enter the name of the person:";
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
    const email = yield new Promise((resolve) => {
        const prompt = " Enter the email of the person:";
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
    const phone = yield new Promise((resolve) => {
        // const prompt = " Enter the phone of the person:";
        rl.question("Enter the phone of the person:", (answer) => {
            resolve(answer);
        });
    });
    const dateOfBirth = yield new Promise((resolve) => {
        const prompt = " Enter the date of birth of the person:";
        rl.question(prompt, (answer) => {
            resolve(new Date(answer));
        });
    });
    // create a new person object using the input
    const person = new person_entity_1.Person(name, email, phone, dateOfBirth);
    // call the save method of the person service and pass the person object
    const newPerson = yield personService.save(person);
    console.log("New person created successfully");
    console.log(newPerson);
});
const getPersonById = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = yield new Promise((resolve) => {
        rl.question('Enter the id of the person:', (answer) => {
            resolve(parseInt(answer));
        });
    });
    const person = yield personService.findOne(id);
    if (person) {
        console.log('Person found:');
        console.log(person);
    }
    else {
        console.log('Person not found');
    }
});
const searchPeople = () => __awaiter(void 0, void 0, void 0, function* () {
    const keyword = yield new Promise((resolve) => {
        rl.question('Enter the keyword to search:', (answer) => {
            resolve(answer);
        });
    });
    const people = yield personService.search(keyword);
    if (people.length) {
        console.log('People found:');
        console.log(people);
    }
    else {
        console.log('No people found');
    }
});
const updatePerson = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = yield new Promise((resolve) => {
        rl.question('Enter the id of the person to update:', (answer) => {
            resolve(parseInt(answer));
        });
    });
    const person = yield personService.findOne(id);
    if (!person) {
        console.log('Person not found');
        return;
    }
    console.log('Person current details:', {
        name: person.name,
        email: person.email,
        phone: person.phone,
        dateOfBirth: person.dateOfBirth,
    });
    console.log('You can add new values and press enter or simply press enter to keep the old value');
    const name = yield new Promise((resolve) => {
        rl.question('Enter the name of the person to update:', (answer) => {
            resolve(answer);
        });
    });
    const email = yield new Promise((resolve) => {
        rl.question('Enter the email of the person', (answer) => {
            resolve(answer);
        });
    });
    const phone = yield new Promise((resolve) => {
        rl.question('Enter the phone of the person:', (answer) => {
            resolve(answer);
        });
    });
    const dateOfBirth = yield new Promise((resolve) => {
        rl.question('Enter the date of birth of the person (YYYY-MM-DD):', (answer) => {
            answer ? resolve(new Date(answer)) : resolve(undefined);
        });
    });
    const updateData = {
        name,
        email,
        phone,
        dateOfBirth,
    };
    const updatedPerson = yield personService.update(id, updateData);
    if (updatedPerson) {
        console.log('Person updated successfully:');
        console.log(updatedPerson);
    }
    else {
        console.log('Person not found');
    }
});
const deletePersone = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = yield new Promise((resolve) => {
        rl.question('Enter the id of the person to delete:', (answer) => {
            resolve(parseInt(answer));
        });
    });
    yield personService.delete(id);
    console.log('Person deleted successfully');
});
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Pick an option to perform the operation:');
    // 1 for save, 2 for get by id, 3 for search, 4 for update, 5 for delete
    const msg = `1. Save a person \n2. Get a person by id \n3. Search people \n4. Update a person \n5. Delete a person\n `;
    const option = yield new Promise((resolve) => {
        rl.question(msg, (answer) => {
            resolve(answer);
        });
    });
    if (option === '1') {
        yield savePerson();
        return;
    }
    if (option === '2') {
        yield getPersonById();
        return;
    }
    // search keyword input
    if (option === '3') {
        yield searchPeople();
        return;
    }
    // update person input
    if (option === '4') {
        yield updatePerson();
        return;
    }
    // delete person input
    if (option === '5') {
        yield deletePersone();
        return;
    }
    (() => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Welcome to the CRUD application.');
        yield data_source_1.AppDataSource.initialize();
        personService = new person_service_1.PersonService();
        // keep running the application
        while (true) {
            yield run();
            // ask question to continue or not
            // if no, bread the loop
            const answer = yield new Promise((resolve) => {
                rl.question('Do you want to continue? (yes/no):', (answer) => {
                    resolve(answer);
                });
            });
            if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
                rl.close();
                break;
            }
        }
    }))();
});
