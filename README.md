# User Management System

A **full-stack CRUD web application** built using **Next.js, Node.js API Routes, Prisma ORM, and MySQL/PostgreSQL**.
The application allows users to **create, view, update, and delete users** through a clean and responsive interface.

---

## 🚀 Features

* View all users in a dashboard table
* Create a new user
* Edit existing user information
* Delete users
* Responsive UI with Tailwind CSS
* RESTful API built using Next.js API routes
* Database integration using Prisma ORM
* Loading states and basic validation

---

## 🛠 Tech Stack

**Frontend**

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

**Backend**

* Next.js API Routes (Node.js)

**Database**

* Prisma ORM
* MySQL / PostgreSQL

---

## 📁 Project Structure

```
user-management/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── add-user/
│   │   │   └── page.tsx
│   │   ├── edit-user/
│   │   │   └── [id]/page.tsx
│   │   └── api/
│   │       └── users/
│   │           ├── route.ts
│   │           └── [id]/route.ts
│   │
│   ├── lib/
│   │   └── prisma.ts
│   │
│   └── components/
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/kajal20202/npx-prisma-generate.git
```

Navigate into the project:

```
cd npx-prisma-generate
```

Install dependencies:

```
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the project root and add your database connection.

Example:

```
DATABASE_URL="mysql://root:password@localhost:3306/userdb"
```

or

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/userdb"
```

---

## 🗄 Prisma Setup

Run migration to create the database schema:

```
npx prisma migrate dev --name init
```

Generate Prisma Client:

```
npx prisma generate
```

---

## ▶️ Run the Application

Start the development server:

```
npm run dev
```

Open your browser:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| POST   | `/api/users`     | Create a new user |
| PUT    | `/api/users/:id` | Update user       |
| DELETE | `/api/users/:id` | Delete user       |

---

## ⏱ Estimated Time Spent

Approximately **5–6 hours** were spent completing this assignment including UI, API development, and database integration.

---

## ⚠️ Challenges Faced

* Initial setup and configuration of **Prisma with Next.js**
* Handling **Prisma client generation errors**
* Managing **API integration with the frontend**

These issues were resolved by properly generating the Prisma client and configuring the database connection.

---

## 📌 Future Improvements

* Implement search functionality
* Add pagination for user list
* Improve UI with better form validation
* Add toast notifications for actions

---

## 👩‍💻 Author

**Kajal Talwekar**

Frontend Developer
React.js | Next.js | TypeScript | Prisma
