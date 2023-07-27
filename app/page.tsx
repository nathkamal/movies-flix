import Image from 'next/image'
import styles from './page.module.css'
import fetch from 'node-fetch';
import Link from 'next/link';


export default async function Home() {


const response = await fetch('http://localhost:3000/api/movies');
const data:any = await response.json();

//console.log(data.movies);

  return (
    <main className={styles.main}>
      {
        data.movies.map((movie:any)=> {
          return ( 
            <div className={styles.item}>
              <Link href={`/movie/${movie._id}`}>
                <Image
                src={movie.poster || "/Poster_not_available.jpeg"}
                alt="Next.js Logo"
                width={193}
                height={287}
                className={styles.image}
                priority
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU1Tb8DwACoAGKo/qR9AAAAABJRU5ErkJggg=="
              />
              <span>{movie.title}</span>
              </Link>
            </div>
          )
        })
      }
    </main>
  )
}
