import fs from 'fs';

export default {
  open: false,
  watch: true,
  nodeResolve: true,
  port: 3000,
  middleware: [
    function rewriteIndex(context, next) {
      rewritePageUrls(context, 'build', '');
      handleWebComponentDirectory(context);

      return next();
    },
  ],
};

function rewritePageUrls(context, buildPath, basePath) {
  const files = fs.readdirSync(buildPath);
  for (const file of files) {
    if (
      file !== 'public' &&
      file !== 'wc' &&
      fs.lstatSync(`${buildPath}/${file}`).isDirectory()
    ) {
      rewritePageUrls(
        context,
        `${buildPath}/${file}`,
        `${basePath ? basePath + '/' : ''}${file}`
      );
    } else {
      if (file.endsWith('.html')) {
        const endpointUrl = file.replace('.html', '');
        if (
          context.url === `/${endpointUrl}` ||
          context.url === `/${basePath}/${endpointUrl}` ||
          context.url === '/'
        ) {
          if (context.url === '/') {
            context.url = `/${buildPath}/index.html`;
          } else {
            context.url = `/${buildPath}/${endpointUrl}.html`;
          }
        }
      }
    }
  }
}

function handleWebComponentDirectory(context) {
  const wcFiles = fs.readdirSync('build/wc');
  for (const file of wcFiles) {
    if (file.endsWith('.js')) {
      if (context.url === `/wc/${file}`) {
        context.url = `/build/wc/${file}`;
      }
    }
  }
}
