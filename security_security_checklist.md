# CBE Digital Banking Security & Compliance Checklist

## 1. Network Security
- [x] HTTPS Only (Enforced via Spring Security/Nginx)
- [ ] HSTS (HTTP Strict Transport Security) enabled
- [ ] CSP (Content Security Policy) implemented in Next.js
- [ ] Rate limiting on API endpoints (especially Auth)

## 2. Authentication & Authorization
- [x] JWT with RS256 or HS256/512 signing
- [x] BCRYPT for password hashing (Salted)
- [ ] 2FA/OTP implementation (Pending SMS provider)
- [x] Role-Based Access Control (RBAC) (CUSTOMER, STAFF, ADMIN)
- [x] Account lockout after multiple failed attempts (Redis-based)

## 3. Data Protection
- [x] End-to-End Encryption for sensitive data
- [x] Input Validation (JSR 303) on all requests
- [x] SQL Injection protection (JPA Parameterized queries)
- [x] XSS protection (Next.js auto-escaping)
- [ ] CSRF protection (Stateless JWT doesn't need it, but keep eye on Cookies)

## 4. Auditing
- [ ] Audit logs for all financial transactions
- [ ] centralized logging system
- [ ] API monitoring and alerting

## 5. Branch Compliance
- [ ] GDPR-compliant data handling
- [ ] Local banking regulations (CBE Standards)
