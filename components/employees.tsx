import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEmployee,
  Employee,
  removeEmployee,
  updateEmployee,
} from '../store/employeesSlice';
import { RootState } from '../store/store';
import { v4 as uuidv4 } from 'uuid';
import { SelectedCompany } from '../store/selectedCompanySlice';

enum updateProperty {
  name = 'name',
  surName = 'surname',
  position = 'position',
}

interface Prop {
  selectedCompanyId: string;
}

const Employees: React.FC<Prop> = ({ selectedCompanyId }) => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => {
    return state;
  });

  const [chosenEmployees, setChosenEmployees] = useState<string[]>([]);
  const [allEmployeesChosen, setAllEmployeesChosen] = useState<boolean>(false);

  const employeeName = useRef<HTMLInputElement>(null);
  const employeeSurname = useRef<HTMLInputElement>(null);
  const employeePosition = useRef<HTMLInputElement>(null);

  //Специально сделал несколько вариантов работы с хендлерами событий для наглядности моей компетенции
  function addHandler() {
    if (employeeName.current && employeeName.current.value) {
      if (employeeSurname.current && employeeSurname.current.value) {
        if (employeePosition.current && employeePosition.current.value) {
          dispatch(
            addEmployee({
              id: uuidv4(),
              companyId: selectedCompanyId,
              name: employeeName.current.value,
              surName: employeeSurname.current.value,
              position: employeePosition.current.value,
            })
          );
        }
      }
    }
  }

  //Специально сделал несколько вариантов работы с хендлерами событий для наглядности моей компетенции
  function updateHandler(employee: Employee, value: string, property: string) {
    switch (property) {
      case 'name': {
        dispatch(
          updateEmployee({
            id: employee.id,
            companyId: employee.companyId,
            name: value,
            surName: employee.surName,
            position: employee.position,
          })
        );
        break;
      }
      case 'surname': {
        dispatch(
          updateEmployee({
            id: employee.id,
            companyId: employee.companyId,
            name: employee.name,
            surName: value,
            position: employee.position,
          })
        );
        break;
      }
      case 'position': {
        dispatch(
          updateEmployee({
            id: employee.id,
            companyId: employee.companyId,
            name: employee.name,
            surName: employee.surName,
            position: value,
          })
        );
        break;
      }
    }
  }

  //Специально сделал несколько вариантов работы с хендлерами событий для наглядности моей компетенции
  function allChosenHandler() {
    if (!store.employees.value.length) return;
    setAllEmployeesChosen(!allEmployeesChosen);
    setChosenEmployees(store.employees.value.map((employee) => employee.id));
    if (allEmployeesChosen) {
      setChosenEmployees([]);
    }
  }

  function removeHandler() {
    dispatch(removeEmployee(chosenEmployees));
    setChosenEmployees([]);
    setAllEmployeesChosen(false);
  }
  return (
    <>
      <table className="employees">
        <caption>Работники выбранной компании</caption>
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={allEmployeesChosen}
                onChange={allChosenHandler}
              />
              {chosenEmployees.length ? (
                <input type="button" onClick={removeHandler} value="Удалить" />
              ) : (
                ''
              )}
            </td>
            <td>Фамилия</td>
            <td>Имя</td>
            <td>Должность</td>
          </tr>
        </thead>
        <tbody>
          {store.employees
            ? store.employees.value.map((employee) => {
                if (selectedCompanyId === employee.companyId)
                  return (
                    <tr
                      key={employee.id}
                      className={
                        chosenEmployees.includes(employee.id) ? 'chosen' : ''
                      }
                    >
                      <td>
                        <input
                          type="checkbox"
                          checked={chosenEmployees.includes(employee.id)}
                          //Специально сделал несколько вариантов работы с хендлерами событий для наглядности моей компетенции
                          onChange={(e) => {
                            if (e.target.checked) {
                              setChosenEmployees([
                                ...chosenEmployees,
                                employee.id,
                              ]);
                            } else {
                              setChosenEmployees(
                                chosenEmployees.filter(
                                  (id) => id !== employee.id
                                )
                              );
                            }
                            if (!!chosenEmployees.length) {
                              setAllEmployeesChosen(false);
                            }
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={employee.surName}
                          checked={chosenEmployees.includes(employee.id)}
                          onChange={(event) => {
                            updateHandler(
                              employee,
                              event.target.value,
                              updateProperty.surName
                            );
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={employee.name}
                          onChange={(event) => {
                            updateHandler(
                              employee,
                              event.target.value,
                              updateProperty.name
                            );
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={employee.position}
                          onChange={(event) => {
                            updateHandler(
                              employee,
                              event.target.value,
                              updateProperty.position
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
              <input type="text" ref={employeeSurname} placeholder="Фамилия" />
            </td>
            <td>
              <input type="text" ref={employeeName} placeholder="Имя" />
            </td>
            <td>
              <input
                type="text"
                ref={employeePosition}
                placeholder="Должность"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Employees;
