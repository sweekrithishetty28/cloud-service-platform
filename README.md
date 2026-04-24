# 📸 Image Post API

A RESTful API built with **Node.js**, **Express**, **MongoDB**, and **ImageKit** that allows users to create and retrieve posts with image uploads.

---

## 🚀 Features

- Upload images via multipart form data (stored in memory, uploaded to ImageKit CDN)
- Create posts with an image URL and caption
- Fetch all posts from the database
- CORS enabled for cross-origin requests

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (via Mongoose) |
| Image Storage | ImageKit |
| File Upload | Multer |
| Config | dotenv |

---

## 📁 Project Structure

```
├── server.js                        # Entry point — starts server & DB connection
└── src/
    ├── app.js                       # Express app — routes & middleware
    └── db/
        ├── db.js                    # MongoDB connection
        ├── models/
        │   └── post.model.js        # Mongoose Post schema
        └── services/
            └── storage.service.js   # ImageKit upload service
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URL=your_mongodb_connection_string
IMAGE_PRIVATE_KEY=your_imagekit_private_key
```

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your MONGODB_URL and IMAGE_PRIVATE_KEY in .env

# Start the server
node server.js
```

The server will start on **http://localhost:3000**

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

```json
"express"     - Web framework
"mongoose"    - MongoDB ODM
"multer"      - Multipart file handling
"@imagekit/nodejs" - ImageKit SDK
"cors"        - Cross-Origin Resource Sharing
"dotenv"      - Environment variable management
```

---

## 📝 License

This project is open-source. Feel free to use and modify it.
