const ENV = process.env.NODE_ENV;

export const API_ENDPOINT = (() => {
  const apis: Record<typeof ENV, string> = {
    development: "http://localhost:3000",
    production: "https://api.example.com",
    test: "https://api.example.com",
  }
  return apis[ENV]
})();
