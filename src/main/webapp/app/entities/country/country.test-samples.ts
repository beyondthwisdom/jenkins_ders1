import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 3653,
};

export const sampleWithPartialData: ICountry = {
  id: 23689,
};

export const sampleWithFullData: ICountry = {
  id: 3085,
  countryName: 'breastplate',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
