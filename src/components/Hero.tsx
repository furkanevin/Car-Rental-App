import CustomButton from './CustomButton';

const Hero = () => {
  const scrollTo = () => {};

  return (
    <div className="hero">
      <div className="flex-1  pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">
          Özgürlüğü Hisset, Yolculuğa Başla!
        </h1>
        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır
          mısın? Araç kiralama deneyimini Altın Seçenekleri ile
          taçlandırarak her anını özel kılabilirsin.
        </p>

        <CustomButton
          title="Arabaları Keşfet"
          designs="bg-primary-blue text-white rounded-full mt-10"
          handleClick={scrollTo}
        />
      </div>
      <div className="w-100 flex justify-center">
        <img
          src="/hero.png"
          alt="hero"
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
