# Backend - User Notes Application API

Robust Node.js, Express, and TypeScript RESTful API for a User Notes Application featuring JWT authentication using HTTP-only cookies, Mongoose data modeling, Zod request validation, and strict user data isolation.

---

## 🚀 Features

- **User Registration (`POST /register`, `POST /api/auth/register`)**:
  - Name validation: Capitalized first letter, no numbers, max 15 characters.
  - Password strength validation: 6-16 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special character.
  - Password hashing with `bcrypt` (10 salt rounds).
- **User Login (`POST /login`, `POST /api/auth/login`)**:
  - Authenticates credentials and issues `accessToken` and `refreshToken` via HTTP-only cookies.
- **Session Verification (`GET /api/auth/me`)**:
  - Authenticated route to verify active cookie session and return user profile.
- **User Logout (`POST /api/auth/logout`)**:
  - Clears `accessToken` and `refreshToken` HTTP-only cookies.
- **Notes CRUD APIs (`/api/notes`)**:
  - `POST /api/notes`: Create new note.
  - `GET /api/notes`: Fetch logged-in user's notes (supports live search query `?search=...`).
  - `GET /api/notes/:id`: Fetch single note.
  - `PUT /api/notes/:id`: Update note title and content.
  - `DELETE /api/notes/:id`: Delete note.
- **Data Isolation**: Notes operations strictly filter by `userId`, ensuring users can only access their own notes.
- **Centralized Error Handling**: Express middleware managing database duplicate key errors, Zod validation errors, and custom application errors.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5)
- **Language**: TypeScript
- **Database**: MongoDB & Mongoose ORM
- **Security & Auth**: `bcrypt`, `jsonwebtoken`, `cookie-parser`
- **Validation**: `zod`
- **Development Tooling**: `tsx` (auto-reload execution)

---

## 📁 Directory Structure

```
backend/
├── src/
│   ├── config/              # Database & Environment configuration
│   ├── constants/           # HTTP status, messages, cookie options, token enums
│   ├── controllers/         # Auth & Note controller handlers
│   ├── errors/              # Custom AppError class
│   ├── interfaces/          # DTO interfaces (Register, Login, CreateNote, UpdateNote)
│   ├── middleware/          # Auth, Validate, and Error Handler middlewares
│   ├── models/              # User and Note Mongoose schemas
│   ├── routes/              # Express Auth and Note routers
│   ├── services/            # Business logic layer (auth.service, note.service)
│   ├── types/               # Express Request type declarations
│   ├── utils/               # Password, JWT, Cookie, and Response helpers
│   ├── validators/          # Zod validation schemas
│   ├── app.ts               # Express app configuration & middleware mounts
│   └── server.ts            # HTTP server startup & database initialization
├── .env                     # Environment variables configuration
├── package.json
└── tsconfig.json
```

---

## 🔧 Environment Variables Configuration

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/NOTE-APP
ACCESS_TOKEN_SECRET=your_access_token_secret_key
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=your_refresh_token_secret_key
REFRESH_TOKEN_EXPIRES_IN=7d
FROND_END_URL=http://localhost:5173
NODE_ENV=development
ACCESS_TOKEN_MAX_AGE=900000
REFRESH_TOKEN_MAX_AGE=604800000
```

---

## 🚦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
*Server listens on: `http://localhost:5000`*

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📖 API Endpoints Documentation

### Authentication Routes

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/register` or `/api/auth/register` | No | Register new user account |
| `POST` | `/login` or `/api/auth/login` | No | Login and receive HTTP-only session cookies |
| `GET` | `/api/auth/me` | Yes | Get authenticated user profile |
| `POST` | `/api/auth/refresh` | No | Refresh access token |
| `POST` | `/api/auth/logout` | Yes | Clear authentication cookies |

### Notes CRUD Routes

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/api/notes` | Yes | Create new note for logged-in user |
| `GET` | `/api/notes` | Yes | Fetch all notes owned by user (supports `?search=term`) |
| `GET` | `/api/notes/:id` | Yes | Fetch single note by ID |
| `PUT` | `/api/notes/:id` | Yes | Update note title / content |
| `DELETE` | `/api/notes/:id` | Yes | Delete note by ID |
