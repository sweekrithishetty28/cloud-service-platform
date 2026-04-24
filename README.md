# 📸 Image Post App

A full-stack social post application built with **React** on the frontend and **Node.js + Express + MongoDB + ImageKit** on the backend. Users can create posts with images and captions, and browse all posts in a feed.

---

## 🚀 Features

- Upload images and create posts with captions
- Browse all posts in a feed view
- Images stored on ImageKit CDN
- React Router for client-side navigation
- CORS-enabled REST API

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, React Router, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB (via Mongoose) |
| Image Storage | ImageKit |
| File Upload | Multer |
| Config | dotenv |

---

## 📁 Project Structure

```
├── server.js                        # Entry point — starts server & DB connection
├── src/                             # Backend source
│   ├── app.js                       # Express app — routes & middleware
│   └── db/
│       ├── db.js                    # MongoDB connection
│       ├── models/
│       │   └── post.model.js        # Mongoose Post schema
│       └── services/
│           └── storage.service.js   # ImageKit upload service
│
└── client/                          # React frontend
    └── src/
        ├── App.jsx                  # Router setup
        └── pages/
            ├── CreatePost.jsx       # Post creation form
            └── Feed.jsx             # Posts feed
```

---

## 🖥️ Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/create-post` | `CreatePost` | Form to upload an image and write a caption |
| `/feed` | `Feed` | Displays all posts fetched from the API |

---

## ⚙️ Environment Variables

Create a `.env` file in the backend root:

```env
MONGODB_URL=your_mongodb_connection_string
IMAGE_PRIVATE_KEY=your_imagekit_private_key
```

---

## 📦 Installation & Setup

### Backend

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install backend dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your MONGODB_URL and IMAGE_PRIVATE_KEY

# Start the server
node server.js
```

The backend will run on **http://localhost:3000**

### Frontend

```bash
# Navigate to the client directory
cd client

# Install frontend dependencies
npm install

# Start the React dev server
npm run dev
```

The frontend will run on **http://localhost:5173** (or as configured)

---

## 🔌 API Endpoints

### Create a Post

```
POST /createPost
```

**Request** — `multipart/form-data`

| Field | Type | Description |
|-------|------|-------------|
| `image` | File | Image file to upload |
| `caption` | String | Caption for the post |

**Response** — `201 Created`

```json
{
  "message": "Post Created Successfully",
  "post": {
    "_id": "...",
    "image": "https://ik.imagekit.io/...",
    "caption": "Your caption here"
  }
}
```

---

### Get All Posts

```
GET /getPosts
```

**Response** — `200 OK`

```json
{
  "message": "Posts fetched successfully",
  "posts": [
    {
      "_id": "...",
      "image": "https://ik.imagekit.io/...",
      "caption": "Your caption here"
    }
  ]
}
```

---

## 🧰 Dependencies

### Backend
```
express          - Web framework
mongoose         - MongoDB ODM
multer           - Multipart file handling
@imagekit/nodejs - ImageKit SDK
cors             - Cross-Origin Resource Sharing
dotenv           - Environment variable management
```

### Frontend
```
react            - UI library
react-router-dom - Client-side routing
axios            - HTTP requests
```

---

## 📝 License

This project is open-source. Feel free to use and modify it.
