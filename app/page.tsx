import Image from 'next/image'
import data  from "@/data.json"
// import { get } from '@vercel/edge-config';
import { redirect } from 'next/navigation';
import LinkCard from './components/LinkCard';
import TwitterIcon from './components/TwitterIcon';
import GithubIcon from './components/GithubIcon';

interface Data {
  name: string;
  avatar: string;
  links: Link[];
}
interface Link {
  href: string;
  title: string;
  image?: string;
}

export default async function Home() {

  // const data: Data | undefined = await get('linktree');
  // const data = null

  if (!data) {
    // not working yet https://github.com/vercel/next.js/issues/44232
    redirect('https://linktr.ee/selenagomez');
  }

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
    <Image
      priority
      className="rounded-full"
      alt={data.name}
      src={data.avatar}
      width={96}
      height={96}
    />
    <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
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
          {social.title.includes('twitter') ? (
            <TwitterIcon />
          ) : social.title.includes('github') ? (
            <GithubIcon />
          ) : null}
        </a>
      ))}
    </div>
  </div>
  )
}