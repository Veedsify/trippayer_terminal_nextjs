const TableData = ({ rowdata }: { rowdata: string[] }) => {
    return (
        <>
            {rowdata.map((item, index) => (
                <td className="px-6 py-4 whitespace-nowrap border" key={index}>
                    <div className="text-left text-sm text-gray-900 font-bold">{item}</div>
                </td>
            ))}
        </>
    );
}

export default TableData;