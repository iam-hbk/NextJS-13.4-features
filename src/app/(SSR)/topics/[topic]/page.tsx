import { UnsplashImage } from "@/models/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

interface TopicPageProps {
  params: { topic: string };
  //object of {key:value} or array of string or undefined
  //   searchParams: { [key: string]: string | string[] | undefined };
}

/* If you don't want the results to be cached you can use this */
//export const revalidate = 0;

/* If you don't want to allow any params other than the ones in the generateStaticParams array you can do this */
// export const dynamicParams = false

export function generateStaticParams() {
  return ["food", "coding", "Christ"].map((topic) => ({ topic }));
}

export function generateMetadata({ params: { topic } }: TopicPageProps):Metadata {
return {
    title: `${topic} - NextJS 13.4 Image Gallery`
}
}

export default async function TopicPage({ params: { topic } }: TopicPageProps) {
  const reponse = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  );
  const images: UnsplashImage[] = await reponse.json();

  return (
    <div className="flex flex-col items-center">
      {/* Page info */}
      <div className=" my-5 flex flex-row items-center rounded-lg bg-info p-4">
        <BsInfoCircleFill size={65} />
        <p className="ml-5">
          This page uses <strong>generateStaticParams</strong> to render and
          cache static pages at build time, even though the URL has a dynamic
          paramter. Pages that are not included in generateStaticParams will be
          fetched & rendered on first access and then{" "}
          <strong>cached for subsequent requests</strong> (this can be
          disabled). It{"'"}s like doing dynamic rendering once then cache it
          forever...
        </p>
      </div>
      <h1 className="m-2 mb-4 text-2xl font-bold capitalize">{`Results for " ${topic}"`}</h1>
      <div className="flex flex-row flex-wrap gap-5">
        {images.map((image) => (
          <Image
            src={image.urls.raw}
            width={250}
            height={250}
            alt={image.description}
            key={image.urls.raw}
            className="m-1 rounded-md object-cover"
          />
        ))}
      </div>
    </div>
  );
}
