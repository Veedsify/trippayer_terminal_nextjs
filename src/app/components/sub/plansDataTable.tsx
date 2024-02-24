import {useEffect, useState} from "react";
import Papa from 'papaparse';
import swal from "sweetalert";
import TableData from "./tabledata";

const PlansDataTable = ({data}: { data?: any }) => {
    return (
        <>
            {
                data.length > 0 ? (
                    <div className="flex flex-col">
                        <div className="py-2 align-middle inline-block min-w-full">
                            <div className="shadow overflow-auto border-b border-gray-20 pb-8 clean_bar">
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
                                    {data?.map((element: any, index: any) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{index + 1}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.take_off_state}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.destination}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.destination_park}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.take_off_date.toLocaleString('en-us', {
                                                    year: 'numeric',
                                                    month: 'long'
                                                })}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.take_off_time}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.destination_date}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.destination_time}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.bus_seats}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.bus_type}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.seaters_per_row}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.plate_number}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div
                                                    className="text-left text-sm text-gray-900 font-bold">{element.fee.toLocaleString()}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div className="text-left text-sm text-gray-900 font-bold">
                                                    {Math.floor((new Date(element.destination_date).getTime() - new Date(element.take_off_date).getTime()) / (1000 * 60 * 60))} hours
                                                    {' '}
                                                    {Math.floor((new Date(element.destination_date).getTime() - new Date(element.take_off_date).getTime()) / (1000 * 60)) % 60} minutes
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className="min-h-[40vh]">
                        <h1 className="text-center font-bold text-3xl">
                            No Plans For the Selected Date
                        </h1>
                    </div>
                )
            }
        </>
    );
};

export default PlansDataTable;
