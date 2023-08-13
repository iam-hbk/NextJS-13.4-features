import { UnsplashUser } from "@/models/unsplash-user";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BsInfoCircleFill } from "react-icons/bs";
// import { cache } from "react";

interface PageProps {
  params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUser> {
  const res = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  );
  if (res.status === 404) notFound();
  return await res.json();
}

/* When not using the fecth function to make http requests, you need to manually deduplicate the requests to avoid wastage 
by caching the request function
*/
// const getUserCached = cache(getUser);

export async function generateMetadata({
  params: { username },
}: PageProps): Promise<Metadata> {
  const user: UnsplashUser = await getUser(username);

  return {
    title: `${user.first_name} ${user.last_name} - NextJS 13.4`,
  };
}

export default async function Page({ params: { username } }: PageProps) {
  const user: UnsplashUser = await getUser(username);
  return (
    <div className="flex h-[65vh] w-full flex-col items-center justify-start">
      {/* Page info */}
      <div className=" my-5 flex flex-row items-center rounded-lg bg-info  p-4">
        <BsInfoCircleFill size={65} />
        <p className="ml-5 ">
          This profile page uses <strong>generateMetadata</strong> to set the{" "}
          <strong>page title</strong> dynamically from the API response.
        </p>
      </div>

      <div className="mb-5 flex flex-row items-center gap-10 rounded-md bg-slate-300 p-4 shadow-lg">
        {user.profile_image?.large ? (
          <Image
            src={user.profile_image?.large}
            alt={user.username}
            width={128}
            height={128}
            className="rounded-full"
          />
        ) : null}
        <div>
          <h1 className="capitalize">{user.username}</h1>
          <p>First name: {user.first_name}</p>
          <p>Last name: {user.last_name}</p>
          <a
            className="link-primary link"
            href={`https://unsplash.com/${user.username}`}
            target="_blank"
          >
            Unsplash profile
          </a>
        </div>
      </div>
    </div>
  );
}
