import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCompany,
  updateCompany,
  Company,
  removeCompanies,
} from '../store/companiesSlice';
import { RootState } from '../store/store';
import { v4 as uuidv4 } from 'uuid';
import { updateSelectedCompany } from '../store/selectedCompanySlice';
import { removeEmployees } from '../store/employeesSlice';

enum updateProperty {
  name = 'name',
  address = 'address',
}

const Companies: React.FC = () => {
  const [chosenCompanies, setChosenCompanies] = useState<string[]>([]);
  const [allCompaniesChosen, setAllCompaniesChosen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => {
    return state;
  });

  const companyName = useRef<HTMLInputElement>(null);
  const companyAddress = useRef<HTMLInputElement>(null);

  //Специально сделал несколько вариантов работы с хендлерами событий для наглядности моей компетенции
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

  //Специально сделал несколько вариантов работы с хендлерами событий для наглядности моей компетенции
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

  //Специально сделал несколько вариантов работы с хендлерами событий для наглядности моей компетенции
  function allChosenHandler() {
    if (!store.companies.value.length) return;
    setAllCompaniesChosen(!allCompaniesChosen);
    setChosenCompanies(store.companies.value.map((company) => company.id));
    if (allCompaniesChosen) {
      setChosenCompanies([]);
    }
  }

  function removeHandler() {
    const employeesToRemove = store.employees.value
      .filter((employee) => chosenCompanies.includes(employee.companyId))
      .map((employee) => employee.id);
    dispatch(removeCompanies(chosenCompanies));
    dispatch(removeEmployees(employeesToRemove));
    setChosenCompanies([]);
    setAllCompaniesChosen(false);
  }

  useEffect(() => {
    if (chosenCompanies.length === 1) {
      dispatch(updateSelectedCompany(chosenCompanies[0]));
    } else {
      dispatch(updateSelectedCompany(undefined));
    }
  }, [chosenCompanies]);

  return (
    <div className="leftTable">
      <table className="companies">
        <caption>Список компаний</caption>
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={allCompaniesChosen}
                onChange={allChosenHandler}
              />
              {chosenCompanies.length ? (
                <input type="button" onClick={removeHandler} value="Удалить" />
              ) : (
                <></>
              )}
            </td>
            <td>Название компании</td>
            <td>Кол-во сотрудников</td>
            <td>Адрес</td>
          </tr>
        </thead>
        <tbody>
          {store.companies ? (
            store.companies.value.map((company) => {
              return (
                <tr
                  key={company.id}
                  className={
                    chosenCompanies.includes(company.id) ? 'chosen' : ''
                  }
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={chosenCompanies.includes(company.id)}
                      //Специально сделал несколько вариантов работы с хендлерами событий для наглядности моей компетенции
                      onChange={(e) => {
                        if (e.target.checked) {
                          setChosenCompanies([...chosenCompanies, company.id]);
                        } else {
                          setChosenCompanies(
                            chosenCompanies.filter((id) => id !== company.id)
                          );
                        }

                        if (!!chosenCompanies.length) {
                          setAllCompaniesChosen(false);
                        }
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={company.name}
                      checked={chosenCompanies.includes(company.id)}
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
          ) : (
            <></>
          )}
        </tbody>
        <tfoot>
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
        </tfoot>
      </table>
    </div>
  );
};

export default Companies;
