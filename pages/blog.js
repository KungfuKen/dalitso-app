// pages/blog.js

import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";
import NewsletterSubscribe from "./NewsletterSubscribe";
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

const articles = [
  {
    title: 'Wireless Mesh Networks Fully Explained',
    image: '/RoutingImage.avif', // Replace with an actual image path
    description: "A complete and concise guide to wireless mesh networks",
    link: '/blogs/wireless-mesh-networks-explained',
  },
  {
    title: 'How I Made this Website in One Day',
    image: '/NextJSImage.jpg', // Replace with an actual image path
    description: "Find out how this webapp was made and is hosted",
    link: '/blogs/website',
  },
  {
    title: 'Simulation of Simple Mesh Networks for IIOTs',
    image: '/MeshImage.png', // Replace with an actual image path
    description: "I am currently simulating mesh wireless network for underground mine connectivity",
    link: '/blogs/meshsim',
  },
];

export default function Blog() {
  return (
    <div className="w-full bg-gradient-to-r from-black to-emerald-900 p-8 mb-8 rounded-lg opacity-80 
    mt-20">
      <Head>
          <title>DTB insights</title>
        </Head>
      {/* Site banner */}
      <div className="w-screen">
         <Link href="/" legacyBehavior>
            <a>
              <Image
                className="top-3 left-3 absolute"
                src="/LogoDTB.png" // Replace with actual image path
                alt="Site Logo"
                width={150}
                height={70}
              />
            </a>
          </Link>

        <Link href="/#bottom" legacyBehavior>
          <a className="font-bold text-sm bg-gradient-to-r from-gray-900 to-emerald-900 absolute top-5 right-3 p-2 rounded-3xl opacity-80">
            Get in touch →
          </a>
        </Link>
      </div>
      
      <h1 className="text-white text-4xl font-bold mb-6 text-center">Blog Articles</h1>

      <div className="space-y-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-900 p-4 rounded-2xl hover:bg-gray-800 transition"
          >
            {/* Title Section (3/4 width) */}
            <div className="w-3/4 pr-2">
              <Link href={article.link} legacyBehavior>
                <a className="text-white text-2xl font-semibold">
                  {article.title}
                </a>
              </Link>
              <p className="text-gray-200 mt-2">{article.description}</p>
            </div>

            {/* Image Section (1/4 width) */}
            <div className="w-1/4 flex justify-end">
              <Image
                src={article.image}
                alt={article.title}
                width={200} // Adjust size as needed
                height={150} // Adjust size as needed
                className="rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
