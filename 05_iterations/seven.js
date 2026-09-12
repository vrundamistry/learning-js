
//--------- map -----------

let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let resultNum = myNum.map( (num) => num + 10 )
// console.log(resultNum)


//----- chaining -----

const resultNum = myNum
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num > 50 )

// console.log(resultNum)



const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    published: 1988,
    edition: 1,
    author: "Paulo Coelho"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    published: 1997,
    edition: 1,
    author: "J.K. Rowling"
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    published: 2018,
    edition: 1,
    author: "James Clear"
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    published: 1925,
    edition: 1,
    author: "F. Scott Fitzgerald"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    published: 2008,
    edition: 1,
    author: "Robert C. Martin"
  },
  {
    title: "JavaScript: The Good Parts",
    genre: "Programming",
    published: 2008,
    edition: 1,
    author: "Douglas Crockford"
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    published: 1997,
    edition: 2,
    author: "Robert Kiyosaki"
  },
  {
    title: "Think and Grow Rich",
    genre: "Self-Help",
    published: 1937,
    edition: 3,
    author: "Napoleon Hill"
  }
];


// Create an array of only titles
const resultBook = books.map( (b) => b.title )
console.log(resultBook)