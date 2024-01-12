import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const MotionLink = motion(Link);

const CustomLink = ({ href, title, className = "" }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          asPath === href ? "w-full" : "w-0"
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, toggle, className = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`relative group text-light dark:text-dark ${className}`}
      onClick={handleClick}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-light absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}>
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8">
      {/* ---------------------------------- MENU BUTTON */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />

        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>

      {/* ---------------------------------- DESKTOP MENU */}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex gap-4">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/articles" title="Articles" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-4">
          <MotionLink
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <TwitterIcon className="w-6" />
          </MotionLink>
          <MotionLink
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <GithubIcon className="w-6" />
          </MotionLink>
          <MotionLink
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <LinkedInIcon className="w-6" />
          </MotionLink>
          <MotionLink
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <PinterestIcon className="w-6" />
          </MotionLink>
          <MotionLink
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <DribbbleIcon className="w-6" />
          </MotionLink>

          <button
            className={`flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() =>
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
            }>
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {/* ---------------------------------- MOBILE MENU */}

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="z-30 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex flex-col gap-2 justify-center items-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap gap-4 mt-5 sm:gap-2">
            <MotionLink
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}>
              <TwitterIcon className="w-[30px]" />
            </MotionLink>
            <MotionLink
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}>
              <GithubIcon className="w-[30px] bg-light rounded-full dark:bg-dark" />
            </MotionLink>
            <MotionLink
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}>
              <LinkedInIcon className="w-[30px]" />
            </MotionLink>
            <MotionLink
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}>
              <PinterestIcon className="w-[30px]" />
            </MotionLink>
            <MotionLink
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}>
              <DribbbleIcon className="w-[30px]" />
            </MotionLink>

            <button
              className={`flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={() =>
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
              }>
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
