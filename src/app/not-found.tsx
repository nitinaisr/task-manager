import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Invalid URL</h2>
      <p  className='underline'>
         <Link href="/">Click to go back to the home page</Link> 
      </p>
    </div>
  )
}