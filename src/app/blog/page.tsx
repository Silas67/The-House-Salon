"use client";
import { blogs } from "@/components/constant/index";
import useLenis from "@/hooks/useLenis";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

const Blog = () => {
  useLenis();
  return (
    <main className="lg:w-full overflow-hidden relative bg-background">
      {/* Hero */}
      <div className="min-h-[20vh] w-full text-white  p-8 bg-primary space-y-28">
      <div className="max-w-4xl flex items-start flex-col mt-28 Stardom-font gap-2">
        <h1 className="text-6xl max-sm:text-4xl">
          Blog
        </h1>
      </div>
    </div>

      {/* Blogs */}
      <section className="py-12 w-full flex flex-col items-center justify-center gap-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-[300px] rounded-[10px] overflow-hidden bg-white shadow-md transition-transform duration-300 group scale-[0.95]"
            >
              {/* Image */}
              <div className="h-[250px] w-full overflow-hidden relative">
                <Image
                  src={blog.image}
                  alt="blog image"
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <Link href={`/blog/${blog.title}`}>
                <div className="p-4 space-y-2 text-foreground">
                  <h1 className="text-xl font-bold">{blog.title}</h1>
                  <div className="text-[#5c5c5c] text-sm flex items-start gap-1">
                    <CiLocationOn className="mt-[2px]" />
                    <p className="line-clamp-2">{blog.excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>

        <motion.div className="text-muted-foreground hover:scale-[0.9] transition-all duration-500 cursor-pointer ">
          See More
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Blog;