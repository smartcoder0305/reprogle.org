import { writeFile } from 'fs';
import * as process from 'process';

// Check if the NODE_ENV env variable is set to prod
const isProduction = process.env['NODE_ENV'] === 'prod';
const isGitHubCI = process.env['CI'] === 'true';

// If we're using a prod environment, we write to the environment.prod.ts file. Otherwise, write to the environment.ts file
const targetPath = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

// If we are in prod, continue. Otherwise, exit as Angular will handle environment files for us
if (isProduction) {
  console.log(
    'Currently using a production environment. Setting environment variables as such'
  );
} else if (isGitHubCI) {
  console.log(
    'Application is running in GitHub Actions. GitHub Actions combined with Angular will set the proper testing environment variables'
  );
  process.exit(0);
} else {
    console.log(
      'Running application in development mode. Angular will handle migrating environment variables, assuming environment.dev.ts has been configured properly'
    );
    process.exit(0);
}

// Create the contents of the environment file using environment variables set via our host (Which is Google Cloud Run)
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   turnstileSiteKey: "${process.env['PUBLIC_TURNSTILE_SITE_KEY']}",
   apiurl: "${process.env['PUBLIC_API_URL']}",
   cypress: false
};
`;

// Write the contents of the environment file to the actual environment file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }

  console.log(`Wrote variables to ${targetPath}`);
});
