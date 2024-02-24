import TravellersListTable from "@/app/components/travellersListTable copy";

function page() {
  return (
      <div>
        <h1 className="text-white font-bold md:text-3xl text-2xl mb-5">
          Travellers
        </h1>
        <div className="py-5">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="text-left">
                <p className="text-gray-800 font-bold">Traveller List</p>
                <p className="text-gray-500 text-sm font-medium">
                  Showing 1 - 8 of 20 results
                </p>
              </div>
            </div>
            {/* Travellers List Table */}
            <TravellersListTable />
          </div>
        </div>
      </div>
  );
}

export default page;
