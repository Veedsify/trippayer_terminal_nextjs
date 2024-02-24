function Settings() {
  return (
    <div>
      <h1 className="text-white font-bold md:text-3xl text-2xl mb-5">
        Settings
      </h1>
      <div className="py-5">
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <h2 className="font-bold text-lg md:text-xl mb-5">
                Settings:
              </h2>
              <div>
                <div>
                  <label className=" font-semibold block mb-2">
                    Company Email
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-3 block mb-4"
                  />
                </div>
                <div>
                  <label className=" font-semibold block mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-3 block mb-4"
                  />
                </div>
                <div>
                  <label className=" font-semibold block mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded-md p-3 block mb-4"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value={"Save Changes"}
                    className="w-full border bg-slate-900 text-white font-bold rounded-md p-3 block mb-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
