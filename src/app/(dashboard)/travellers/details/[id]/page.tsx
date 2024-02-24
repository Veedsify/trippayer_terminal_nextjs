"use client";
import { LucideCheck } from "lucide-react";
import Image from "next/image";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";

function TravellersDetails() {
  return (
    <div>
      <h1 className="text-white font-bold md:text-3xl text-2xl mb-5">
        Travellers Details
      </h1>
      <div className="py-5">
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="p-4 border rounded-md">
            <Tabs selectedTabClassName="bg-blue-600 text-white">
              <div className="py-4 mb-5">
                <TabList className="flex items-center gap-3">
                  <Tab className="cursor-pointer rounded-full px-10 py-3 outline-none  border font-bold">
                    Travellers Details
                  </Tab>
                  <Tab className="cursor-pointer rounded-full px-10 py-3 outline-none border font-bold">
                    Bookings
                  </Tab>
                  <Tab className="cursor-pointer rounded-full px-10 py-3 outline-none border font-bold">
                    Invoices
                  </Tab>
                  <Tab className="cursor-pointer rounded-full px-10 py-3 outline-none border font-bold">
                    Payments
                  </Tab>
                </TabList>
              </div>
              <TabPanel>
                <div className="grid xl:grid-cols-11 grid-cols-1 gap-2">
                  <div className="xl:col-span-3 border rounded-md p-4">
                    <div className="mb-5">
                      <Image
                        src="/avatar.jpg"
                        priority
                        width={200}
                        height={200}
                        className="h-auto object-cover rounded-full"
                        alt="icon"
                      />
                    </div>
                    <table className="w-full px-5">
                      <tbody>
                        <tr>
                          <td className="font-bold py-3">Name</td>
                          <td className="text-right">Thomas Teffirs</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Email</td>
                          <td className="text-right">
                            <a href="mailto:" className="text-blue-500">
                              rowland@gmail.com
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Phone</td>
                          <td className="text-right">+ 00 222 44 5678</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Country</td>
                          <td className="text-right">Nigeria</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">City</td>
                          <td className="text-right">Lagos</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Address</td>
                          <td className="text-right">
                            Collins Street West, Victoria 8007,Australia.
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Status</td>
                          <td className="text-right" title="Verified">
                            <span className="inline-block p-2 rounded-full bg-green-200">
                              <LucideCheck stroke="darkgreen" size={15} />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="xl:col-span-4 border rounded-md p-4">
                    <h2 className="text-xl font-bold mb-2 text-blue-600">
                      Passport Details:
                    </h2>
                    <table className="w-full px-5 mb-5">
                      <tbody>
                        <tr>
                          <td className="font-bold py-3">Surname</td>
                          <td className="text-right">Teffirs</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Given Name</td>
                          <td className="text-right">Thomas</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Sex</td>
                          <td className="text-right">Male</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Date Of Birth</td>
                          <td className="text-right">Jun 03 1986</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Date Of Issue</td>
                          <td className="text-right">Jun 11 2004</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Address</td>
                          <td className="text-right">
                            Collins Street West, Victoria 8007,Australia.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h2 className="text-xl font-bold mb-2 text-blue-600">
                      Emergency Contact Details:
                    </h2>
                    <table className="w-full px-5">
                      <tbody>
                        <tr>
                          <td className="font-bold py-3">Emergency Contact</td>
                          <td className="text-right">Adi Purdila</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Address</td>
                          <td className="text-right">
                            New York, United States
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Email</td>
                          <td className="text-right">aidpurdial@gmail.com</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Phone Number</td>
                          <td className="text-right">+ 00 222 44 5678</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="xl:col-span-4 border rounded-md p-4">
                    <table className="w-full px-5 mb-5">
                      <tbody>
                        <tr>
                          <td className="font-bold py-3">Date of expiry</td>
                          <td className="text-right">Dec 31 2020</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Passport Number</td>
                          <td className="text-right">928321921</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Issuing Post Name</td>
                          <td className="text-right">London</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Nationality</td>
                          <td className="text-right">England</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2 className="text-xl font-bold mb-2 text-blue-600">
                      Insurance Details
                    </h2>
                    <table className="w-full px-5">
                      <tbody>
                        <tr>
                          <td className="font-bold py-3">Insurance Company</td>
                          <td className="text-right">
                            Pioneer Insurance Company Limited
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">
                            Insurance Policy No
                          </td>
                          <td className="text-right">12901321098</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Company Email</td>
                          <td className="text-right">aidpurdial@gmail.com</td>
                        </tr>
                        <tr>
                          <td className="font-bold py-3">Company Phone</td>
                          <td className="text-right">+ 00 222 44 5678</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravellersDetails;
