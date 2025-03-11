import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tasksFile = path.join(__dirname, 'homework.txt');

function writeFileSync (){
    const write = fs.writeFileSync (tasksFile, 'Homework 02 in Basic Node\nFINISHED!');
    return write;
}

writeFileSync()

function fileContents(){
    const file = fs.readFileSync(tasksFile, 'utf-8');
    console.log(file);
}

fileContents()
