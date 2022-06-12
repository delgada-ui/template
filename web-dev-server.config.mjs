import fs from 'fs';

export default {
  nodeResolve: true,
  port: 3000,
  plugins: [delgada()],
};

function delgada() {
  return {
    name: 'delgada',
    async serverStart({ app }) {
      const buildPath = 'build';
      const endpoints = getRouteMappings(buildPath, '');

      app.use((context, next) => {
        if (context.url === '/') {
          context.url = `/${buildPath}/index.html`;
        }
        if (endpoints.has(context.url)) {
          context.url = endpoints.get(context.url);
        }
        return next();
      });
    },
  };
}

function getRouteMappings(buildPath, basePath) {
  const endpoints = new Map();
  getRouteMappingsHelper(endpoints, buildPath, basePath);
  return endpoints;
}

function getRouteMappingsHelper(endpoints, buildPath, basePath) {
  const files = fs.readdirSync(buildPath);
  for (const file of files) {
    if (
      file !== 'public' &&
      fs.lstatSync(`${buildPath}/${file}`).isDirectory()
    ) {
      getRouteMappingsHelper(
        endpoints,
        `${buildPath}/${file}`,
        `${basePath}/${file}`
      );
    } else {
      if (file.endsWith('.html')) {
        const endpoint = `${basePath}/${file.replace('.html', '')}`;
        endpoints.set(endpoint, `/${buildPath}/${file}`);
      } else if (file.endsWith('.css')) {
        const endpoint = `${basePath}/${file}`;
        endpoints.set(endpoint, `/${buildPath}/${file}`);
      } else {
        // Any JavaScript or static asset files will be served from
        // the root build path
        const endpoint = `/${file}`;
        endpoints.set(endpoint, `/${buildPath}/${file}`);
      }
    }
  }
}
