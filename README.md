# CBE Digital Banking Experience Platform (Dessie Branch)

This platform is a modern, secure, and customer-centric solution designed for the Commercial Bank of Ethiopia (CBE) Dessie Branch (Piyasa). It addresses core customer satisfaction problems such as long waiting times and manual paper-based processing.

## Tech Stack
- **Backend**: Spring Boot 3.4 (Java 21), Spring Security + JWT
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Database**: PostgreSQL
- **Real-time**: WebSockets (STOMP)
- **Infrastructure**: Docker & Docker Compose

## Features implemented
- **Secure Authentication**: Phone number + JWT based login.
- **Smart Queue Management**: Digital token booking with real-time updates.
- **Banking Operations**: Account overview, transfers, and transaction history.
- **Vulnerable Customer Support**: Modern, high-contrast, mobile-first design.
- **Security**: Built-in SSL/TLS support, input validation, and secure headers.

## Getting Started

### Prerequisites
- Java 21+
- Node.js 20+
- Docker & Docker Compose

### 1. Infrastructure
Spin up the database and redis:
```bash
docker-compose up -d
```

### 2. Backend
```bash
cd backend
./mvnw spring-boot:run
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`.
The API will be available at `http://localhost:8080`.
Swagger UI: `http://localhost:8080/swagger-ui.html`

## Security Standards
See [security_security_checklist.md](./security_security_checklist.md) for more details.
