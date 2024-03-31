export default function Table(){
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
              Residence
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
              Client Scheduled
            </th>
            <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-center">
              Status
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
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">1</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div className="flex items-center">
                <div>johndoe@example.com</div>
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Los Angeles, CA</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <div className="flex items-center">
                <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  JD
                </div>
              </div>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-center">Scheduled</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$250.00</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    )
}