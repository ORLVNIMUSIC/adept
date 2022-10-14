import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany, updateCompany, Company } from '../store/companiesSlice';
import { RootState } from '../store/store';
import { v4 as uuidv4 } from 'uuid';

enum updateProperty {
  name = 'name',
  address = 'address',
}

const Companies: React.FC = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => {
    return state;
  });

  const companyName = useRef<HTMLInputElement>(null);
  const companyAddress = useRef<HTMLInputElement>(null);

  function addHandler() {
    if (companyName.current && companyName.current.value) {
      if (companyAddress.current && companyAddress.current.value) {
        dispatch(
          addCompany({
            id: uuidv4(),
            name: companyName.current.value,
            employeeNumber: 0,
            address: companyAddress.current.value,
          })
        );
      }
    }
  }

  function updateHandler(company: Company, value: string, property: string) {
    switch (property) {
      case 'name': {
        dispatch(
          updateCompany({
            id: company.id,
            name: value,
            employeeNumber: company.employeeNumber,
            address: company.address,
          })
        );
        break;
      }
      case 'address': {
        dispatch(
          updateCompany({
            id: company.id,
            name: company.name,
            employeeNumber: company.employeeNumber,
            address: value,
          })
        );
        break;
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
            ? store.companies.value.map((company) => {
                return (
                  <tr key={company.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={company.name}
                        onChange={(event) => {
                          updateHandler(
                            company,
                            event.target.value,
                            updateProperty.name
                          );
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={company.employeeNumber}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={company.address}
                        onChange={(event) => {
                          updateHandler(
                            company,
                            event.target.value,
                            updateProperty.address
                          );
                        }}
                      />
                    </td>
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
                placeholder="Кол-во сотрудников: 0"
                disabled={true}
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
