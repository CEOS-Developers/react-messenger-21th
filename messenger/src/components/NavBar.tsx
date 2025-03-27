import { useLocation, useNavigate } from "react-router-dom";

import home from "../assets/home_nav.svg?react";
import neighbor from "../assets/neighbor_nav.svg?react";
import subscribe from "../assets/subscribe_nav.svg?react";
import popular from "../assets/popular_nav.svg?react";
import news from "../assets/news_nav.svg?react";
import chat from "../assets/chat_nav.svg?react";

const NavBar = () => {
  const location = useLocation();
  const nav = useNavigate();

  const navItems = [
    { label: "카페홈", icon: home, path: "/home" },
    { label: "이웃", icon: neighbor, path: "/neighbor" },
    { label: "구독", icon: subscribe, path: "/subscribe" },
    { label: "인기글", icon: popular, path: "/popular" },
    { label: "내소식", icon: news, path: "/news" },
    { label: "채팅", icon: chat, path: "/" },
  ];

  return (
    <nav className="fixed right-0 bottom-0 left-0 flex h-[5.25rem] items-start justify-center gap-[2.0625rem] bg-white px-5 pt-2 pb-0 shadow-[0px_-10px_20px_0px_rgba(0,0,0,0.03)]">
      {navItems.map((item, i) => (
        <button
          key={i}
          onClick={() => nav(item.path)}
          className={`flex flex-col items-center gap-[0.124rem] text-xs font-medium ${location.pathname === item.path ? "text-green-400" : "text-gray-300"}`}
        >
          <item.icon className="h-6 w-6" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
export default NavBar;
