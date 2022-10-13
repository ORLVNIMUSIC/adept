import type { NextPage } from 'next';

const Home: NextPage = () => {
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
          {/* data goes here */}
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
