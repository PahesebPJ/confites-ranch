import useForm from "@/app/hooks/useForm";
import Dialog from "../dashboard/dialog"

export default function UpdateScheduleForm(){

    const { date, 
            client, 
            status, 
            numberOfPeople, 
            total, 
            setDate, 
            setClient, 
            setStatus, 
            setNumberOfPeople, 
            setTotal, 
            onClose, 
            onOk 
        } = useForm({})
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(date == ''  || client == '' || status == '') return
        
        const formData = {
            date: date,
            client: client,
            status: status,
            numberOfPeople: numberOfPeople,
            total: total
        }
        console.log(JSON.stringify(formData))
    }

    return (
        <Dialog title="Update information" onClose={onClose} onOk={onOk} okButton={false} dialogId="updateSchedule">
            {/* <Link href="/schedule" className="text-3xl underline">Go to schedule page</Link> */}
            <form onSubmit={handleSubmit}>
                <div className="p-6 flex flex-col gap-4">
                    <div className="grid gap-2">
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm">
                                Select date
                            </label>
                            <input 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                id="date" 
                                type="date" 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />   
                        </div>
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm">
                                Client
                            </label>
                            <input 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                id="client" 
                                placeholder="Enter client name" 
                                type="text"
                                value={client}
                                onChange={(e) => setClient(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm">
                                Status
                            </label>
                            <select 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="free">Free</option>
                                <option value="scheduled">Scheduled</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm">
                                Number of People
                            </label>
                            <input 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                id="peopleNumber" 
                                placeholder="Enter number of people" 
                                type="number"
                                value={numberOfPeople} 
                                onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm">
                                Total
                            </label>
                            <input 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                                id="total" 
                                placeholder="Enter total amount" 
                                type="number" 
                                value={total}
                                onChange={(e) => setTotal(parseInt(e.target.value))}
                                readOnly={true}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-end mt-2">
                        <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto text-white bg-slate-900 hover:bg-slate-700 cursor-pointer">
                            Schedule
                        </button>
                    </div>
                </div>
            </form>
        </Dialog>
    )
}