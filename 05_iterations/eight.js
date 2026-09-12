
//--------- reduce -----------

let myNum = [1, 2, 3, 4]

// let myTotal = myNum.reduce( function(acc, curVal) {
//     console.log(`acc: ${acc} and carVal: ${curVal}`)
//     return acc + curVal
// },0)

// console.log(myTotal)


// let myTotal = myNum.reduce( (acc, curVal) => (acc+curVal), 2 )
// console.log(myTotal)


//------

const shoppingCart = [
    {
        itemName: "js course",
        price: 500
    },
    {
        itemName: "python course",
        price: 2000
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "llm course",
        price: 49999
    },
]

const priceTotal = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)

// console.log(priceTotal)




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


// Count books by genre

const resultCountBook = books.reduce( (acc, b) => {
    if (acc[b.genre]) {
        acc[b.genre]++
    } else {
        acc[b.genre] = 1;
    }

    return acc;
}, {} )

console.log(resultCountBook)