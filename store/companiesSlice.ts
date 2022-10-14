import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Company {
  id: string;
  name: string;
  employeeNumber: number;
  address: string;
}

const companiesData: Company[] = [
  { id: uuidv4(), name: 'dsad', employeeNumber: 10, address: 'dsad' },
  { id: uuidv4(), name: 'dsasdd', employeeNumber: 10, address: 'dsad' },
  { id: uuidv4(), name: 'dshfdad', employeeNumber: 10, address: 'dsad' },
  { id: uuidv4(), name: 'dsgdsad', employeeNumber: 10, address: 'dsad' },
];

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
      state.value = state.value.filter((company) =>
        action.payload.includes(company.id)
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
