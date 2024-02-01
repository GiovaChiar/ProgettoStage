import { Book } from "./book";

export class Info {
    public books : Book[] = []

    constructor(
        public idUser: string,
        public Username: string,
        public Email: string,
        public NameUser: string,
        public SurnameUser: string,
        
        ) {}
        public setBooks(value: Book[]){
            this.books= value
        }
  }