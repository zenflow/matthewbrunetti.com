FROM node:14-alpine
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci
ADD lib ./lib
ADD modules ./modules
ADD views ./views
ADD app.js ./
ENV NODE_ENV=production
RUN echo $(date +%s) > RELEASE_ID
RUN APOS_RELEASE_ID=$(cat RELEASE_ID) \
  NODE_OPTIONS=--max-old-space-size=1024 \
  node app @apostrophecms/asset:build
RUN npm prune
ADD public ./public
CMD APOS_RELEASE_ID=$(cat RELEASE_ID) \
  node app
