interface SearchBarProps {
  placeholder?: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        aria-label="search"
        className="border border-black rounded-md pl-0.5 outline-none  focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
