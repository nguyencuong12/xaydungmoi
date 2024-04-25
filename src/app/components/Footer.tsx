import React from "react";
import { FooterData } from "../data";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="footer-top bg-white min-h-[350px]">
        <div className="footer-content w-9/12 mx-auto py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FooterData.map((footerItem, index) => {
            return (
              <ul key={index}>
                <h1 className="font-semibold text-xl"> {footerItem.title}</h1>
                {footerItem.subItems.map((footerSubItem, index2) => {
                  return (
                    <li key={index2} className="py-2 hover:text-red-500 text-sm">
                      <Link href={footerSubItem.href}>{footerSubItem.title}</Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
      <div className="footer-bottom bg-[#2f2f87] text-white">
        <div className="footer-content w-9/12 py-4 mx-auto flex flex-col gap-2 text-center text-sm">
          <p>© 2024 Máy Xây Dựng Mới</p>
          <p>Bản quyền thuộc về Công Ty TNHH TM Dụng Cụ Tổng Hợp. GPDKKD: Mã số thuế: 0316806043 do sở KH & ĐT TP.HCM cấp ngày 14/04/2021.</p>
          <p>Showroom: 287 Tây Thạnh, P.Tây Thạnh, Q.Tân Phú, TP.Hồ Chí Minh. Điện thoại: 0973 926 139. Email: mayxaydungmoi.co@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
