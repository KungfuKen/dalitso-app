'use client'

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";
import NewsletterSubscribe from "./NewsletterSubscribe";
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="bg-zinc-900 min-h-screen overflow-y-auto flex-col justify-center items-center">
        <Head>
          <title>Dalitso Banda | Engineering Analysis</title>
          <meta name="description" content="Dalitso T Banda - An Electrical and Computer Engineer with hands on experience working on complex systems writing technical analysis of cutting edge engineering systems" />
          <meta name="keywords" content="Electrical Engineering, Semiconductors" />
          <meta property="og:title" content="DTB Insights | In depth analysis of engineering systems" />
          <meta property="og:description" content="In depth analysis of engineering systems" />
          <meta property="og:image" content="https://dtbinsights.com/Logo.png" />
          <meta property="og:url" content="https://dtbinsights.com/" />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="DTB Insights | Technical analysis of cutting edge engineering"/>
          <meta name="twitter:description" content="Dalitso T Banda - An Electrical and Computer Engineer with hands on experience working on complex systems writing technical analysis of cutting edge engineering systems"/>
          <meta name="twitter:image" content="https://dtbinsights.com/Logo.png"/>

           {/* Structured Data (JSON-LD) */}
           <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "DTB Insights",
                "url": "https://dtbinsights.com/",
                "logo": "https://dtbinsights.com/Logo.png",
                "description": "Dalitso T Banda - An Electrical and Computer Engineer with hands on experience working on complex systems writing technical analysis of cutting edge engineering systems",
                "sameAs": [
                  "https://www.linkedin.com/in/dalitso-banda-6a5435189",
                  "https://wa.me/27769547017"
                ]
              })
            }}
          />
        </Head>


        <Analytics />

        {/* Site banner*/}
        <div className="w-screen">
          <Image
              className="top-5 left-3 absolute"
              src="/LogoDTB.png" // 
              alt="Site Logo"
              width={150}
              height={70}
            />
          <a href="#bottom" className="font-bold text-sm bg-zinc-900 border-2 border-white absolute top-5 right-4 p-2 rounded-3xl opacity-80">
            Get in touch
          </a>
        </div>



        {/* Laptop: Heading and Site Logo */}

        <div className="px-6 md:px-16 pt-28 md:pt-12">

          <div className="text-left p-4 md:p-16">

            {/* Openning sentence describing app */}
            <div className="flex items-center justify-center">
              
              <div className="w-1/3">
                <p className="text-gray-200 font-mono">My name is</p>
                <h1 className="text-5xl font-serif text-gray-200 font-bold text-center">
                        Dalitso T Banda
                </h1>      
              </div>

              <div className="w-2/3">
                <p className="text-gray-200 font-mono text-sm">
                  — Electrical and Computer Engineer, University of Cape Town [Alma Mater]. 
                </p>
                <p className="text-gray-200 font-mono text-sm">
                  On DTB Insights, I write in-depth technical analysis of various engineering systems across the electrical domain. 
                  My background is in telecommunications infrastructure and these days I write technical analysis focused on semiconductor 
                  technology and clean energy systems — two areas I think matter immensely in the next decade of engineering.
                </p>
              </div>
            </div>

            <div>
              <a href="mailto:dalitso.banda@dtbinsights.com"
              className="text-gray-200 font-sans pt-3 text-sm font-italic hover:text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  dalitso.banda@dtbinsights.com
	            </a>
              
              <p className="text-gray-200 font-mono pt-3 text-sm font-semibold"> 
                  3 Random facts about me 
              </p>
              <p className="text-gray-200 font-mono pl-5 text-sm">
                 1. I am music obsessed [Checkout this playlist I made] 
              </p>
              <p className="text-gray-200 font-mono pl-5 text-sm">
                 2. I like to workout [11 sec 100m PB & Calisthenics]   
              </p>
              <p className="text-gray-200 font-mono pl-5 text-sm">
                 3. I make artsy videos [Here is a sample]
              </p>
            </div>
            <div className="flex pt-3">
              <p className="text-gray-200 font-mono text-sm">
                Here is a selection of technical analysis and projects that I have published and are in progress.
              </p>
            </div>
            
            <div className="flex items-stretch justify-center mt-5 md:flex-row flex-col">
              <div className="border border-white m-3 rounded-3xl mr-2 md:w-1/2 flex flex-col h-100 hover:scale-[1.02] hover:border-green-500 transition-all duration-300">
                  <video className="w-full object-cover rounded-t-3xl" autoPlay loop muted>
                    <source src="/U9.mp4" type="video/mp4" />
                  </video>
                  <p className="text-gray-200 font-mono text-lg font-bold m-2">
                    Engineering 500 KM/H - A technical analysis of the electric powertrain that made BYD's near
                    500 km/h world record possible.
                  </p>
                  <p className="text-gray-200 font-mono text-sm m-2">
                    This article analyses how the Yangwang U9 hypercar's e^4 electric drivetrain is able to
                    propel it to nearly 500 km/h and possibly beyond.              
                  </p>
              </div>

              <div className="border border-white m-3 rounded-3xl md:w-1/2 flex flex-col h-100 hover:scale-[1.02] hover:border-green-500 transition-all duration-300">              
                  <img 
                    src="/MeshNetwork.jpeg" 
                    alt="Mesh Network" 
                    className="w-full object-cover rounded-t-3xl"
                  />
                  <p className="text-gray-200 font-mono text-lg font-bold m-2">
                    A Complete Analysis of Mesh Networks
                  </p>
                  <p className="text-gray-200 font-mono text-sm m-2">
		                A Wireless Mesh Network (WMN) is a network where all (or most) devices are connected to each other. Essentially, each device (cell pho
                    ne, traffic light, laptop, car, sensor etc.) in a mesh network serves as a mini-cell tower or router, wirelessly routing and 
                    repeating signals received.
                  </p>
              </div>  
            </div>
            
              {/* @Laptop: Socials and Footer */}
            <div className="text-left mt-5 "> 

                {/* Contact Card */}
                <p className="text-gray-200 font-mono font-bold">
                      Socials 
                  </p>
                  <div className="flex items-centre "> 

                  {/* LinkedIn Contact */}
                  <div className="flex items-center ml-4">
                    <a
                      href="https://www.linkedin.com/in/dtbanda"
                      className="">
                      <Image
                        className=""
                        src="/LinkedIn_Icon.png" // 
                        alt="Site Logo"
                        width={25}
                        height={11}
                      />
                    </a>
                  </div>

                  {/* Twitter Contact */}
                  <div className="flex items-center ml-8">
                    <a
                      href="https://www.twitter.com/dtbanda"
                      className="">
                      <Image
                        className="rounded-3xl"
                        src="/Twitter.jpg" // 
                        alt="Site Logo"
                        width={24}
                        height={10}
                      />
                    </a>
                  </div>

                  {/*Substack Contact */}
                  <div className="flex items-centre ml-8">
                    <a
                      href="https://substack.com/dtbanda"
                      className="">
                      <Image
                        className="rounded-3xl"
                        src="/Substack.png" // 
                        alt="Site Logo"
                        width={24}
                        height={10}
                      />
                    </a>
                  </div>

                  {/* WhatsApp Contact */}
                  <div className="flex items-centre ml-8">
                    <a
                      href="https://wa.me/27769547017"
                      className="">
                      <Image
                        className=""
                        src="/WhatsApp_Icon.png" // 
                        alt="Site Logo"
                        width={25}
                        height={11}
                      />
                    </a>
                  </div>
        </div>


                {/*footer*/}
                <div id="bottom" className="mt-3">
                  
                  <p className="text-gray-200 font-mono text-xs inline-block">
                  Made by Dalitso Tenthani Banda</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block ml-2 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <p className="text-gray-200 font-mono text-xs inline-block">Last updated June 2026, Lusaka.</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}
