# AI-Powered Sales Call Analysis and Grading Software - Backend

This project is the backend service for the AI-Powered Sales Call Analysis and Grading Software. It provides endpoints to manage onboarding, company information, team member invitations, and performance grading based on proprietary sales education material. The backend is built using Express.js and Supabase for authentication and database management.

## Features

- **Manager Onboarding**: Register, update, and manage manager profiles.
- **Company Information**: Add and update company information associated with a manager.
- **Team Management**: Invite and manage team members under a manager.
- **Onboarding Status**: Track and retrieve the onboarding status of managers.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [API Endpoints](#api-endpoints)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/damilolajohn6/sales-analysis-backend.git
   cd sales-analysis-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
PORT=5000
```

## Running Locally

To run the server locally, use the following commands:

- Start the server:
  ```bash
  npm start
  ```

- Start the server with live-reloading (for development):
  ```bash
  npm run dev
  ```

## API Endpoints

Here are the main API endpoints provided by this backend:

### **Manager Endpoints**

- **Register Manager**
  - `POST /api/manager/register`
  - Request Body: `{ "email": "string", "password": "string", "name": "string", "phone": "string" }`

- **Update Manager**
  - `PUT /api/manager/update`
  - Request Body: `{ "managerId": "string", "name": "string", "phone": "string" }`

- **Add Company Information**
  - `POST /api/manager/company`
  - Request Body: `{ "managerId": "string", "companyName": "string", "address": "string" }`

- **Invite Team Members**
  - `POST /api/manager/invite`
  - Request Body: `{ "managerId": "string", "email": "string", "role": "string" }`

- **Get Onboarding Status**
  - `GET /api/manager/status/:managerId`
