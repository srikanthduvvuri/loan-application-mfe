# loan_application-mfe/Dockerfile
FROM node:14-alpine 

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# Copy the entire app and build
COPY . .
RUN npm run build

EXPOSE 3001
CMD ["npx", "serve", "-s", "build", "-l", "3001"]
