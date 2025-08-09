# My Recipe Collection

A personal digital recipe book built with Node.js and PostgreSQL to organize and manage home cooking recipes.

## 🎯 Description

**GitHub Description:** _Personal recipe management system with ingredients tracking and automatic cost calculations - built from scratch with Node.js and PostgreSQL_

## ✨ Features

-   **Recipe Management** - Create, edit, and organize personal recipes
-   **Ingredient Tracking** - Manage ingredients with quantities and units
-   **Search & Filter** - Find recipes by name or ingredient
-   **Cost Calculation** - Track approximate recipe costs (optional)
-   **Cooking Times** - Record preparation and cooking times
-   **Personal Notes** - Add cooking tips and modifications

## 🏗️ Tech Stack

-   **Backend:** Node.js with Express.js
-   **Database:** PostgreSQL
-   **Architecture:** MVC pattern with clean separation
-   **Philosophy:** Built from scratch without ORMs or frameworks

## 📊 Database Schema

### Tables

-   **recipes** - Recipe details with instructions and timing
-   **ingredients** - Ingredient master list
-   **recipe_ingredients** - Many-to-many relationship with quantities

### Key Features

-   Database migrations for version control
-   Automated triggers for timestamp updates
-   Referential integrity with foreign keys

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14+)
-   PostgreSQL (v12+)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/burnogama/my-recipe-collection.git
    cd my-recipe-collection
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Environment setup**

    ```bash
    cp .env.example .env
    # Edit .env with your database credentials
    ```

4. **Database setup**

    ```bash
    # Create database
    createdb my_recipe_collection

    # Run migrations
    node db/scripts/runMigrations.js
    ```

5. **Start the server**
    ```bash
    npm start
    ```

## 📁 Project Structure

```
├── controllers/         # Request handlers
├── services/           # Business logic
├── routes/             # API endpoints
├── db/
│   ├── config/         # Database connection
│   ├── migrations/     # Database version control
│   └── scripts/        # Migration runner
└── utils/              # Helper functions
```

## 🛣️ API Endpoints

### Recipes

-   `GET /recipes` - List all personal recipes
-   `POST /recipes` - Create new recipe
-   `GET /recipes/:id` - Get recipe with ingredients
-   `PUT /recipes/:id` - Update recipe
-   `DELETE /recipes/:id` - Delete recipe

### Ingredients

-   `GET /ingredients` - List all ingredients
-   `POST /ingredients` - Add new ingredient
-   `GET /ingredients/:id` - Get specific ingredient

## 💡 Learning Goals

This project serves as a practical learning exercise for:

-   **Database Design** - Normalized schema with relationships
-   **Migration Systems** - Version-controlled database changes
-   **RESTful APIs** - Clean endpoint design
-   **MVC Architecture** - Separation of concerns
-   **PostgreSQL** - Advanced features like triggers and constraints

## 🎨 Frontend

Currently focusing on backend development. Frontend will be a simple interface for:

-   Recipe browsing and creation
-   Ingredient management
-   Search functionality

## 📈 Future Enhancements

-   [ ] Recipe import/export
-   [ ] Photo attachments
-   [ ] Nutritional information
-   [ ] Recipe scaling calculator
-   [ ] Shopping list generator
-   [ ] Recipe sharing features

## 🤝 Development Philosophy

-   **Learn by building** - Everything coded from scratch
-   **Real-world application** - Solving actual personal needs
-   **Clean code** - Readable and maintainable structure
-   **Progressive enhancement** - Start simple, add complexity gradually

## 📝 License

Personal project for learning and recipe organization.

---

**Status:** Active Development  
**Purpose:** Personal recipe management and JavaScript learning  
**Goal:** Digital replacement for handwritten recipe collection
