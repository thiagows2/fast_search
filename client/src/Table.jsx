const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Estado</th>
          <th>Sexo</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.state}</td>
            <td>{item.sex}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;