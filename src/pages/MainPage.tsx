import CustomFilter from '../components/CustomFilter';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import { fetchCars } from '../utils';
import Card from '../components/Card';
import { CarProps } from '../types';
import { useSearchParams } from 'react-router-dom';
import { fuels, yearsOfProduction } from '../constants';
import ShowMore from '../components/ShowMore';

interface Error {
  error: string;
}

const MainPage = () => {
  const [cars, setCars] = useState<CarProps[] | Error>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    fetchCars(params).then((res: CarProps[] | Error) => setCars(res));
  }, [searchParams]);

  const isDataEmpty =
    !Array.isArray(cars) || cars.length < 1 || !cars;

  const limit = Number(searchParams.get('limit')) || 10;

  return (
    <div>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h2>
          </div>
        ) : (
          <>
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car, i) => (
                  <Card car={car} key={i} />
                ))}
              </div>
            </section>

            <ShowMore pageNumber={limit / 10} isNext={true} />
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
