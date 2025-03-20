import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Run in GUI mode
    trace: 'on', // Capture traces
    screenshot: 'on',
    video: 'retain-on-failure'
  },
//   workers: 4,
  
//   projects: [
//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },
//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },
//     {
//       name: 'google-chrome',
//       use: { ...devices['Desktop Chrome'] },
//     },
//   ],
});
