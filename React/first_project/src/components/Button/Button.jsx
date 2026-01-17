export default function Button({ buttonText, className, onClick }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {buttonText}
    </button>
  );
}
