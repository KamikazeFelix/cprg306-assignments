import Link from 'next/link';
import Student from './StudentInfo';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <Student />
      <br />
      <li className='flex flex-col items-center '><Link href = "week2">Shopping List (week2) </Link></li>
      <br />
      <li className='flex flex-col items-center'><Link href= "week3">Item-List (week3) </Link></li>
      <br />
      <li className='flex flex-col items-center'><Link href= "week4">Add New Items (week4)</Link></li>
      <br />
      <li className='flex flex-col items-center'><Link href="week5">Sort Shopping Items(week5)</Link></li>
      </div>
      
    </main>
  );
}
