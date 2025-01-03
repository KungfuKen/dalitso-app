import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../../styles/globals.css";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';

// Example Content for a Blog Post (you can replace this with dynamic content)
const articleContent = {
    title: 'How I Built This Website (It Didn’t Take Just One Day)',
    image: '/NextJSImage.jpg', // Replace with your image path
    content: `
      <p> <strong>Firstly, I lied. It didn’t take a day—it took three hours per day over the course of three days.</strong></p>
      
      <p>Secondly, and more consequentially, I cheated. Here’s how:</p>
  
      <p>
        I started with a web app (called <a href="https://fashion-illustrator.vercel.app/" target="_blank" class="text-blue-500 hover:underline">Fashion Illustrator</a>) that I created last year. Instead of building everything from scratch, I modified it to create what you see now. 
      </p>
  
      <p>
        This app uses <strong>Next.js</strong> and <strong>Tailwind CSS</strong>—a combination I have to thank my friend (<a href="https://www.linkedin.com/in/mwelwa-chipimo-bab9b1176/" target="_blank" class="text-blue-500 hover:underline">Mwelwa</a>) for introducing me to. Shoutout to him for that!
      </p>
  
      <p>
        For deployment, I used <strong>Vercel</strong> in combination with <strong>GitHub</strong>—basically, fancy AWS.
      </p>
  
      <p>
        As for the email API service, I used <strong>Mailchimp</strong> to handle that.
      </p>
  
      <p>
        Most of the images on the site were created with <strong>Canva</strong>—I love Canva! And just for fun, my headshot was generated by AI and remove.bg. 
      </p>
    `
  };

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;  // slug will hold the article identifier

  return (
    <div className="w-full bg-gradient-to-b from-black via-black to-gray-900 p-8 mb-8 rounded-lg mt-20">
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

      {/* Blog Post Content */}
      <h1 className="text-white text-4xl font-bold mb-6 text-center">{articleContent.title}</h1>

      <div className="flex justify-center mb-6">
        <Image
          src={articleContent.image}
          alt={articleContent.title}
          width={300}
          height={200}
          className="rounded-xl"
        />
      </div>

      <div className="space-y-6 text-gray-200 text-lg p-10" dangerouslySetInnerHTML={{ __html: articleContent.content }} />

      {/* Back to Blog Link */}
      <div className="mt-8 text-center">
        <Link legacyBehavior href="/blog">
          <a className="text-sm font-semibold text-white bg-gradient-to-r from-gray-900 to-emerald-900 p-2 rounded-3xl hover:bg-gray-800 transition">
            ← Back to Blog
          </a>
        </Link>
      </div>

      {/* Analytics */}
      <Analytics />
    </div>
  );
}
