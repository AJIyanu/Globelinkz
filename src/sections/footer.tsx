import { navigation } from "@/lib/utils";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gray-800 gap-10 p-10 text-white w-full flex flex-col items-center justify-center lg:bg-transparent">
      <div className="flex gap-7">
        {navigation.map((item, idx) => (
          <a href={item.href} key={idx} className="text-white">
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex gap-7">
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <Twitter />
        </a>
        <a href="#">
          <Youtube />
        </a>
      </div>
      <div>
        <p>
          © 2025 Globelinkz{" "}
          <span className="hidden sm:inline">Full Digital Service Agency</span>
        </p>
      </div>
    </div>
  );
}
