/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
  },
  env: {
    PUBLIC_URL: '/',
  },
  images:{
    path:"/",
    domains:['mayxaydungmoi.com']
  },
  // env:{
  //   apiUrl:"https://nguyencuong12.github.io/xaydungmoi/"
  // }
}

module.exports = nextConfig
