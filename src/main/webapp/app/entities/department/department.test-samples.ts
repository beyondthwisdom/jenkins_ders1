import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 30555,
  departmentName: 'flake',
};

export const sampleWithPartialData: IDepartment = {
  id: 32736,
  departmentName: 'phooey um nurse',
};

export const sampleWithFullData: IDepartment = {
  id: 9461,
  departmentName: 'boohoo that meanwhile',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'reopen developmental',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
