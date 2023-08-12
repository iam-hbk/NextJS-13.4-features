export default async function StaticPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw Error("Bazinga !")
  return <div>Static Page Route </div>;
}
