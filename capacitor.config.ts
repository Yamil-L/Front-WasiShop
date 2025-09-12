import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.org_food.app',
  appName: 'org-food-v2',
  webDir: 'dist/WasiShop/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
