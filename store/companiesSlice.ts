import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Company {
  name: string;
  employeeNumber: number;
  address: string;
}

const initialState: Company[] = [
  { name: 'dsad', employeeNumber: 10, address: 'dsad' },
  { name: 'dsasdd', employeeNumber: 10, address: 'dsad' },
  { name: 'dshfdad', employeeNumber: 10, address: 'dsad' },
  { name: 'dsgdsad', employeeNumber: 10, address: 'dsad' },
];

const companies = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany(state, action: PayloadAction<Company>) {
      state.push(action.payload);
    },
  },
});

export const { addCompany } = companies.actions;
export default companies.reducer;
