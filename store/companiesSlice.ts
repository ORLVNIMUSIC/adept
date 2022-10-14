import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Employee, employeesData } from './employeesSlice';

export interface Company {
  id: string;
  name: string;
  employeeNumber: number;
  address: string;
}

export const companiesData: Company[] = [
  {
    id: '556e1a81-f9eb-4b82-85c6-aa60161374fe',
    name: 'dsad',
    employeeNumber: 0,
    address: 'dsad',
  },
  {
    id: '496f2408-d7eb-451d-ad5b-7e5d4e7ced56',
    name: 'dsasdd',
    employeeNumber: 0,
    address: 'dsad',
  },
  {
    id: '5468e427-4d71-438e-b0b9-ea1aa3f5f2ee',
    name: 'dshfdad',
    employeeNumber: 0,
    address: 'dsad',
  },
  {
    id: '0f48a3f9-c67c-4303-be30-fd0fd6493068',
    name: 'dsgdsad',
    employeeNumber: 0,
    address: 'dsad',
  },
];

function calculateEmployees(id: string, array: Employee[]) {
  return array.reduce((total, current) => {
    if (current.companyId === id) {
      return ++total;
    }
    return total;
  }, 0);
}

companiesData.map((company) => {
  company.employeeNumber = calculateEmployees(company.id, employeesData);
});

const initialState = {
  value: companiesData,
};

const companies = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany(state, action: PayloadAction<Company>) {
      state.value.push(action.payload);
    },

    removeCompanies(state, action: PayloadAction<string[]>) {
      state.value = state.value.filter(
        (company) => !action.payload.includes(company.id)
      );
    },

    updateCompany(state, action: PayloadAction<Company>) {
      state.value = state.value.map((company) => {
        if (company.id === action.payload.id) {
          return action.payload;
        }
        return company;
      });
    },
  },
});

export const { addCompany, updateCompany, removeCompanies } = companies.actions;
export default companies.reducer;
