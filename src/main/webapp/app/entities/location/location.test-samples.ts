import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 20974,
};

export const sampleWithPartialData: ILocation = {
  id: 288,
  stateProvince: 'useless',
};

export const sampleWithFullData: ILocation = {
  id: 12021,
  streetAddress: 'lest whether',
  postalCode: 'anti gingerbread considering',
  city: 'West Monserratefield',
  stateProvince: 'boo attain',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
