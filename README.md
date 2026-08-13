# Portfolio Website — React + Docker + AWS CI/CD

Live site: [https://sameergiri.com.np](https://sameergiri.com.np)

Production-style personal portfolio with fully automated CI/CD pipeline.

## Architecture

[Paste your nice architecture diagram here as an image]

**Request path:**  
User → Route 53 → CloudFront → ALB (HTTPS + ACM) → EC2 (Docker container on port 80)

## Tech Stack
- Frontend: React (Vite)
- Container: Docker (multi-stage recommended)
- Registry: Docker Hub
- Compute: EC2
- Load Balancing: Application Load Balancer
- CDN: CloudFront
- DNS + HTTPS: Route 53 + ACM
- CI/CD: GitHub Actions

## Key Features / Highlights
- Image is built in CI (not on the server)
- Fully automated deploy on every push to `main`
- Credentials stored securely in GitHub Secrets
- Custom domain with free HTTPS
- CloudFront in front of ALB for caching & lower latency
- Zero-downtime-ish deployment (stop old → start new)

## Design Decisions
- Why CloudFront in front of ALB?
- Why Docker Hub instead of ECR?
- Why single EC2 instead of ECS Fargate / Auto Scaling?
- Security choices (SSH key, secrets handling, etc.)
- Cost considerations

## How to Deploy / Run Locally
(Add clear steps)

## Screenshots
- Live site
- GitHub Actions successful run
- CloudFront / ALB console (if possible)
