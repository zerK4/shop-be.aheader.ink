import SearchBar from '@/components/SearchBar';
import UserSpace from '@/components/UserSpace/UserSpace';

const Header = () => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={
        'w-full p-2 rounded-xl border border-gray-300 shadow-md h-16 flex items-center justify-between bg-white'
      }
    >
      <SearchBar />
      <UserSpace />
    </div>
  );
};

export default Header;
