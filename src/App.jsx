import { useState } from "react";

const titleText = "Bookmarkd";
const titleStyle = "text-6xl text-red-900 text-center m-10";
const buttonText = "Add Book";
const buttonStyle = "text-black bg-gray-200 p-2 m-auto cursor-pointer";
const cardStyle = "p-20 flex flex-col justify-between gap-6 bg-gray-100 ";
const formStyle = "flex flex-col bg-gray-500 py-6 gap-4";
const inputStyle = "bg-white";
const labelStyle = "flex flex-col gap-4 m-auto";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [book, setBook] = useState({ title: "", description: "" });
  const [books, setBooks] = useState([]);
  // Book is {Title: String, Description: String , id: Date.now()}
  // interp. a book with a title and a description
  // const book1 = { title: "SICP", description: "Wizard Book" };
  // const fn-for-book = (b) => (... b)

  const handleTitleChange = (e) => {
    setBook((prevBook) => ({ ...prevBook, title: e.target.value }));
  };

  const handleDescriptionChange = (e) => {
    setBook((prevBook) => ({ ...prevBook, description: e.target.value }));
  };

  // Book -> Void
  // Add the book to the list of books and clear in inputs
  const handleAddBook = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [...prevBooks, { ...book, id: Date.now() }]);
    setBook({ title: "", description: "" });
    setShowForm(false);
  };
  return (
    <>
      <h1 className={titleStyle}>{titleText}</h1>
      <div className={cardStyle}>
        <div className="h-96 bg-gray-300 flex flex-row gap-6 p-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-500 p-6 flex flex-col  gap-6 text-sm"
            >
              <p>
                <strong>title:</strong> {book.title}
              </p>
              <p>
                <strong>description:</strong> {book.description}
              </p>
            </div>
          ))}
        </div>
        {showForm ? (
          <form className={formStyle} onSubmit={handleAddBook}>
            <label className={labelStyle}>
              Add Book Title
              <input
                type="text"
                className={inputStyle}
                value={book.title}
                onChange={handleTitleChange}
              />
            </label>
            <label className={labelStyle}>
              Add Book Description
              <input
                type="text"
                className={inputStyle}
                value={book.description}
                onChange={handleDescriptionChange}
              />
            </label>

            <button className={buttonStyle}>{buttonText}</button>
          </form>
        ) : (
          <button className={buttonStyle} onClick={() => setShowForm(true)}>
            {buttonText}
          </button>
        )}
      </div>
    </>
  );
}

export default App;
