import Link from "next/link";
import Student from "../StudentInfo";

export default function Page(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 className="text-4xl font-bold mb-5">My Shopping List</h1>
                <Student />
                <Link href='../'>&lt; Take Me Back!!!</Link>
        </div>
        </main>
    );
}