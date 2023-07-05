function Data({ provinces }) {
    return provinces.map((province, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{getProvinceName(province)}</td>
            <td>{formatNumber(province.numbers?.confirmed || province.kasus)}</td>
            <td>{formatNumber(province.numbers?.recovered || province.sembuh)}</td>
            <td>{formatNumber(province.numbers?.treatment || province.dirawat)}</td>
            <td>{formatNumber(province.numbers?.death || province.meninggal)}</td>
        </tr>
    ));
}

function getProvinceName(province) {
    return province.name || province.kota;
}

function formatNumber(number) {
    return number?.toLocaleString('id-ID', { useGrouping: true }) || '-';
}

export default Data;
