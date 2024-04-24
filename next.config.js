/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
 
  reactStrictMode: true,
  experimental: {
  },
  images:{
    path:"/",
    domains:['mayxaydungmoi.com']
  }
}

module.exports = nextConfig
