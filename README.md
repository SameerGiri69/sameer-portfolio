# Portfolio Website — React + Docker + AWS CI/CD

Domain (may not be active): [https://sameergiri.com.np](https://sameergiri.com.np)

Production-style personal portfolio with fully automated CI/CD pipeline.

## Architecture

<img width="2400" height="2694" alt="image" src="https://github.com/user-attachments/assets/c7e43ad9-7639-441b-b9b2-3a68f51b9e28" />

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
# 1. Clone the repo
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Build the image from the Dockerfile
docker build -t portfolio .

# 3. Run the container
docker run -d --name portfolio -p 80:80 portfolio

# 4. Check it's running
docker ps

## Screenshots
<img width="1920" height="921" alt="image" src="https://github.com/user-attachments/assets/3735cc51-572b-4dba-8056-89f71ba70a97" />

<img width="1456" height="458" alt="image" src="https://github.com/user-attachments/assets/dc080c04-91c7-4821-80af-5a33b9fbacd5" />

- CloudFront / ALB console (if possible)
