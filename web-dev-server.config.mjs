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
      const endpoints = getEndpointMappings(buildPath, 'wc', '');

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

function getEndpointMappings(buildPath, webComponentDir, basePath) {
  const endpoints = new Map();
  getEndpointMappingsHelper(endpoints, buildPath, webComponentDir, basePath);
  return endpoints;
}

function getEndpointMappingsHelper(endpoints, buildPath, wcDir, basePath) {
  const files = fs.readdirSync(buildPath);
  for (const file of files) {
    if (
      file !== 'public' &&
      fs.lstatSync(`${buildPath}/${file}`).isDirectory()
    ) {
      getEndpointMappingsHelper(
        endpoints,
        `${buildPath}/${file}`,
        wcDir,
        `${basePath}/${file}`
      );
    } else {
      if (file.endsWith('.html')) {
        const endpoint = `${basePath}/${file.replace('.html', '')}`;
        endpoints.set(endpoint, `/${buildPath}/${file}`);
      }
      if (file.endsWith('.css')) {
        const endpoint = `${basePath}/${file}`;
        endpoints.set(endpoint, `/${buildPath}/${file}`);
      }
      if (file.endsWith('.js')) {
        const endpoint = `/${wcDir}/${file}`;
        endpoints.set(endpoint, `/${buildPath}/${file}`);
      }
    }
  }
}
