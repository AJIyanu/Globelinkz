import Link from "next/link";
import { whatsappUrl } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <Link href={whatsappUrl} aria-label="Chat with GlobeLinkz on WhatsApp" className="fixed bottom-7 right-7 z-[600] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25D366] text-[26px] shadow-[0_8px_32px_rgba(37,211,102,.42)] transition hover:scale-110">
      💬
    </Link>
  );
}
