# Portfolio Website — AWS + Docker + CI/CD

A production-style React portfolio deployed on AWS with a fully automated CI/CD pipeline.

This project demonstrates a complete real-world deployment flow: containerization, image registry, automated builds, and zero-downtime-style deployments to EC2 behind an Application Load Balancer.

---

## Architecture

```text
GitHub (push to main)
        │
        ▼
GitHub Actions
   ├── Build Docker image
   └── Push to Docker Hub (awsportfolio)
        │
        ▼
EC2 Instance (via SSH)
   ├── docker pull
   ├── stop old container
   └── run new container (:80)
        │
        ▼
Application Load Balancer
        │
        ▼
Public traffic
```

### Key Components

- Frontend: React — Portfolio application
- Containerization: Docker — Consistent runtime environment
- Image Registry: Docker Hub (awsportfolio) — Store versioned images
- Compute: AWS EC2 — Runs the container
- Load Balancing: AWS Application Load Balancer — Public entry point + routing
- CI/CD: GitHub Actions — Automated build + deploy on every push
- Secrets: GitHub Secrets — Secure credential management

---

## What Makes This Setup Strong

- **Build happens in CI, not on production**
  The Docker image is built inside GitHub Actions and pushed to Docker Hub. The EC2 instance only pulls and runs the image. This is a significant improvement over building directly on the server.
- **Fully automated pipeline**
  Every push to main triggers:
  1. Image build
  2. Push to registry
  3. Remote deployment via SSH
  4. Container replacement
- **Clean separation of concerns**
  - CI handles building & publishing
  - Production only runs containers
  - Load balancer sits in front of the instance
- **Secure credential handling**
  All sensitive values (Docker Hub token, SSH key, EC2 host) live in GitHub Secrets — nothing is hardcoded.
- **Infrastructure already in place for growth**
  The ALB + EC2 foundation makes it straightforward to add HTTPS, custom domains, auto-scaling, caching, and more.

---

## Deployment Flow (Current)

1. Developer pushes code to main
2. GitHub Actions checks out the code
3. Logs into Docker Hub
4. Builds the image and tags it with both latest and the commit SHA
5. Pushes the image to username/awsportfolio
6. SSHs into the EC2 instance
7. Authenticates with Docker Hub
8. Pulls the new image
9. Stops and removes the old container
10. Starts a new container mapped to port 80
11. Traffic continues flowing through the Application Load Balancer

---

## Local Development

```bash
git clone <repo-url>
cd <repo>
npm install
npm start
```

---

## Manual Deployment (if needed)

```bash
# On the EC2 instance
docker pull <your-dockerhub-username>/awsportfolio:latest
docker rm -f portfolio || true
docker run -d --name portfolio -p 80:80 <your-dockerhub-username>/awsportfolio:latest
```

---

## Future Improvements / Roadmap

This project is intentionally built as a foundation. Planned upgrades include:

### Networking & DNS

- Custom domain via **Amazon Route 53**
- HTTPS using **AWS Certificate Manager (ACM)** + ALB HTTPS listener
- Redirect HTTP → HTTPS

### Performance & Caching

- **Amazon ElastiCache** (Redis) for session or API response caching
- CloudFront CDN in front of the ALB for static assets and global edge caching

### Scalability & Reliability

- Move from single EC2 to **ECS + Fargate** (or ECS on EC2)
- Auto Scaling Group + multiple targets behind the ALB
- Health checks and rolling deployments
- Blue/Green or canary deployments

### Observability & Operations

- CloudWatch Logs + metrics + alarms
- Centralized logging
- Infrastructure as Code (Terraform or AWS CDK)

### Security

- IAM Roles for EC2 (remove long-lived Docker Hub credentials where possible)
- Private subnets + tighter security groups
- Secrets Manager / Parameter Store instead of plain secrets where appropriate

---

## Why This Project Matters

Most portfolio sites are just static files on Vercel or Netlify.

This one deliberately goes deeper:

- Real AWS networking (ALB + EC2)
- Real container workflow (build in CI → registry → pull on server)
- Real CI/CD automation
- Clear path to production-grade services (Route 53, ElastiCache, ECS, CloudFront, etc.)

It shows both current capability and the willingness to keep evolving the architecture.
