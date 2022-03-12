interface ButtonProps {
  text: string;
  loading: boolean;
}

const Button = ({ text, loading }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="border border-slate-700 w-full text-base font-medium hover:border-2 rounded-md shadow-md"
    >
      {loading ? 'Loading...' : text}
    </button>
  );
};

export default Button;
