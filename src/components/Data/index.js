function Data({ provinces }) {
    return provinces.map((province, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{province.name || province.kota}</td>
            <td>{province.numbers?.confirmed || province.kasus}</td>
            <td>{province.numbers?.recovered || province.sembuh}</td>
            <td>{province.numbers?.treatment || province.dirawat}</td>
            <td>{province.numbers?.death || province.meninggal}</td>
        </tr>
    ));
}

export default Data;
