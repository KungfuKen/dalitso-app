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
when the amount of power generated is equal to the amount of power consumed at all instances. In a traditional power plant, a synchronous generator spins at the grid frequency (50 Hz or 60 Hz) 
can absorb disturbances since the spinning rotor in the generator can either absorb excess energy or release energy during a deficit by changing its rotational speed. 

The problem is that renewable energy sources have no large spinning rotors that can absorb grid disruptions. Thus, grid disruptions are more difficult to deal with in grid networks 
that consist of a large number of renewable sources. Concentrated solar, however, is different to most renewable sources in that it utilises a generator, thus providing 
the benefits to grid stability that traditional power plants offer. It can also store significant amounts of energy and thus can still generate power when environmental conditions are unfavourable. 

This article explores the operation of concentrated solar plants and how it can help aid grid stability as the energy transition takes hold. 

## What is concentrated solar 

Concentrated solar uses an array of mirrors called heliostats to focus sunlight onto a receiver, generating high amounts of thermal energy that is used to drive a turbine and 
generate electricity similar to how a traditional thermal power plant operates. 

![Concentrated Solar Diagram](/Conc-solar-diagram.png)

The amount of energy a concentrated solar plant can produce is determined by how much thermal energy is generated, which is in turn primarily determined by how much
sunlight in direct beams a site receives - this is called Direct Normal Irradiance (DNI). 

## How can it help grid stability?

When the mechanical torque produced by the steam or water that physically spins the rotor in the generator exceeds the electrical torque produced by the loads on the grid, 
i.e., more power is produced than consumed, the net torque causes the rotor to speed up, absorbing the excess energy and increasing frequency. When the power consumed is 
greater than power production, grid frequency reduces via the same mechanism.

$$
T_{\text{mechanical}} - T_{\text{electrical}} \propto \frac{df}{dt}
$$


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
          content="General overview of concentrated solar."
        />
        <meta name="keywords" content="Solar, Renewable Energy, Technology" />
        <meta name="author" content="DTB Insights" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Overview of Concentrated Solar" />
        <meta
          property="og:description"
          content="General overview of concentrated solar."
        />
        <meta property="og:image" content="/YangWangU9.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dtbinsights.com/blogs/concentrated-solar" />
      </Head>

      <main className="mx-auto w-full max-w-4xl px-6 py-12">
        <article className="font-mono text-sm leading-relaxed text-zinc-300">

          <h1 className="mb-10 text-center text-2xl font-bold leading-tight text-white">
            {articleContent.title}
          </h1>

          <div className="mb-10 flex justify-center">
           <Image 
              src="/conc_solar_wallpaper.jpg" 
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
