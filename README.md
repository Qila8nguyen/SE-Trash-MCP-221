## Getting Started

Node version: 18.12.0

First, install dependencies:

## Install yarn cli

```bash
npm install yarn
```

### Install dependencies

```bash
yarn
```

### Create .env.local

Copy file .env.example

### Run Server

#### For Windows and also MacOS:

```
yarn win
```

#### For MacOS:

```
yarn dev
```

### Create Account and Role

1. src/pages/api/auth/login.tsx
2. Create New User in const users:

```
  {
    id: "nhannt",
    username: "thanhnhan",
    password: "87654321",
    role: "back-officer",
  },
```

3. Run Server
4. Enter correct username, password. If lazy, you can just use [nghi - 123456]
5. Save current state in Local Storage (check it out)
6. Only logout will the server kick you to the login page again -> Click the ava -> Logout

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

```

```
