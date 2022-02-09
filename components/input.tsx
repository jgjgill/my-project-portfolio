interface InputProps {
  label: string;
  name: string;
  type: 'text' | 'password'
  placeholder?: string;
  [key: string]: any;
}

const Input = ({ label, name, placeholder, type, ...rest }: InputProps) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={name}
        className="text-base font-medium text-gray-700 cursor-pointer"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="px-2 py-1 rounded-md shadow-md"
        {...rest}
      />
    </div>
  );
};

export default Input;
