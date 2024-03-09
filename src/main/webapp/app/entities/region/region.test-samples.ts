import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 20045,
};

export const sampleWithPartialData: IRegion = {
  id: 16591,
  regionName: 'financing',
};

export const sampleWithFullData: IRegion = {
  id: 6145,
  regionName: 'whoever claw',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
