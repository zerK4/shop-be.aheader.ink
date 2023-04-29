import SearchBar from '@/components/SearchBar';
import UserSpace from '@/components/UserSpace/UserSpace';

const Header = () => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={
        'border-b-2 w-full pr-2 py-2 h-16 flex items-center justify-between'
      }
    >
      <SearchBar />
      <UserSpace />
    </div>
  );
};

export default Header;
