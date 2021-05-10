# Let's Jam

Let's Jam is a social network (it's actually more of a forum, but the kids might not know what a forum is anymore) that hopes to connect musicians based in British Columbia's Lower Mainland.

The tech stack is: Node.js, React.js, Express, MySQL, Knex.js, Bookshelf.js

## Setup

### 1. General

`npm run setup:dev` installs all npm packages needed for both client and server sides.

### 2. Database

*/server/knexfile.js* contains MySQL parameters. The default schema name is *lets-jam*, with the _root_ user taking _rootroot_ as the password.

After setting up the schema, `npm run migrate:seed` seeds the database with dummy data.

### 3. Client and server

`npm run start` runs the server and the client concurrently.

## What doesn't work yet

- Search

## What I still hope to implement

- Responsive design
- Image upload
- Video upload
- Multiple users
- Likes
- Befriend
- Google Distance Matrix API to show distance between users
- Form validation
- Search
- BSOD as modal
- Settings
- FAQ
- About
