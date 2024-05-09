"use client";
import Image from "next/image";
import { useState } from "react";
import { fileSelect } from "@/app/libs/fileselect";
import LoadedData from "@/app/components/sub/loadedData";
import axiosConnection from "@/app/utils/axios.connection";
import swal from "sweetalert";

function UploadPlans() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    fileSelect(e, setFile, setFileName);
  };

  const handleFileSelect = (e: React.FormEvent<HTMLInputElement>) => {
    fileSelect(e, setFile, setFileName);
  };

  const resetUpload = () => {
    setFile(null);
    setFileName(null);
  };
  const uploadFile = async () => {
    const formdata = new FormData();
    formdata.set('csv', file as Blob, file?.name as string);
    const res = await axiosConnection.post(file?.type == "csv"? "/file/csv" : "file/xlsx", formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${document.cookie.split("token=")[1] || ""}`
      }
    });

    if (res.data.status === 200) {
      swal('Success', 'File uploaded successfully', 'success');
      resetUpload();
    }
  };



  return (
    <div className="">
      <h1 className="mt-6 mb-6 text-white font-bold text-2xl md:text-3xl">
        Upload Plans
      </h1>
      <div className="bg-white w-full p-1 md:p-8 rounded-md shadow">
        <div className="border p-3 rounded-md overflow-hidden">
          {file == null ? (
            <form action="" encType="multipart/formdata">
              <input
                type="file"
                name="file"
                id="file"
                className="hidden"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="file"
                className="cursor-pointer min-h-[60vh] rounded-md flex items-center justify-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                    className="h-auto inline-block mb-5"
                    width={150}
                    height={150}
                    alt="upload image"
                    src="/upload.svg"
                  />
                  <span className="text-gray-500 font-bold mb-3 inline-block text-center">
                    Drag and drop your file here
                    <br />
                    <span className="text-sm font-normal">
                      *(accepts only .csv and excel files)
                    </span>
                  </span>
                  <span className="text-green-400">
                    {fileName ? fileName : ""}
                  </span>
                  {file ? (
                    <button className="px-8 p-2 rounded-md bg-slate-800 text-white">
                      Upload
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </label>
            </form>
          ) : (
            <></>
          )}
          {file && <LoadedData file={file} />}
          {file && (
            <>
              <div className="my-3 flex items-center gap-4">
                <button
                  onClick={resetUpload}
                  className="text-sm font-bold text-white bg-red-600 p-2 px-6 rounded-md">
                  Cancel
                </button>
                <button
                  onClick={uploadFile}
                  className="text-sm font-bold text-white bg-green-600 p-2 px-6 rounded-md">
                  Confirm
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadPlans;
