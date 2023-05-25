export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `${process.env.VERCEL_URL}`;

  return base_url;
};
