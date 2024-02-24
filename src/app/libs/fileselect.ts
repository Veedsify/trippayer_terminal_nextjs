import React from "react";
import toast from "react-hot-toast";
import swal from "sweetalert";

export function fileSelect(
  e: React.DragEvent<HTMLLabelElement> | React.FormEvent<HTMLInputElement>,
  setFile: React.Dispatch<React.SetStateAction<File | null>>,
  setFileName: React.Dispatch<React.SetStateAction<string | null>>
) {
  e.preventDefault();

  let droppedFile: File | null = null;

  if ("dataTransfer" in e) {
    droppedFile = e.dataTransfer?.files?.[0] || null;
  } else if (e.currentTarget instanceof HTMLInputElement) {
    droppedFile = e.currentTarget.files?.[0] || null;
  }

  if (!droppedFile) {
    console.error("No file dropped or selected");
    return;
  }

  const fileType = droppedFile.type.toLowerCase();
  const acceptedFileTypes = [
    "application/vnd.ms-excel",
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ].map((type) => type.toLowerCase());

  if (!acceptedFileTypes.includes(fileType)) {
    swal({
      title: "Error",
      text: "Please upload a valid file type (.csv or excel)",
      icon: "error",
      buttons: {
        confirm: {
          text: "Ok",
          closeModal: true,
          className: "border-none shadow-none bg-red-500 hover:bg-red-600",
        },
      },
    });
    return;
  }

  toast.success(`File selected successfully`);
  setFile(droppedFile);
  setFileName(droppedFile.name);
}
