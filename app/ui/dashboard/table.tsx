//Next React Libraries
import useForm from "@/app/hooks/useForm";
import Link from "next/link";
import { useState } from "react";

export default function Table(){
    const formattedDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    const {
      date,
      client,
      status,
      numberOfPeople,
      total
    } = useForm({updatedDate: formattedDate, updatedClient: 'Jhon Doe', updatedStatus: 'Scheduled', updatedNumberOfPeople: 15, updatedTotal: 2000})
    const [id, setId] = useState(10423)

    return(
      <table className="caption-bottom text-sm w-full">
        <thead className="[&amp;_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-12">
                ID
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Client
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Date
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Client Scheduled
              </th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-center">
                Status
              </th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                People number
              </th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                Amount
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Actions
              </th>
            </tr>
        </thead>
        <tbody className="[&amp;_tr:last-child]:border-0">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">{id}</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div className="flex items-center">
                <div>{client}</div>
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{date}</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div className="flex items-center">
                <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  JD
                </div>
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-center">{status}</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-center">{numberOfPeople}</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">${total}</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <Link 
                href={"/dashboard?updateSchedule=y" + `&id=${id}`} 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto text-white bg-slate-900 hover:bg-slate-700 cursor-pointer"
              >
                View
              </Link>
            </td>
          </tr>
        </tbody>

      </table>
    )
}