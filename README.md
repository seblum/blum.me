# seblum.me

[![S3 Publish CI](https://github.com/seblum/blum.me/actions/workflows/publish-node-s3-bucket.yml/badge.svg)](https://github.com/seblum/blum.me/actions/workflows/publish-node-s3-bucket.yml)

This repository contains the files for the website [seblum.me](https://www.seblum.me). The website is based on the [Waxon-template](https://themeforest.net/item/waxon-vuejs-personal-portfolio-template/33025103).

## Local Development

To build and run the website locally, follow these commands:

```bash
# Install npm and node (version 12)
brew install node@12
brew unlink node
brew link node@12

# Navigate to the project folder 'plain'
cd path/to/your/project/folder/plain

# Project setup
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies the code for production
npm run build
```

The development server will be accessible at http://localhost:3000/. The production build can be found in the `dist` directory.

## License

This template is valid under a regular license provided by [Waxon-template](https://themeforest.net/item/waxon-vuejs-personal-portfolio-template/33025103). For further information or detailed license information, please contact the author at *hello@seblum.me*.

## Clear Cloudfront Cache

For information on clearing the Cloudfront cache, please refer to the [Clear Cloudfront cache documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html).

## Helpful Links

- [Vue CLI Deployment Guide](https://cli.vuejs.org/guide/deployment.html)
- [YouTube Video Tutorial](https://www.youtube.com/watch?v=r55qenPhLP8&ab_channel=ib-themes)
- [Waxon Documentation](http://ibthemespro.com/docs/waxon/)
