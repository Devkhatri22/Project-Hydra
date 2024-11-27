const InputField = ({ type, placeholder, name }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-white"
      ></label>
      <input
        type={type}
        name={name}
        className="bg-transparent border border-white text-white text-sm rounded-full focus:ring-white focus:border-white block w-full md:w-2/4 p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;
