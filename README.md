# Book Records Management MERN Stack Web App

## Description

This is a full-stack web application for managing book records. The application provides basic CRUD (Create, Read, Update, Delete) operations for book entries.

## Technologies Used

- **Frontend:**
  - [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [React Router](https://reactrouter.com/): Declarative routing for React.js.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.

- **Backend:**
  - [Node.js](https://nodejs.org/): A JavaScript runtime for building server-side applications.
  - [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework.
  - [MongoDB](https://www.mongodb.com/): A NoSQL database.
  - [Mongoose](https://mongoosejs.com/): An elegant MongoDB object modeling tool.

## Features
- **View Books:** See a list of all books in the system.
- **Add Book:** Add a new book to the records.
- **Edit Book:** Modify information for an existing book.
- **Delete Book:** Remove a book from the records.
- **View Book Details:** See detailed information about a specific book.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js and npm](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/azizhirani/BOOKSTORE-MERN-AZIZ.git
   cd BOOKSTORE-MERN-AZIZ


## Install Dependencies:

1. **Install backend dependencies**
   
    ```bash
    cd backend
    npm install mongodb mongoose express cors

2. **Install frontend dependencies**
   
   ```bash
   cd frontend
   npm install react-router-dom notistack axios react-icons

3. **Install tailwindCSS dependencies**

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
- for further installation refer [TailwindCSS Install Guide](https://tailwindcss.com/docs/installation)

### Set Up MongoDB Connection:
- Create a .env file in the server directory.
- Add your MongoDB connection string in the .env file:

    ```env
    MONGODB_URI=your_mongodb_connection_string


## Start the Application:

1. **Start the backend server**
   
   ```bash
   cd backend
   npm run dev

- Open a new terminal and start the frontend:

2. **Start the frontend server**
        
     ```bash
     cd frontend
     npm run dev

- Your web app should now be accessible at [http://localhost:5173]

