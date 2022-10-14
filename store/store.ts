import { combineReducers, configureStore } from '@reduxjs/toolkit';
import companies from './companiesSlice';
import employees from './employeesSlice';
import selectedCompany from './selectedCompanySlice';

const combinedReducer = combineReducers({
  companies,
  employees,
  selectedCompany,
});

export default configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
