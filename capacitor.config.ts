
import { CapacitorConfig } from '@capacitor/cli';
import company from './company.config.json';

const config: CapacitorConfig = {
  appId: 'com.raseed.business',
  appName: company.companyName,
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: { launchShowDuration: 2000 }
  }
};
export default config;
