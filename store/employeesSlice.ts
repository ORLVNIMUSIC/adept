import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { companiesData } from './companiesSlice';

export interface Employee {
  id: string;
  companyId: string;
  surName: string;
  name: string;
  position: string;
}
const uuids = [
  '556e1a81-f9eb-4b82-85c6-aa60161374fe',
  '496f2408-d7eb-451d-ad5b-7e5d4e7ced56',
  '5468e427-4d71-438e-b0b9-ea1aa3f5f2ee',
  '0f48a3f9-c67c-4303-be30-fd0fd6493068',
];

export const employeesData: Employee[] = [
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId: uuids[Math.floor(Math.random() * uuids.length)],
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
];

const initialState = {
  value: employeesData,
};

const employees = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee(state, action: PayloadAction<Employee>) {
      state.value.push(action.payload);
    },

    removeEmployees(state, action: PayloadAction<string[]>) {
      state.value = state.value.filter(
        (employee) => !action.payload.includes(employee.id)
      );
    },

    updateEmployee(state, action: PayloadAction<Employee>) {
      state.value = state.value.map((employee) => {
        if (employee.id === action.payload.id) {
          return action.payload;
        }
        return employee;
      });
    },
  },
});

export const { addEmployee, updateEmployee, removeEmployees } =
  employees.actions;
export default employees.reducer;
