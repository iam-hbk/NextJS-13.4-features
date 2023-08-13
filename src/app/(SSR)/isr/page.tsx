import { UnsplashImage } from "@/models/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsInfoCircleFill } from "react-icons/bs";
export const metadata: Metadata = {
  title: "Incremental Static Regeneration - NextJS 13.4 Image Gallery",
};

//makes it dynamic
export const revalidate = 15;

export default async function DynamicPage() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    {
      // next:{revalidate:15}
    },
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="flex flex-col items-center bg-base-100 p-5">
      {/* Page info */}
      <div className=" my-5 flex flex-row items-center rounded-lg bg-info p-4">
        <BsInfoCircleFill size={65} />
        <p className="ml-5">
          This page uses <strong>Incremental Static Regeneration (ISR)</strong>.
          A new image is fecthed every 15 seconds (after refreshing the page)
          and then served from the cache for that duration. The time can be customized.
        </p>
      </div>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="mw-100  h-100 rounded-md shadow-sm "
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
