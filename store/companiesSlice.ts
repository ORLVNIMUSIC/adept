import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Company {
  name: string;
  employeeNumber: number;
  address: string;
}

const initialState: Company[] = [
  { name: 'dsad', employeeNumber: 10, address: 'dsad' },
  { name: 'dsad', employeeNumber: 10, address: 'dsad' },
  { name: 'dsad', employeeNumber: 10, address: 'dsad' },
  { name: 'dsad', employeeNumber: 10, address: 'dsad' },
];

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany(state) {
      console.log(state);
    },
  },
});

export const { addCompany } = companiesSlice.actions;
export default companiesSlice.reducer;
