import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 5104,
};

export const sampleWithPartialData: IEmployee = {
  id: 28742,
  hireDate: dayjs('2024-03-09T09:11'),
  commissionPct: 4539,
};

export const sampleWithFullData: IEmployee = {
  id: 22014,
  firstName: 'Laurel',
  lastName: 'DuBuque',
  email: 'Genesis95@gmail.com',
  phoneNumber: 'mollify yippee knowledgeable',
  hireDate: dayjs('2024-03-08T23:47'),
  salary: 8838,
  commissionPct: 12662,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
