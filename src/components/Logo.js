import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-[#ff4081] text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#ff4081",
            "#f8bbd0",
            "#f48fb1",
            "#f06292",
            "#ec407a",
            "#f8bbd0",
            "#ff80ab",
            "#ff4081",
            "#f06292",
            "#f50057",
          ],
          transition: { duration: 2, repeat: Infinity },
        }}>
        PL
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
