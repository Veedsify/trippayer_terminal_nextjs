import BookingListTable from "@/app/components/bookingListTable";

function Bookings() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-white font-bold md:text-3xl text-2xl mb-5">
          Bookings
        </h1>
        <div className="py-5">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="text-left">
                <p className="text-gray-800 font-bold">Booking List</p>
                <p className="text-gray-500 text-sm font-medium">
                  Showing 1 - 8 of 20 results
                </p>
              </div>
              <div>
                <select className="p-3 py-3 rounded-md border text-sm bg-gray-50 outline-none">
                  <option value="any_time">24 hrs</option>
                  <option value="any_time">This week</option>
                  <option value="any_time">This Month</option>
                </select>
              </div>
            </div>
            {/* Booking List Table */}
            <BookingListTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookings;
