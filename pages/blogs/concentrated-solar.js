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
As more renewable sources are added to the electricity grid, a major problem is emerging. The grid needs to maintain stable frequency to function effectively, this is achieved 
by ensuring the amount of power generated is equal to the amount of power consumed at all instances.

In a traditional power plant, a synchronous generator spins at the grid frequency (50 Hz or 60 Hz). The generator is subject to two forces: the mechanical torque produced by
the steam or water that physically spins the rotor in the generator and the electrical torque produced by the loads on the grid that draw power from the stator coils - the 
current drawn induces a magnetic field in the stator that opposes the rotation of the stator (Lenz Law) 

The problem is that renewable energy sources are intermittent; their power production is dependent on environmental
factors, i.e., sunlight hours or wind patterns. Additionally, in traditional power plants, spinning turbines absorb the deviations in grid frequency by spinning faster or slower,
while in renewables - that are connected to the grid via power electronics like inverters this ability is absent. 

## What is concentrated solar 

## How does it operate

## How can it help grid stability?

## Cost comparison to alternatives (e.g., batteries)

`
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200">
      <Head>
        <title>Concentrated Solar Examined</title>
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
              src="/noor-ouarzazate-city-0384.jpg" 
              alt="Concentrated Solar" 
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
