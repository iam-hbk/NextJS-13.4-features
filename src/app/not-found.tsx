import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-base-100 flex flex-col content-center h-full w-full items-center">
      <h1 className="text-lg">Not found</h1>
      <p>Page not found !</p>
      <Link className="btn btn-primary" href={"/"}>
        Go back Home
      </Link>
    </div>
  );
}
//Error/Loading/not-found pages can also be created in specific route folders
//To have a customized page for the rooute