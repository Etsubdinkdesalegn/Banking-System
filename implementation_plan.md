# CBE Digital Banking Experience Platform - Implementation Plan

This document outlines the architecture, roadmap, and security standards for the CBE Digital Banking Platform for the Dessie Branch (Piyasa).

## 1. Project Architecture

The system follows a monorepo-style structure for development convenience, but services are decoupled for scalability.

```
/ (Root)
├── backend/            # Spring Boot 3 + Java 21
│   ├── src/
│   ├── build.gradle    # or pom.xml
│   └── Dockerfile
├── frontend/           # Next.js 15 (App Router)
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml  # Infrastructure (PostgreSQL, Redis)
└── README.md
```

## 2. Tech Stack Specs

### Backend
- **Framework**: Spring Boot 3.4+
- **Language**: Java 21
- **Security**: Spring Security + JWT + OAuth2 (Resource Server)
- **Database**: PostgreSQL
- **Real-time**: Spring WebSocket (STOMP)
- **API**: RESTful with OpenAPI/Swagger
- **Validation**: Jakarta Validation (Hibernate Validator)

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React

## 3. Key Features Roadmap

### Phase 1: Foundation & Security
- [ ] Initialize Spring Boot with Security (JWT)
- [ ] Initialize Next.js with shadcn/ui
- [ ] Setup Docker Compose (Postgres, Redis)
- [ ] Implementation of User Registration & Phone-based Auth

### Phase 2: Transaction Engine
- [ ] Account Dashboard
- [ ] Digital Transaction Forms (replacing paper forms)
- [ ] QR Code Generation for transactions
- [ ] Intra-bank and Inter-bank transfer logic

### Phase 3: Smart Queue Management
- [ ] Real-time Queue Status (WebSocket)
- [ ] Token Booking Service
- [ ] Branch Staff Dashboard for Queue handling
- [ ] SMS/Push notification integration placeholder

### Phase 4: Support for Vulnerable Customers
- [ ] Amharic-first UI toggle
- [ ] Large-font/High-contrast mode
- [ ] "Need Help" chat/video call (WebRTC) integration
- [ ] Step-by-step transaction wizard

### Phase 5: Admin & Analytics
- [ ] Admin Dashboard for branch metrics
- [ ] Audit Logs & Security Monitoring
- [ ] Performance Optimization

## 4. Security Checklist
- [ ] HTTPS everywhere (handled via Reverse Proxy/HSTS)
- [ ] JWT with short expiry + Refresh tokens
- [ ] Rate limiting on Auth endpoints (Redis)
- [ ] XSS/CSRF Protection
- [ ] Input sanitization & SQLi prevention (JPA/Hibernate)
- [ ] Secure headers (CSP, Frame Options)

## 5. Design Tokens (CBE Palette)
- **Primary Blue**: `#004b91` (Traditional CBE Blue)
- **Primary Green**: `#32a041` (CBE Green)
- **Background**: White/Light Gray
- **Typography**: Inter (English) + Noto Sans Ethiopic (Amharic)
