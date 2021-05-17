import { v4 as uuidv4 } from 'uuid';

class Todo {
    text: string;
    id: string;
    date: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = uuidv4().toString();
        this.date = new Date().toDateString();
    }
}

export default Todo;