import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Company {
  id: string;
  name: string;
  employeeNumber: number;
  address: string;
}

const initialState: Company[] = [
  { id: uuidv4(), name: 'dsad', employeeNumber: 10, address: 'dsad' },
  { id: uuidv4(), name: 'dsasdd', employeeNumber: 10, address: 'dsad' },
  { id: uuidv4(), name: 'dshfdad', employeeNumber: 10, address: 'dsad' },
  { id: uuidv4(), name: 'dsgdsad', employeeNumber: 10, address: 'dsad' },
];

const companies = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany(state, action: PayloadAction<Company>) {
      state.push(action.payload);
    },

    removeCompanies(state, action: PayloadAction<string[]>) {
      state = state.filter((company) => action.payload.includes(company.id));
    },

    updateCompany(state, action: PayloadAction<Company>) {
      state = state.map((company) => {
        if (company.id === action.payload.id) {
          return action.payload;
        }
        return company;
      });
    },
  },
});

export const { addCompany } = companies.actions;
export default companies.reducer;
