# Equipment Management System

Full-stack application for managing equipment and maintenance records.

---

## 🚀 Tech Stack

Backend:
- Node.js
- Express.js
- PostgreSQL

Frontend:
- React
- Tailwind CSS
- shadcn/ui
- Axios

---

# 1️⃣ Setup Instructions

## Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL (v14+ recommended)
- npm

---

# 2️⃣ Database Setup

### Step 1: Create Database

```sql
CREATE DATABASE equipment_db;
```

### Step 2: Navigate to db folder
```cd db```

# 3️⃣ Backend Setup
### Navigate to backend folder
```cd backend```

### Install dependencies
```npm install```

### Run backend server
```npm run dev```

### Backend runs at:
```http://localhost:5000```

# 4️⃣ Frontend Setup
### Navigate to frontend folder
```cd backend```

### Install dependencies
```npm install```

### Run frontend server
```npm run dev```

### frontend runs at:
```http://localhost:5173```
# 5️⃣ REST API Endpoints
 ## Equipment
 - GET /api/equipment
- POST /api/equipment
- PUT /api/equipment/:id
- DELETE /api/equipment/:id
 ## Maintenance

 - POST /api/equipment/:id/maintenance
- GET /api/equipment/:id/maintenance

# 6️⃣ Additional Libraries Used
## Backend
- express
- pg
- dotenv
- cors
- nodemon (dev dependency)

## Frontend
- axios
- tailwindcss
- shadcn/ui
