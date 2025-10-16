# MongoDB Data Layer Fundamentals and Advanced Techniques - Week 1 Assignment

This repository contains the solution for Week 1's MongoDB assignment, focusing on data layer fundamentals, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Setup Instructions

1.  **Install MongoDB or Set up MongoDB Atlas:**
    *   Ensure you have MongoDB Community Edition installed locally, or a free MongoDB Atlas cluster configured.
    *   The `insert_books.js` script assumes a local MongoDB instance running on `mongodb://localhost:27017`. If you are using MongoDB Atlas, please update the `uri` variable in `insert_books.js` with your Atlas connection string.

2.  **Create Database and Collection:**
    *   Using MongoDB Shell (`mongosh`) or MongoDB Compass, connect to your MongoDB instance.
    *   Create a database named `plp_bookstore`.
    *   Create a collection named `books` within the `plp_bookstore` database. (The `insert_books.js` script will automatically handle dropping and recreating the collection if it already exists, ensuring a clean insert.)

## Running the Scripts

1.  **Install Node.js Dependencies:**
    *   Navigate to the project directory in your terminal:
        ```bash
        cd C:\Users\DELL\Desktop\PLP ACADEMY\plp_assignments\MERN\mongodb-data-layer-fundamentals-and-advanced-techniques-Maryann878
        ```
    *   Install the `mongodb` Node.js driver:
        ```bash
        npm install mongodb
        ```

2.  **Insert Sample Data:**
    *   Run the `insert_books.js` script to populate the `books` collection with sample data:
        ```bash
        node insert_books.js
        ```
    *   This script will insert at least 10 book documents with the required fields.

3.  **Execute MongoDB Queries:**
    *   All the assignment queries (basic CRUD, advanced queries, aggregation pipelines, and indexing commands) are located in the `queries.js` file.
    *   To run these queries, open MongoDB Shell (`mongosh`) and connect to your `plp_bookstore` database:
        ```bash
        mongosh "mongodb://localhost:27017/plp_bookstore"
        ```
        (Adjust the connection string if you are using MongoDB Atlas).
    *   Once connected, you can paste and execute the queries from `queries.js` one by one in the `mongosh` terminal.

    *Example of running a query in `mongosh`:*
    ```javascript
    db.books.find({ genre: "Fiction" });
    ```
    *Example of running an aggregation pipeline:*
    ```javascript
    db.books.aggregate([
      { $group: { _id: "$genre", average_price: { $avg: "$price" } } },
      { $sort: { average_price: -1 } }
    ]);
    ```
    *Example of creating an index:*
    ```javascript
    db.books.createIndex({ title: 1 });
    ```
    *Example of using `explain()`:*
    ```javascript
    db.books.find({ title: "1984" }).explain("executionStats");
    ```

## Assignment Completion

*   **`insert_books.js`**: Contains the script used to populate the `books` collection.
*   **`queries.js`**: Contains all MongoDB queries for CRUD operations, advanced queries, aggregation pipelines, and indexing.
*   **Screenshots**: A screenshot of MongoDB Compass or Atlas demonstrating the `plp_bookstore` database, `books` collection, and sample data will be included in the submission. 