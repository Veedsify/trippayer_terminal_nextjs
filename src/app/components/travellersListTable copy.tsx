import { LucideMail, LucidePen } from "lucide-react";
import Link from "next/link";

function TravellersListTable() {
  return (
    <div className="py-4">
      <div className="overflow-x-auto">
        <table className="whitespace-nowrap w-full text-left text-sm">
          <thead>
            <tr>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                No
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Name
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Email
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Country
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                City
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Status
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr className="align-middle">
              <td className="px-4 py-4 border-b">1</td>
              <td className="px-4 py-4 border-b">
                <p>Sammy</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>sammy@gmail.com</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Nigeria</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Lagos</p>
              </td>
              <td className="px-4 py-4 border-b text-amber-800">
                <p className="p-1 inline-block bg-amber-300 rounded-md font-bold">
                  Pending
                </p>
              </td>
              <td className="px-4 py-4 border-b">
                <span className="flex items-center gap-2">
                  <Link
                    href="/travellers/details/1"
                    className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md"
                  >
                    View
                  </Link>
                  <Link
                    href="/travellers/details/1"
                    className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md"
                  >
                    <LucidePen size={15} />
                  </Link>
                </span>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="px-4 py-4 border-b">1</td>
              <td className="px-4 py-4 border-b">
                <p>Sammy</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>sammy@gmail.com</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Nigeria</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Lagos</p>
              </td>
              <td className="px-4 py-4 border-b text-green-800">
                <p className="p-1 inline-block bg-green-200 rounded-md font-bold">
                  Active
                </p>
              </td>
              <td className="px-4 py-4 border-b">
                <span className="flex items-center gap-2">
                  <Link
                    href="/travellers/details/1"
                    className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md"
                  >
                    View
                  </Link>
                  <Link
                    href="/travellers/details/1"
                    className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md"
                  >
                    <LucidePen size={15} />
                  </Link>
                </span>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="px-4 py-4 border-b">1</td>
              <td className="px-4 py-4 border-b">
                <p>Sammy</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>sammy@gmail.com</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Nigeria</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Lagos</p>
              </td>
              <td className="px-4 py-4 border-b text-amber-800">
                <p className="p-1 inline-block bg-amber-300 rounded-md font-bold">
                  Pending
                </p>
              </td>
              <td className="px-4 py-4 border-b">
                <span className="flex items-center gap-2">
                  <Link
                    href="/travellers/details/1"
                    className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md"
                  >
                    View
                  </Link>
                  <Link
                    href="/travellers/details/1"
                    className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md"
                  >
                    <LucidePen size={15} />
                  </Link>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TravellersListTable;
