import { useEffect, useState } from "react";
import Papa from 'papaparse';
import swal from "sweetalert";
import TableData from "./tabledata";

const LoadedData = ({ file }: { file?: File }) => {
  const [fileData, setFileData] = useState<any>([])

  useEffect(() => {
    if (file && file.type == 'text/csv') {
      Papa.parse(file, {
        complete: (results) => {
          const parsedData = results.data.slice(1); // Skip the first line
          setFileData(parsedData)
        },
      });
    }
    if (file?.type == 'xlsx') {

    }

  }, [file])

  return (
    <div className="flex flex-col">
      <div className="py-2 align-middle inline-block min-w-full">
        <div className="shadow overflow-auto border-b border-gray-20 pb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-slate-600">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  id
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  title
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  park
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  take_off_state
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  destination
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  destination_park
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  take_off_date
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  take_off_time
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  destination_date
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  destination_time
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  bus_seats
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  bus_type
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  seaters_per_row
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  plate_number
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  fee
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left border text-sm font-bold text-white uppercase"
                >
                  estimated_time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fileData.map((element: any, index: any) => (
                <tr key={index}>
                  <TableData rowdata={element} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoadedData;
