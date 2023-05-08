import React from 'react'
import { bookData } from './constants/bookData'
import './App.css'


const Image = (props) => {
  return <img  src={props.src} alt={props.title} />
}

const Book = ({book}) => {
  const {title, urlImg, author, price, currency} = book;
  return (
    <article className='book'>
      <Image  src={urlImg} alt={title}/>
      <h4>{title}</h4>
      <h6>{author}</h6>
      <p>{price} {currency}</p>

    </article>
  )
}

const BookList = () => {
  return (
    <section className='book-list'>
       {bookData.map( el => (
        <Book book={el}></Book>
      ))}
    </section>
  )
}



const App = () => {
  return (
    <div>
      <BookList />
    </div>
  )
}

export default App
