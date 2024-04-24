/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
 
  images:{
    domains:['mayxaydungmoi.com']
  },
  // env:{
  //   apiUrl:"https://nguyencuong12.github.io/xaydungmoi/"
  // }

  env: {
    // API_URL: "https://api.sashimeomeo.com",
    API_URL: "https://nguyencuong12.github.io/xaydungmoi/",
  },
}

module.exports = nextConfig
