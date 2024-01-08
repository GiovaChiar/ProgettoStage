export class Book {
   
    constructor(
        public isbn: string,
        public title: string,
        public name: string,
        public surname: string, 
        public genre: string, 
        public position: string,
        public language: string,
        public state: string,
        public copies: number
        ) {}
  }