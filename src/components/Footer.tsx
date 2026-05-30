import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 flex justify-center items-center px-4 py-8 text-on-surface-variant font-label text-sm border-t border-outline-variant/10">
      <div className="flex gap-6">
        <Link href="#" className="hover:text-primary transition-colors">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
