
                
        {/* MOBILE CONTENT */}
        <div className="px-6 py-8 pt-28 block md:hidden">

          {/* Intro */}
          <p className="text-gray-200 font-mono text-sm">
            My name is
          </p>

          <h1 className="text-3xl font-serif text-gray-200 font-bold mt-2">
            Dalitso T Banda
          </h1>

          <p className="text-gray-200 font-mono text-sm mt-4">
            Electrical and Computer Engineer, University of Cape Town [Alma Mater].
          </p>

          {/* Email */}
          <div className="">
            <a
              href="mailto:dalitso.banda@dtbinsights.com"
              className="text-gray-200 text-sm hover:text-green-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              dalitso.banda@dtbinsights.com
            </a>
          </div>

          <p className="text-gray-200 font-mono text-sm mt-2">
            On DTB Insights, I write in-depth technical analysis of various
            engineering systems across the electrical domain. My background is in
            telecommunications infrastructure and these days I write technical
            analysis focused on semiconductor technology and clean energy systems.
          </p>

          {/* Random Facts */}
          <div className="mt-4">
            <p className="text-gray-200 font-mono font-semibold">
              3 Random facts about me
            </p>

            <p className="text-gray-200 font-mono text-sm mt-2">
              1. I am music obsessed [Checkout this playlist I made]
            </p>

            <p className="text-gray-200 font-mono text-sm">
              2. I like to workout [11 sec 100m PB & Calisthenics]
            </p>

            <p className="text-gray-200 font-mono text-sm">
              3. I make artsy videos [Here is a sample]
            </p>
          </div>

          {/* Projects */}
          <div className="mt-8 space-y-4">

            <div className="border border-white p-4 rounded-3xl hover:scale-[1.02] hover:border-green-500 transition-all duration-300">
              <p className="text-gray-200 font-mono font-bold">
                Engineering 500 KM/H
              </p>

              <p className="text-gray-200 font-mono text-sm mt-2">
                A technical analysis of the engineering systems that enable the
                500 KM/H speed of the Yangwang U9 extreme hypercar.
              </p>
            </div>

            <div className="border border-white m-4 rounded-3xl hover:scale-[1.02] hover:border-green-500 transition-all duration-300">
              <img 
                src="/UrbanNetworks.png" 
                alt="Mesh Network" 
                className="w-full object-cover rounded-t-3xl"
              />
              <p className="text-gray-200 font-mono font-bold m-2">
                A Complete Analysis of Mesh Networks
              </p>
              <p className="text-gray-200 font-mono text-sm m-2">
		            A Wireless Mesh Network (WMN) is a network where all (or most) devices are connected to each other. Essentially, each device (cell pho
	              ne, traffic light, laptop, car, sensor etc.) in a mesh network serves as a mini-cell tower or router, wirelessly routing and 
	              repeating signals received.
              </p>
	    </div>
          </div>

          {/* Socials */}
          <div className="mt-8">

            <p className="text-gray-200 font-mono font-bold mb-4">
              Socials
            </p>

            <div className="flex gap-6">

              <a href="https://www.linkedin.com/in/dtbanda">
                <Image
                  src="/LinkedIn_Icon.png"
                  alt="LinkedIn"
                  width={25}
                  height={25}
                />
              </a>

              <a href="https://www.twitter.com/dtbanda">
                <Image
                  src="/Twitter.jpg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="rounded-3xl"
                />
              </a>

              <a href="https://substack.com/dtbanda">
                <Image
                  src="/Substack.png"
                  alt="Substack"
                  width={24}
                  height={24}
                  className="rounded-3xl"
                />
              </a>

              <a href="https://wa.me/27769547017">
                <Image
                  src="/WhatsApp_Icon.png"
                  alt="WhatsApp"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div id="bottom" className="mt-10">
            <p className="text-gray-200 font-mono text-xs inline-block">
              Made by Dalitso Tenthani Banda
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block ml-2 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <p className="text-gray-200 font-mono text-xs mt-2 inline-block">
              Last updated June 2026, Lusaka.
            </p>
          </div>

        </div>
