# Portfolio Website — AWS + Docker + CI/CD

Production-style React portfolio deployed on AWS with automated CI/CD.

**Live:** [https://sameergiri.com.np](https://sameergiri.com.np)

---

## Architecture

```text
GitHub (push to main)
        │
        ▼
GitHub Actions
   ├── Build Docker image
   └── Push to Docker Hub
        │
        ▼
EC2 (SSH)
   ├── docker pull
   ├── stop old container
   └── run new container (:80)
        │
        ▼
Application Load Balancer (HTTPS)
        │
        ▼
CloudFront
        │
        ▼
Route 53 → sameergiri.com.np
Stack

Frontend: React
Container: Docker → Docker Hub
Compute: EC2
Load Balancer: ALB (HTTPS via ACM)
CDN: CloudFront
DNS: Route 53 (sameergiri.com.np)
CI/CD: GitHub Actions


Highlights

Image built in CI, not on the server
Fully automated deploy on every push to main
Credentials stored in GitHub Secrets
Custom domain + HTTPS (Route 53 + ACM + ALB)
CloudFront CDN in front of the ALB


Deployment Flow

Push to main
GitHub Actions builds & pushes image to Docker Hub
SSHs into EC2 → pulls image → replaces container
Traffic flows: Domain → Route 53 → CloudFront → ALB (HTTPS) → EC2
