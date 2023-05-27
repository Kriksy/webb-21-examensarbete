# Snoutbook

Nackademin examensarbete webb21

## Getting started

### Tech Stack Usage

- NPM for NodeJS Server and React Client
- Docker for docker compose

### Configuration of Client and Server

```bash
# To configure client, edit .env in client
packages/client/.env


# To configure server, edit .env in server
packages/server/.env
```

### Setup

```bash
# Install project packages
npm install

# Build and Install shared packages for client and server
npm run build-lib

# Start local MongoDB with docker
docker compose up -d

# Create Admin User (admin/admin) for testing
npm run setup-db -w server

# Start server
npm run dev-server

# Start client
npm run dev-client
# or for production mode
npm run serve-client

```

### To run server in development mode

```bash
npm run dev-server
```

### To run client in development mode

```bash
npm run dev-client
```

### To run client in production mode

```bash
npm run serve -w client
```
