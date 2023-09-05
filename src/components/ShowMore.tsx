import { useSearchParams } from 'react-router-dom';
import { ShowMoreProps } from '../types';
import CustomButton from './CustomButton';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    searchParams.set('limit', String(newLimit));

    setSearchParams(searchParams);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          designs="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
