const dev = process.env.NODE_ENV !== "production";
console.log("VERCEL_URL", process.env.VERCEL_URL);
export default dev
  ? "http://localhost:3000"
  : "https://" + process.env.VERCEL_URL;
