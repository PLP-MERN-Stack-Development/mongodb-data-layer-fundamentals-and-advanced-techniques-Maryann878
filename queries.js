// Query 1: Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });

// Query 2: Find books published after a certain year (e.g., 1950)
db.books.find({ published_year: { $gt: 1950 } });

// Query 3: Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });

// Query 4: Update the price of a specific book (e.g., "The Hobbit")
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
);

// Query 5: Delete a book by its title (e.g., "Animal Farm")
db.books.deleteOne({ title: "Animal Farm" });

//Advanced Queries
// Query 6: Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// Query 7: Use projection to return only the title, author, and price fields
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Query 8: Sort books by price in ascending order
db.books.find({}).sort({ price: 1 });

// Query 9: Sort books by price in descending order
db.books.find({}).sort({ price: -1 });

// Query 10: Implement pagination - first page (5 books)
db.books.find({}).skip(0).limit(5);

// Query 11: Implement pagination - second page (5 books)
db.books.find({}).skip(5).limit(5);


// Aggregation Pipeline 1: 
// Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", average_price: { $avg: "$price" } } },
  { $sort: { average_price: -1 } }
]);

// Aggregation Pipeline 2: Find the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", book_count: { $sum: 1 } } },
  { $sort: { book_count: -1 } },
  { $limit: 1 }
]);

// Aggregation Pipeline 3: Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// Indexing 1: 
// Create an index on the 'title' field
db.books.createIndex({ title: 1 });

// Indexing 2: Create a compound index on 'author' and 'published_year'
db.books.createIndex({ author: 1, published_year: -1 });

// Indexing 3: Demonstrate performance improvement with index on 'title'
db.books.find({ title: "1984" }).explain("executionStats");

// Indexing 4: Demonstrate performance improvement with compound index on 'author' and 'published_year'
db.books.find({ author: "George Orwell", published_year: { $gt: 1940 } }).explain("executionStats");
