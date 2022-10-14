import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectedCompany {
  id: string | undefined;
}

const selectedCompanyData: SelectedCompany = { id: undefined };

const initialState = {
  value: selectedCompanyData,
};

const selectedCompany = createSlice({
  name: 'selectedCompany',
  initialState,
  reducers: {
    updateSelectedCompany(state, action: PayloadAction<string | undefined>) {
      state.value.id = action.payload;
    },
  },
});

export const { updateSelectedCompany } = selectedCompany.actions;
export default selectedCompany.reducer;
