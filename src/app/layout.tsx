import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Footer, Navbar } from "./components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nhà phân phối máy móc giá tốt tại VN - Máy Xây Dựng Mới",
  keywords: "máy xây dựng, bộ đồ nghề, dụng cụ sửa chữa",
  description:
    "Máy Xây Dựng Mới chuyên cung cấp thiết bị dụng cụ máy móc chính hãng như Makita, Bosh, PanaPro...Giao hàng nhanh, bảo hành nhanh...là đơn vị cung cấp uy tín trên thị trường.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="body">{children}</div>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
