export class Book {
   
    constructor(
        public ISBN: string,
        public Title: string,
        public NameWriter: string,
        public SurnameWriter: string, 
        public Type: string, 
        public LocationInLibrary: string,
        public Language: string,
        public NumberOfCopies: number
        ) {}
  }