import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
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
        <table className="companies">
          <caption>Список компаний</caption>
          <thead>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Название компании</td>
              <td>Кол-во сотрудников</td>
              <td>Адрес</td>
            </tr>
          </thead>
          <tbody>
            {store.companies
              ? store.companies.map((company) => {
                  return (
                    <tr key={company.name}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{company.name}</td>
                      <td>{company.employeeNumber}</td>
                      <td>{company.address}</td>
                    </tr>
                  );
                })
              : ''}
          </tbody>
        </table>
        <table className="employees">
          <caption>Работники выбранной компании</caption>
          <thead>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Должность</td>
            </tr>
          </thead>
          {/* data goes here */}
        </table>
      </div>
    </>
  );
};

export default Home;
