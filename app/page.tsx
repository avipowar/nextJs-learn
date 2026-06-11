import Image from "next/image";

export default async function Home() {
  const data = await fetch(
    "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
  );
  const orginalData = await data.json();
  // console.log(data);
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
