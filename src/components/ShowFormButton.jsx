const ShowFormButton = ({ setShowForm, buttonStyle, buttonText }) => {
  return (
    <button className={buttonStyle} onClick={() => setShowForm(true)}>
      {buttonText}
    </button>
  );
};

export default ShowFormButton;
