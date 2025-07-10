import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Home Page</h1>
      <Link href="/notmember">Go to Not Member Page</Link>
      <br />
      <Link href="/home">Go to Home Page</Link>
    </div>
  );
}
