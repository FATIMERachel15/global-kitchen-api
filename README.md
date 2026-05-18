# The Global Kitchen API

A RESTful backend API for managing recipes in a digital cookbook system.

## Features

- Create recipes
- Retrieve all recipes
- Filter recipes by category
- Update recipe information
- Delete recipes
- Duplicate recipe prevention
- Global error handling
- MongoDB database integration
- Layered architecture implementation

---

## Tech Stack

- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB
- ODM: Mongoose
- Environment Variables: dotenv
- Development Tool: Nodemon
- API Testing: Thunder Client
- Version Control: Git & GitHub

---

## Project Structure

```bash
global-kitchen-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── recipeController.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── models/
│   └── Recipe.js
│
├── routes/
│   └── recipeRoutes.js
│
├── services/
│   └── recipeService.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/global-kitchen-api.git
```

### 2. Navigate Into Project

```bash
cd global-kitchen-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create .env File

Add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### 5. Start Development Server

```bash
npm run dev
```

---

## API Endpoints

### Get All Recipes

```http
GET /recipes
```

### Filter Recipes By Category

```http
GET /recipes?category=African
```

### Create Recipe

```http
POST /recipes
```

### Update Recipe

```http
PATCH /recipes/:id
```

### Delete Recipe

```http
DELETE /recipes/:id
```

---

## Sample Recipe JSON

```json
{
  "title": "Jollof Rice",
  "ingredients": ["Rice", "Tomatoes", "Pepper"],
  "instructions": "Cook everything together",
  "cookingTime": 45,
  "difficulty": "Medium",
  "category": "African"
}
```


## Validation Features

- Duplicate recipe prevention
- Positive cooking time validation
- Required field validation
- Difficulty enum validation

## Author

FATIME RACHEL ADELAIDE