import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 12343,
};

export const sampleWithPartialData: ITask = {
  id: 21715,
  title: 'anti',
};

export const sampleWithFullData: ITask = {
  id: 5171,
  title: 'pro meanwhile',
  description: 'plus uneven gosh',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
