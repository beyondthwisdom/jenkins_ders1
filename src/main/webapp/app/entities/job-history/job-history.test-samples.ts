import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 26799,
};

export const sampleWithPartialData: IJobHistory = {
  id: 32288,
  startDate: dayjs('2024-03-09T10:06'),
  language: 'ENGLISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 23065,
  startDate: dayjs('2024-03-09T09:32'),
  endDate: dayjs('2024-03-08T18:24'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
