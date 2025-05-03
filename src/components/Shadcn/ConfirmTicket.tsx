import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import logo from '../../assets/logo2.jpeg'
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
const ConformTicket = ({ bookedTicket }: { bookedTicket: string[] }) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => {               // 2. create submit function
        console.log(data);                            // form data will appear here
    }
    return (
        <Dialog>
            <DialogTrigger className='mt-2 px-3 py-2 rounded-[6px] text-sm text-white font-semibold bg-green-500
                         hover:bg-green-600 block mx-auto'>
                Confirm Ticket
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex gap-1 items-center">
                        <Image src={logo} width={40} alt=''></Image>
                        Procced Payment
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col space-y-2">
                    <label>Name</label>
                    <input type="text" {...register("name")} name="name" className="h-[44px] border border-gray-400 rounded-md px-3 text-base" />
                    <label>Email</label>
                    <input type="email" {...register("email")} name="email" className="h-[44px] border border-gray-400 rounded-md px-3 text-base" />
                    <label>Phone</label>
                    <input type="number" {...register("phone")} name="phone" className="h-[44px] border border-gray-400 rounded-md px-3 text-base" />

                    <Button className="w-full mt-2 h-[44px] bg-green-500 hover:bg-green-500">Procced Payment</Button>
                </form>
                <div className="bg-gray-100/50 p-4 rounded-xl">
                    <div className="flex justify-between">
                    <h1>Your Seat</h1>
                    <span className="bg-green-500 text-white px-2.5 py-1 rounded-[8px]">4000BDT</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        {
                            bookedTicket?.map((_, index: number) =>
                                <span key={index}>{bookedTicket[index]}</span>)
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}
export default ConformTicket