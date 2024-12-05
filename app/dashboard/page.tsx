"use client"
//Components
import Card from "../ui/dashboard/card"
import Table from "../ui/dashboard/table"
import CreateScheduleForm from "../ui/forms/createScheduleForm"
import UpdateScheduleForm from "../ui/forms/updateScheduleForm"

//React-Next Libraries
import Link from "next/link"

export default function Dashboard(){

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
            <CreateScheduleForm />
            <div className="grid gap-4 md:grid-cols-2">
                <Card title="Schedule a date" subtitle="Select a date to schedule">
                    <div className="p-6 flex flex-col gap-2">
                        <div className="p-6 flex items-center">
                            <Link 
                                href="/dashboard?createSchedule=y"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto text-white bg-slate-900 hover:bg-slate-700 cursor-pointer"
                            >Schedule</Link>
                        </div>
                    </div>
                </Card>
                <Card title="Latest Registrations" subtitle="View the latest registrations.">
                    <div className="p-0 flex items-start overflow-auto">
                        <div className="relative w-full overflow-auto">
                            <Table />
                        </div>
                    </div>
                </Card>
            </div>
            <UpdateScheduleForm />
        </main>
    )
}