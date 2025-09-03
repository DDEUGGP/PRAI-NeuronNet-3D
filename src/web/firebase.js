import { initializeApp } from 'firebase/app';

const config = {
  apiKey: 'your-key',
  authDomain: 'your-domain',
  projectId: 'your-id'
};

export const app = initializeApp(config);
