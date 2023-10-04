import Link from "next/link";

export default function Student() {
    return (
      <div className="border border-black w-96 m-4 p-2 bg-gradient-to-r from-blue-200 to-purple-200 container mx-auto mt-8 flex flex-col items-center ">
        <p>Name: [Felix Zhang]</p>
        <p>Course Section: CPRG 306 F</p>
        <Link href="https://github.com/KamikazeFelix">Github: KamikazeFelix</Link>
      </div>
    );
  }
