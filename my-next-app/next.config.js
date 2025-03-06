/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "standalone", // Optional but helps for deployment
   experimental: {
     appDir: true, // Ensure App Router is enabled
   },
 };
 
 module.exports = nextConfig;
 