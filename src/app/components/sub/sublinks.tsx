import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent } from "react";

type SublinksProps = {
  data: {
    pathName: string;
    mainLink: string;
    iconColor: string;
    icon: React.ReactNode;
    subLinks: {
      name: string;
      path: string;
    }[];
  };
};

function Sublinks({ data }: SublinksProps) {
  const pathName = usePathname();
  function openSubmenu(e: MouseEvent<HTMLAnchorElement>) {
    e.stopPropagation();
    const sibling = e.currentTarget.nextElementSibling;
    sibling?.classList.toggle("active");
  }
  return (
    <li className="mb-2 ">
      <Link
        onClick={openSubmenu}
        href="#"
        className={`font-medium group flex items-center p-2 px-3 hover:bg-slate-800 rounded-md 
             gap-3 hover:text-white main_link ${
               pathName.startsWith(data.pathName)
                 ? `bg-slate-800 text-white `
                 : ""
             }}`}
      >
        <span
          className={`${
            pathName.startsWith(data.pathName)
              ? `stroke-white`
              : `stroke-[${data.iconColor}]`
          }`}
        >
          {data.icon}
        </span>
        {data.mainLink}
        <span className="ml-auto">
          <ChevronDown />
        </span>
      </Link>
      <ul
        className={`pl-5 overflow-hidden ${
          pathName.startsWith(data.pathName)
            ? "sidebar-drop-down active border"
            : "sidebar-drop-down "
        }`}
      >
        {data.subLinks.map((link, index) => (
          <li
            key={index}
            className={`rounded-md hover:text-teal-600 ${
              pathName.includes(link.path) ? "text-teal-600" : ""
            }`}
          >
            <Link
              href={link.path}
              className="text-sm font-bold py-3 px-9 flex gap-1 items-center w-full"
            >
              <ChevronRight size={15} /> {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Sublinks;
