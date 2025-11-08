# CI/CD + Kubernetes Demo

## Structure
- `users-service` : Service Node.js sur port 3001
- `products-service` : Service Node.js sur port 3002
- `kubernetes/` : Fichiers de déploiement Kubernetes
- `.github/workflows/` : Pipeline GitHub Actions

## Déploiement local
```bash
minikube start
eval $(minikube docker-env)
docker build -t users-service:latest ./users-service
docker build -t products-service:latest ./products-service
kubectl apply -f kubernetes/
kubectl get pods
kubectl get services
minikube service users-service
```
