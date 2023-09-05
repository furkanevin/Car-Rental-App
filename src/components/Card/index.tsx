import { useState } from 'react';
import { CarProps } from '../../types';
import CustomButton from '../CustomButton';
import CarInfo from './CarInfo';
import DetailModal from '../DetailModal';
import { generateCarImageUrl } from '../../utils';

interface CarCardProps {
  car: CarProps;
}

const Card = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">
          TL
        </span>
        40
        <span className="self-end text-[14px] font-medium">/gün</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <img
          src={generateCarImageUrl(car)}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className=" mt-2 flex group-hover:invisible w-full justify-between text-gray">
          <CarInfo
            icon="/steering-wheel.svg"
            title={car.transmission === 'a' ? 'Otomatik' : 'Manuel'}
          />
          <CarInfo
            icon="/steering-wheel.svg"
            title={car.drive?.toUpperCase()}
          />
          <CarInfo
            icon="/steering-wheel.svg"
            title={car.city_mpg + 'MPG'}
          />
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Daha Fazla"
            designs="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] fony-bold"
            icon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <DetailModal
        isOpen={isOpen}
        car={car}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Card;
