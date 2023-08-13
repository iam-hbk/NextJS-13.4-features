import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] bg-base-100">
      <p>Page not found !</p>
      <Link className="btn btn-primary" href={"/"}>
        Go back Home
      </Link>
    </div>
  );
}
//Error/Loading/not-found pages can also be created in specific route folders
//To have a customized page for the route
