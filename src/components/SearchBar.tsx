import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className={'flex p-2 items-center gap-2 w-1/3'}>
      <button className={'text-xl'}>
        <AiOutlineSearch />
      </button>
      <input
        type={'text'}
        className={'bg-transparent border-none outline-none w-full'}
        placeholder={'Search for data, users, etc.'}
      />
    </div>
  );
};

export default SearchBar;
