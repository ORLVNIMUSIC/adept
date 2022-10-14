import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany } from '../store/companiesSlice';
import { RootState } from '../store/store';

const Companies: React.FC = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => {
    return state;
  });

  const companyName = useRef<HTMLInputElement>(null);
  const companyEmpNum = useRef<HTMLInputElement>(null);
  const companyAddress = useRef<HTMLInputElement>(null);

  function addHandler() {
    if (companyName.current && companyName.current.value) {
      if (companyEmpNum.current && companyEmpNum.current.value) {
        if (companyAddress.current && companyAddress.current.value) {
          dispatch(
            addCompany({
              name: companyName.current.value,
              employeeNumber: Number(companyEmpNum.current.value),
              address: companyAddress.current.value,
            })
          );
        }
      }
    }
  }
  return (
    <>
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
          <tr className="create">
            <td>
              <input type="button" value="Добавить" onClick={addHandler} />
            </td>
            <td>
              <input
                type="text"
                ref={companyName}
                placeholder="Название компании"
              />
            </td>
            <td>
              <input
                type="number"
                ref={companyEmpNum}
                placeholder="Количество сотрудников"
              />
            </td>
            <td>
              <input type="text" ref={companyAddress} placeholder="Адрес" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Companies;
