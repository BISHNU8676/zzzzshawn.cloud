"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProjectDisplay() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const router = useRouter();

  const navigate = () => {
    router.push("/"); // Replace '/your-page' with the route you want to navigate to
  };

  return (
    <div className="w-full  relative z-50 ">
      <Button
        onClick={() => navigate()}
        className="mx-3 bg-white dark:bg-white hover:bg-white/70"
      >
        <ArrowLeft className="text-zinc-700 dark:text-dark-1 " />
      </Button>
      {/* <h2 className="pl-4 mx-auto text-xl md:text-5xl font-bold dark:text-neutral-800 text-neutral-200 font-sans">
        Take a look at my Work
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "A component library for React",
    title: "Nxttp",
    src: "/assets/nxttp.webp",
    link: "https://www.nxttp.cloud/",
    // github: "https://github.com/zzzzshawn/gitwrapped", 
    tags: ["Nextjs", "Tailwindcss", "Framer-Motion", "Shadcn"],
    content: <></>,
  },
  {
    category: "Landing Page",
    title: "Millennial Studio",
    src: "/assets/project1.png",
    link: "https://millennialstudio.vercel.app/",
    // github: "",
    tags: ["Nextjs", "Framer-Motion", "Shadcn", "Tailwindcss"],
    content: <></>,
  },
  {
    category: "Create Graffiti style images",
    title: "Griddy",
    src: "/assets/griddyy.png",
    link: "https://griddy-v1.vercel.app/",
    github: "https://github.com/zzzzshawn/Griddy",
    tags: ["Turborepo", "Cloudflare wrokers", "Honojs", "TanstackQuery", "Supabase", "Workers AI", "Nextjs"],
    content: <></>,
  },
  {
    category: "Share your photos here",
    title: "Socialzz",
    src: "/assets/socialzz.png",
    link: "https://socialzz.zzzzshawn.cloud/",
    github: "https://github.com/zzzzshawn/Socialzz",
    tags: ["Vitejs", "Tailwindcss", "Shadcn", "TanstackQuery", "Appwrite"],
    content: <></>,
  },
  {
    category: "Questionnaire Platform",
    title: "Rotōs",
    src: "/assets/project2.png",
    link: "https://rotos.zzzzshawn.cloud/",
    github: "https://github.com/zzzzshawn/Rotos",
    tags: ["Nextjs", "MongoDB", "Tailwindcss", "Shadcn", "Clerk Authentication"],
    content: <></>,
  },
  {
    category: "Minimap for ChatGPT",
    title: "Chart",
    src: "/assets/chart.png",
    link: "https://chromewebstore.google.com/detail/chart/fgmpanjdodgeeioebcngeamnijalodng",
    github: "https://github.com/zzzzshawn/Chart",
    tags: ["Chrome Extension", "Typescript", "Html2canvas"],
    content: <></>,
  },
  {
    category: "Ecommerce",
    title: "Zin Store",
    src: "/assets/show.png",
    link: "https://zinstore.vercel.app/",
    github: "https://github.com/zzzzshawn/Ecommerce-v1",
    tags: ["Vitejs", "MongoDB", "Framer-Motion", "Tailwindcss", "Shadcn"],
    content: <></>,
  },
  {
    category: "Portfolio Template",
    title: "Template",
    src: "/assets/template.png",
    link: "https://portfolio-templatev3.vercel.app/",
    github: "https://github.com/zzzzshawn/template-portfolio",
    tags: ["Vitejs", "Framer-Motion", "Tailwindcss", "Shadcn"],
    content: <></>,
  },
  {
    category: "Web3 wallet",
    title: "Pandora",
    src: "/assets/pandora.png",
    link: "https://pandorasvault.zzzzshawn.cloud/",
    github: "https://github.com/zzzzshawn/Pandora",
    tags: ["Nextjs", "Framer-Motion", "Tailwindcss", "Shadcn", '@Solana/web3.js', "Ethers"],
    content: <></>,
  },
];
