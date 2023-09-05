import { colors } from '../constants';
import { CarProps, FilterProps } from '../types';

export async function fetchCars(filters: FilterProps) {
  const {
    make,
    model = '',
    year = '',
    limit = '',
    fuel = '',
  } = filters;

  const headers = {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const data = await res.json();

  return data;
}

export const generateCarImageUrl = (
  car: CarProps,
  angle?: string
) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append(
    'modelFamily',
    model.split(' ')[0].split('/')[0]
  );
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  const idx = Math.round(Math.random() * colors.length);
  url.searchParams.append('paintId', colors[idx]);

  return `${url}`;
};
