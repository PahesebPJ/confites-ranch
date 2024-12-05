//React-Next Libraries
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

//Utility objects
import { prices } from "@/config/prices"

type Props = {
    updatedDate?: string,
    updatedClient?: string,
    updatedStatus?: string,
    updatedNumberOfPeople?: number,
    updatedTotal?: number
}

const useForm = ({updatedDate = '', updatedClient = '', updatedStatus = '', updatedNumberOfPeople = 15, updatedTotal = 2000}: Props) => {
    const [date, setDate] = useState(updatedDate);
    const [client, setClient] = useState(updatedClient);
    const [status, setStatus] = useState(updatedStatus);
    const [numberOfPeople, setNumberOfPeople] = useState<number>(updatedNumberOfPeople);
    const [total, setTotal] = useState<number>(updatedTotal);

    const router = useRouter();

    async function onClose() {
        router.push('/dashboard');
        clearForm()
    }
    async function onOk() {
        router.push('/dashboard');
    }

    function clearForm() {
        setDate('')
        setClient('')
        setStatus('')
        setNumberOfPeople(15)
        setTotal(2000)
    }

    function calculatePeople(numberOfPeople: number){
        if(numberOfPeople > 15) {
            let extras = numberOfPeople - 15
            let extraAmount = extras * prices.extraPeople
            setTotal(2000 + extraAmount)
        }else {
            setTotal(2000)
        }
    }

    useEffect(() => {
        calculatePeople(numberOfPeople)
    },[numberOfPeople])

    return {
        date, 
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
    }
}

export default useForm