import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  type: 'email' | 'text';
  placeholder?: string;
  register: UseFormRegisterReturn;
  required: boolean;
  errors?: FieldError;
}

const Input = ({
  label,
  name,
  type,
  placeholder,
  register,
  required,
  errors,
}: InputProps) => {
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
        {...register}
        required={required}
        className="px-2 py-1 rounded-md shadow-md"
      />
      {errors && (
        <p className="text-center text-gray-700 text-base font-medium">{errors.message}</p>
      )}
    </div>
  );
};

export default Input;
