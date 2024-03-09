import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 9244,
};

export const sampleWithPartialData: IJob = {
  id: 2565,
  jobTitle: 'Chief Communications Manager',
};

export const sampleWithFullData: IJob = {
  id: 27456,
  jobTitle: 'Human Marketing Specialist',
  minSalary: 4568,
  maxSalary: 30816,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
