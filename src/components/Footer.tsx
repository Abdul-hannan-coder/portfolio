import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 flex flex-col md:flex-row justify-between items-center px-4 py-8 text-on-surface-variant font-label text-sm border-t border-outline-variant/10">
      <p>© 2024 Developer Portfolio. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
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
