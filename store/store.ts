import { combineReducers, configureStore } from '@reduxjs/toolkit';
import companies from './companiesSlice';
import employees from './employeesSlice';

const combinedReducer = combineReducers({
  companies,
  employees,
});

export default configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
