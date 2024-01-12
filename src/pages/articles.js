import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Article1 from "../../public/images/articles/create loading screen in react js.jpg";
import Article3 from "../../public/images/articles/create modal component in react using react portals.png";
import Article2 from "../../public/images/articles/pagination component in reactjs.jpg";

const FramerImage = motion(Image);

export const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl border-r-8 border-b-8 dark:bg-dark dark:border-light">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2">{summary}</p>

      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}{" "}
      </span>
    </li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    x.set(-10);
  };

  const handleMouseLeave = (e) => {
    imgRef.current.style.display = "none";
    x.set(0);
    x.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>

      <FramerImage
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        ref={imgRef}
        src={img}
        alt={title}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:!mg-8 sm:!text-6xl xs:!text-4xl"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={Article1}
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React"
              summary="Learn how to create stunning loading screens in React with 3 different methods. Improve the user experience. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="10 min read"
              link="/"
              img={Article2}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mb-16 mt-32">
            All Articles
          </h2>

          <ul>
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Article3}
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
