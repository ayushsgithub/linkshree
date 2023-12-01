import Image from "next/image";
import data from "@/data.json";
import { redirect } from "next/navigation";
import LinkCard from "./components/LinkCard";
import TwitterIcon from "./components/TwitterIcon";
import GithubIcon from "./components/GithubIcon";

export default async function Home() {

  if (!data) {
    redirect("https://linktr.ee/selenagomez");
  }

  return (
    <div className="flex items-center flex-col mx-auto max-w-2xl justify-center mt-20 mb-10 md:mt-14 px-8">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <div className="flex space-x-1 mt-4 mb-8 items-center">
        <h1 className="font-bold  text-xl text-black">{data.name}</h1>
        <Image width={16} height={16} alt="tick" src={data.verified} />
      </div>

      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.title.includes("twitter") ? (
              <TwitterIcon />
            ) : social.title.includes("github") ? (
              <GithubIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
