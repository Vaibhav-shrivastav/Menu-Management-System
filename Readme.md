# Menu Management System

## Overview
This project is a Node.js backend server for menu management. The menu is divided into three parts in the following order:
1. Category
2. Subcategory: A category can have multiple subcategories.
3. Items: A subcategory can have multiple items in it.

## Assignment Objectives
- Project setup
- Create Category, Subcategory, & Items
- Get Category, Subcategory, & Items
- Edit Category, Subcategory, & Items
- Search by item name
- Documentation

## Project Setup
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB

## Architecture
This project follows the Model-View-Controller (MVC) architecture:
- **Model**: Defines the data schema for Categories, Subcategories, and Items.
- **View**: Not applicable as this is a backend project.
- **Controller**: Handles the business logic and interacts with the database.

## Routes

### Category
- **Create Category**
  - `POST /categories`
  - Request Body:
    ```json
    {
        "name": "Beverages",
        "image": "http://example.com/image.png",
        "description": "Various kinds of drinks",
        "taxApplicability": true,
        "tax": 10
    }
    ```

- **Get All Categories**
  - `GET /categories`

- **Get Category by ID or Name**
  - `GET /categories/search/:idOrName`

- **Edit Category**
  - `PATCH /categories/:id`
  - Request Body: Attributes to update

### Subcategory
- **Create Subcategory**
  - `POST /subcategories/category/:categoryId`
  - Request Body:
    ```json
    {
        "name": "Hot Drinks",
        "image": "http://example.com/image.png",
        "description": "Warm beverages",
        "taxApplicability": true,
        "tax": 5
    }
    ```

- **Get All Subcategories**
  - `GET /subcategories`

- **Get All Subcategories under a Category**
  - `GET /subcategories/category/:categoryId`

- **Get Subcategory by ID or Name**
  - `GET /subcategories/search/:idOrName`

- **Edit Subcategory**
  - `PATCH /subcategories/:id`
  - Request Body: Attributes to update

### Item
- **Create Item**
  - `POST /items/subcategory/:subcategoryId`
  - Request Body:
    ```json
    {
        "name": "Tea",
        "image": "http://example.com/image.png",
        "description": "A warm cup of tea",
        "taxApplicability": true,
        "tax": 2,
        "baseAmount": 10,
        "discount": 1,
        "totalAmount": 9
    }
    ```

- **Get All Items**
  - `GET /items`

- **Get All Items under a Category**
  - `GET /items/category/:categoryId`

- **Get All Items under a Subcategory**
  - `GET /items/subcategory/:subcategoryId`

- **Get Item by ID or Name**
  - `GET /items/search/:idOrName`

- **Edit Item**
  - `PATCH /items/:id`
  - Request Body: Attributes to update

### Search Item
- **Search Item by Name**
  - `GET /items/search/:name`

## How to Run the Application Locally

### Prerequisites
- Node.js
- MongoDB

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone git@github.com:Vaibhav-shrivastav/Menu-Management-System.git
   cd menu-management-system

2. **Install the dependencies:**
   ```bash
   npm install

3. **Start the server:**
    ```bash
    node index.js

4. **Use Postman or any other API CLient to test the endpoints**
