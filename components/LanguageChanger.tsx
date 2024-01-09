"use client";

// these are wrapped with stuff from i18nexus, NOT de ones from next.js
import { useRouter, usePathname } from "@/navigation";

export default function LanguageChanger({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en-us">English</option>
      <option value="es">Spanish</option>
    </select>
  );
}
