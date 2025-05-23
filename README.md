# User-Model-And-Video-Model-With-JWT

1. **Features:** User signup/login with JWT, protected routes, and CRUD for videos linked to users.
2. **Tech Stack:** Node.js, Express, MongoDB with Mongoose, JWT for auth, dotenv for config.
3. **Prerequisites:** Node.js ≥14.x and a MongoDB instance (local or Atlas).
4. **Installation:** Clone repo, run `npm install`, create a `.env`, then `npm run dev`.
5. **Env Variables:**

   * `PORT=5000`
   * `MONGO_URI=your-mongo-connection-string`
   * `JWT_SECRET=yourSuperSecretKey`
   * `JWT_EXPIRES_IN=1d`
6. **User Model:** Fields: `name`, `email` (unique), `password` (hashed), `createdAt`.
7. **Video Model:** Fields: `title`, `description`, `url`, `owner` (User ref), `createdAt`.
8. **Auth Endpoints:**

   * `POST /api/auth/signup` → register
   * `POST /api/auth/login` → get JWT
9. **User & Video Endpoints:**

   * `GET/PUT /api/users/me` (private)
   * `GET /api/videos`, `GET /api/videos/:id` (public)
   * `POST/PUT/DELETE /api/videos` (private, owner-only)
10. **Error Handling & License:** JSON errors with 401/403/404 codes; MIT License.

