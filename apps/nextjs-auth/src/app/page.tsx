import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Home() {
  const accessDenied = false
  if (accessDenied) {
    redirect('/login')
  }
 
  return <main>hello</main>;
}
