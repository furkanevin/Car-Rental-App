import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link to={'/'} className="flex justify-center items-center">
          <img
            width={118}
            height={18}
            className="object-contain"
            src="/logo.svg"
          />
        </Link>

        <CustomButton
          title="Kaydol"
          btnType="button"
          designs="bg-primary-blue rounded-full text-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Header;
