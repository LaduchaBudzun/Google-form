FROM node:16.0.0

WORKDIR /app

COPY tsconfig.json tsconfig.json 
COPY tsconfig.node.json tsconfig.node.json

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]