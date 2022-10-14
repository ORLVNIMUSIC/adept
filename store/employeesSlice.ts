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

const employeesData: Employee[] = [
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
    surName: 'dsaddqw',
    name: 'unfdqwew',
    position: 'dsadwqd',
  },
  {
    id: uuidv4(),
    companyId:
      companiesData[Math.floor(Math.random() * companiesData.length)].id,
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

    removeEmployee(state, action: PayloadAction<string[]>) {
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

export const { addEmployee, updateEmployee, removeEmployee } =
  employees.actions;
export default employees.reducer;
