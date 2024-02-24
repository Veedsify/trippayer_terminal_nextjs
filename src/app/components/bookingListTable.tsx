import { LucideMail } from "lucide-react";
import Link from "next/link";

function BookingListTable() {
  return (
    <div className="py-4">
      <div className="overflow-x-auto">
        <table className="whitespace-nowrap w-full text-left text-sm">
          <thead>
            <tr>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Customer Email
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Customer Name
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Package Name
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Total Cost
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Payment Method
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Status
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Date
              </th>
              <th scope="col" className="bg-gray-100 px-4 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr className="align-middle">
              <td className="px-4 py-4 border-b">sammy@gmail.com</td>
              <td className="px-4 py-4 border-b">
                <p>Sammy</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Package 1</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>$200</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Cash</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Pending</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>2021-08-23</p>
              </td>
              <td className="px-4 py-4 border-b">
                <span className="flex items-center gap-2">
                  <Link href="/bookings/details/1" className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md">
                    View
                  </Link>
                </span>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="px-4 py-4 border-b">sammy@gmail.com</td>
              <td className="px-4 py-4 border-b">
                <p>Sammy</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Package 1</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>$200</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Cash</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Pending</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>2021-08-23</p>
              </td>
              <td className="px-4 py-4 border-b">
                <span className="flex items-center gap-2">
                  <Link href="/bookings/details/1" className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md">
                    View
                  </Link>
                </span>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="px-4 py-4 border-b">sammy@gmail.com</td>
              <td className="px-4 py-4 border-b">
                <p>Sammy</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Package 1</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>$200</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Cash</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>Pending</p>
              </td>
              <td className="px-4 py-4 border-b">
                <p>2021-08-23</p>
              </td>
              <td className="px-4 py-4 border-b">
                <span className="flex items-center gap-2">
                  <Link href="/bookings/details/1" className="bg-blue-500 font-bold text-white px-3 py-1 rounded-md">
                    View
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

export default BookingListTable;
