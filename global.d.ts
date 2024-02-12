declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      AWS_ACCESS_KEY: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_REGION: string;
      AWS_BUCKET_NAME: string;
      AUTH_SECRET: string;
    }
  }
  interface Window {}
}

export {};
