import Image from 'next/image'
import fetch from 'node-fetch';
import styles from './page.module.css'

export default async function Movie({ params }: { params: { slug: string } }) {

const response = await fetch('http://localhost:3000/api/movie/'+ params.slug);
const data:any = await response.json();


const movie = data.movies[0];

return (
    <main className='w-100 bg-white shadow'>

      <div className='flex'>
          <div className='flex-auto p-6'>
            <h2>{movie.title}</h2>
            <span>{movie.year}</span> <span>{movie.runtime}</span>
          </div>
          <div className='flex-auto text-right p-6'>
              <span>{movie.rated}</span>
          </div>
      </div>
      
      <div className='flex'>
          <Image
                src={movie.poster || "/Poster_not_available.jpeg"}
                alt="Next.js Logo"
                width={193}
                height={287}
                className={styles.image}
                priority
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU1Tb8DwACoAGKo/qR9AAAAABJRU5ErkJggg=="
              />

          <div>
            <div className='px-4 py-2'>
              {
                movie.genres.map((gen:any)=> {
                  return (
                  <span className='p-2'>{gen}</span>
                  )
                })
              }
            </div>
            <p className='p-6'>{movie.fullplot}</p>
          </div>
      </div>
    </main>
  )
}
