import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-0 flex items-center justify-between lg:flex-col">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <Link href="/" target="_blank" className="lg:py-2">
          Built with 💗 by SaninePink
        </Link>

        <Link href="/" target="_blank">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
