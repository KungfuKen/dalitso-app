import Head from "next/head";
import Image from "next/image";
import "../../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

const ReactMarkdown = dynamic(() => import("react-markdown"), {
  ssr: false,
});

const articleContent = {
  title: "Concentrated Solar: A Case for the World's Most Beautiful Power Plants",

  content: String.raw`
## Introduction 

## What is concentrated solar 

## How does it operate

## How can it help grid stability?

## Cost comparison to alternatives (eg Batteries)

`
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200">
      <Head>
        <title>YangWang U9 Xtreme Analysis</title>
        <meta
          name="description"
          content="Technical analysis of the YangWang U9 Xtreme electric powertrain."
        />
        <meta name="keywords" content="YangWang U9 Xtreme, Electric Vehicle, EV, Technology" />
        <meta name="author" content="DTB Insights" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="YangWang U9 Xtreme Analysis" />
        <meta
          property="og:description"
          content="Technical analysis of the YangWang U9 Xtreme electric powertrain."
        />
        <meta property="og:image" content="/YangWangU9.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dtbinsights.com/blogs/yangwang-u9-analysis" />
      </Head>

      <main className="mx-auto w-full max-w-4xl px-6 py-12">
        <article className="font-mono text-sm leading-relaxed text-zinc-300">

          <h1 className="mb-10 text-center text-2xl font-bold leading-tight text-white">
            {articleContent.title}
          </h1>

          <div className="mb-10 flex justify-center">
            <Image
              src="/U9CoverImage.png"
              alt="YangWang U9 Xtreme"
              width={400}
              height={200}
              className="rounded-lg"
              priority
            />
          </div>

          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h2: ({ children }) => (
                <h2 className="mt-12 mb-5 text-base font-bold text-amber-400">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="mt-8 mb-4 text-sm font-bold text-amber-300">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="mb-5 text-sm leading-7 text-zinc-300">
                  {children}
                </p>
              ),

              ul: ({ children }) => (
                <ul className="mb-6 list-disc space-y-2 pl-6 text-sm text-zinc-300">
                  {children}
                </ul>
              ),

              li: ({ children }) => (
                <li>{children}</li>
              ),

              strong: ({ children }) => (
                <strong className="font-bold text-white">
                  {children}
                </strong>
              ),

              code: ({ children }) => (
                <code className="font-mono text-sm text-zinc-200">
                  {children}
                </code>
              ),
            }}
          >
            {articleContent.content}
          </ReactMarkdown>
        </article>
      </main>

      <Analytics />
    </div>
  );
}
