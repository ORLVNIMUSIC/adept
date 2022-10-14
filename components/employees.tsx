const Employees: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Employees;
