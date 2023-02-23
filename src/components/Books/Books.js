import Book from './Book'
import Form from './Form'
const bookList = [
  { title: "The alchemist", author: "Paulo Coelho" },
  { title: "A fine balance", author: "Rohinton Mistry" },
  { title: "1984", author: "George Orwell" }
]

const Books = () => {
return (
  <>
   <section className="book-section">
   {bookList.map(book =>( 
     <Book 
     title={book.title}
     author={book.author}
     />
   ))}
   
    <Form />
   </section>
  </>
)
}

export default Books;
