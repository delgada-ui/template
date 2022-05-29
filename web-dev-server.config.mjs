import fs from 'fs';

export default {
  open: false,
  watch: true,
  nodeResolve: true,
  port: 3000,
  middleware: [
    function rewriteIndex(context, next) {
      const buildPath = 'build';
      const webComponentDir = 'wc';
      const basePath = '';

      const endpoints = new Map();
      generateEndpointMappings(endpoints, buildPath, webComponentDir, basePath);

      if (context.url === '/') {
        context.url = `/${buildPath}/index.html`;
      }
      if (endpoints.has(context.url)) {
        context.url = endpoints.get(context.url);
      }

      return next();
    },
  ],
};

function generateEndpointMappings(endpoints, buildPath, wcDir, basePath) {
  const files = fs.readdirSync(buildPath);
  for (const file of files) {
    if (
      file !== 'public' &&
      fs.lstatSync(`${buildPath}/${file}`).isDirectory()
    ) {
      generateEndpointMappings(
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
