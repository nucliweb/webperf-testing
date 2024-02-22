# Web Performance Testing Workshop

## Install Lighthouse CI

````bash
npm install -D @lhci/cli

## Config Lighthouse CI

Create the file `lighthouserc.js` with the next content.

```js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      numberOfRuns: 1,
      url: [
        'http://localhost:3000',
        'http://localhost:3000/left-sidebar',
        'http://localhost:3000/right-sidebar',
        'http://localhost:3000/no-sidebar',
      ],
      // chromePath: '/usr/bin/google-chrome',
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
```
> We have diferent options to define the [config file](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#configuration-file)

## Run Lighthouse CI locally

```bash
lhci autorun
```

## Resources

- [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)
- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci/tree/main/docs)
- [Performance monitoring with Lighthouse CI](https://web.dev/articles/lighthouse-ci)

````
