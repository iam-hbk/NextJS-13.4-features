"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

//Error/Loading/not-found pages can also be created in specific route folders
//To have a customized page for the rooute 

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Error😥</h1>
      <div>Something went wrong: {error.name}</div>
      <p className="bg-base-100 text-error">{error.message}</p>
    </div>
  );
}
