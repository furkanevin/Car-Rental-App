import { CarProps } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { generateCarImageUrl } from '../utils';

interface DetailModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const DetailModal = ({
  isOpen,
  closeModal,
  car,
}: DetailModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex  items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            <button
              onClick={closeModal}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" />
            </button>

            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img
                  src={generateCarImageUrl(car, 'angle')}
                  className="h-full mx-auto"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src={generateCarImageUrl(car, '29')}
                    className="h-full  mx-auto"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src={generateCarImageUrl(car, '33')}
                    className="h-full mx-auto"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src={generateCarImageUrl(car, '13')}
                    className="h-full mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <h2 className="font-semibold text-xl capitalize">
                {car.make} {car.model}
              </h2>

              <div className="mt-3 flex flex-wrap gap-4">
                {Object.entries(car).map(([key, value]) => (
                  <div
                    className="flex justify-between gap-5 w-full text-right"
                    key={key}
                  >
                    <h4 className="text-gray capitalize">
                      {key.split('_').join(' ')}
                    </h4>
                    <p className="text-black-100 font-semibold">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
