import { UnsplashImage } from "@/models/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsInfoCircleFill } from "react-icons/bs";
import wretch from "wretch";

export const metadata: Metadata = {
  title: "Dynamic Fetching - NextJS 13.4 Image Gallery",
};

//makes it dynamic
export const revalidate = 0;

const api = wretch("https://api.unsplash.com")
  .errorType("json")
  .resolve((r) => r.json());

export default async function DynamicPage() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    {
      // cache:"no-cache"/"no-store"
      // next:{revalidate:0}
    },
  );

  // const r = await api.get(`/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,)

  // return <div>Res:{JSON.stringify(r)}</div>;
  const image: UnsplashImage = await response.json();


  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="flex flex-col items-center bg-base-100 p-5">
      {/* Page info */}
      <div className=" my-5 flex flex-row items-center rounded-lg bg-info p-4">
        <BsInfoCircleFill size={65} />
        <p className="ml-5">
          This page <strong>fetches data dynamically</strong>. Every time you
          refresh the page, you get a new image from the Unsplah API.
        </p>
      </div>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="min-w-[100px]  h-full rounded-md shadow-sm "
      />{" "}
      by{" "}
      <Link
        href={`/users/${image.user.username}`}
        className="link-primary link"
      >
        {image.user.username}
      </Link>
    </div>
  );
}
