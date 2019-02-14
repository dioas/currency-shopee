# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:10.14.2

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
#RUN yarn add serve -g
# CMD serve -s build
EXPOSE 8080

# Install all dependencies of the current project.
COPY package.json package.json
#COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN yarn install

# Copy all local files into the image.
COPY . .

# Build for production.
ENTRYPOINT yarn run serve