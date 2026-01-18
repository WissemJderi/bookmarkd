const Book = ({ title, description }) => {
  return (
    <div className="bg-gray-500 p-6 flex flex-col  gap-6 text-sm">
      <p>
        <strong>title:</strong> {title}
      </p>
      <p>
        <strong>description:</strong> {description}
      </p>
    </div>
  );
};

export default Book;
