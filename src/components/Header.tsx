"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const UserMenu = dynamic(() => import("./UserMenu"), { ssr: false });

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <header className="flex justify-between items-center bg-white border-b border-slate-200 px-24 py-4">
      <div className="flex items-center gap-12">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <span className="text-2xl font-bold text-slate-900">Planes Parcial</span>
        </Link>

        <Link href={`/${locale}/plans`} className="text-lg font-semibold text-blue-700">
          Explorar Planes
        </Link>
      </div>

      <UserMenu key={pathname} />
    </header>
  );
}