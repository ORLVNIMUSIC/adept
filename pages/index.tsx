import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import Companies from '../components/companies';
import Employees from '../components/employees';
import { RootState } from '../store/store';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => {
    return state;
  });
  return (
    <>
      <div className="container">
        <h1>Список компаний</h1>
      </div>
      <div className="container">
        <Companies />
        {!!store.selectedCompany.value.id ? (
          <Employees selectedCompanyId={store.selectedCompany.value.id} />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Home;
