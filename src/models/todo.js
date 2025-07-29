class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    setNotes(notes){
        this.notes = notes;
    }
    setChecklist(list){
        this.list = list;
    }
}