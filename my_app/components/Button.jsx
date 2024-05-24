const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="bg-gray-900 hover:bg-white text-white hover:text-gray-900 border-2 border-gray-900 px-4 py-2 rounded-md line-height-0 font-light">
      {text}
    </button>
  )
};

export default Button;