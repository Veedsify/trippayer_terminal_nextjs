function OrderDetails({ params }: { params: { id: number } }) {
  return (
    <>
      <div className="">
        <h1 className="text-white font-bold md:text-2xl text-lg mb-5">
          Booking Details
        </h1>
        <div className="py-5">
          <div className="bg-white shadow-md rounded-md p-4 border-b">
            <h2 className="text-lg font-bold py-4">Order Details</h2>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Order ID#</span>
                    </td>
                    <td className="py-4 border-b text-sm">11541689164</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Package Ordered:</span>
                    </td>
                    <td className="py-4 border-b text-sm">
                      Hotel Malte - Astotel
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Package Duration:</span>
                    </td>
                    <td className="py-4 border-b text-sm">2 weeks</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Customer Name:</span>
                    </td>
                    <td className="py-4 border-b text-sm">David Martins</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Customer Email:</span>
                    </td>
                    <td className="py-4 border-b text-sm">
                      Davidmart@gmail.com
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Customer Phone:</span>
                    </td>
                    <td className="py-4 border-b text-sm">+1 234 567 890</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Customer Address:</span>
                    </td>
                    <td className="py-4 border-b text-sm">
                      123, Lorem Ipsum, Dolor Sit Amet
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Customer City:</span>
                    </td>
                    <td className="py-4 border-b text-sm">Los Angeles</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Customer State:</span>
                    </td>
                    <td className="py-4 border-b text-sm">California</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Customer PostalCode:</span>
                    </td>
                    <td className="py-4 border-b text-sm">102310</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Total Adults:</span>
                    </td>
                    <td className="py-4 border-b text-sm">2</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Total Children:</span>
                    </td>
                    <td className="py-4 border-b text-sm">1</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Total Cost:</span>
                    </td>
                    <td className="py-4 border-b text-sm">$120</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Payment Status:</span>
                    </td>
                    <td className="py-4 border-b text-sm">
                      <span className="text-green-500">Paid</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Payment Method:</span>
                    </td>
                    <td className="py-4 border-b text-sm">Credit Card</td>
                  </tr>{" "}
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Transaction ID:</span>
                    </td>
                    <td className="py-4 border-b text-sm">ascdscd-sdsawqw-2423d-sdsds-122</td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b text-sm">
                      <span className="font-medium">Booking Date:</span>
                    </td>
                    <td className="py-4 border-b text-sm">12/12/2020</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-sm">
                      <span className="font-medium">Booking Status:</span>
                    </td>
                    <td className="py-4 text-sm">
                      <span className="text-green-500">Confirmed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
