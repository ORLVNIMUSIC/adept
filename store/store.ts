import { combineReducers, configureStore } from '@reduxjs/toolkit';
import companies from './companiesSlice';

const combinedReducer = combineReducers({
  companies,
});

export default configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
