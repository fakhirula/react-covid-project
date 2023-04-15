function Data(props) {
  const { allStatus, no } = props;
  return (
    <tr>
        <td>{no}</td>
        <td>{allStatus.kota}</td>
        <td>{allStatus.kasus}</td>
        <td>{allStatus.sembuh}</td>
        <td>{allStatus.dirawat}</td>
        <td>{allStatus.meninggal}</td>
    </tr>
  );
}

export default Data;
