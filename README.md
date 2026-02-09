# ollama-ai-demo
This project is created to demonstrate ollama ai integration a simple demo website. 

ai-support/
│
├─ docker-compose.yml
│
├─ backend/
│   ├─ Dockerfile
│   ├─ package.json
│   └─ server.js
│
└─ frontend/
    └─ index.html   (optional)


# How to start this project

From project root:
```
docker compose up -d
```

Pull model inside Ollama container:
```
docker exec -it ollama ollama pull llama3

```

# Access URLs
| Service     | URL                                                      |
| ----------- | -------------------------------------------------------- |
| Frontend    | [http://localhost:8080](http://localhost:8080)           |
| Backend API | [http://localhost:3000/chat](http://localhost:3000/chat) |
| Ollama API  | [http://localhost:11434](http://localhost:11434)         |


# Production improvements (recommended)

✅ Preload model on startup
```
docker exec ollama ollama pull mistral
```
✅ Resource limits
```
deploy:
  resources:
    limits:
      memory: 8G
```
✅ Disable Ollama public port
# remove ports from ollama service

✅ Use HTTPS + Auth for backend

