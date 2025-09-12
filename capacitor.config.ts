import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.org_food.app',
  appName: 'WasiShop',
  webDir: 'dist/WasiShop/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
