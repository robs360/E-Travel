'use client'
import { useForm } from "react-hook-form";
import logo from '../../assets/logo2.jpeg'
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
const RegisterForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => {               // 2. create submit function
        console.log(data);                            // form data will appear here
    }
    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px] md:w-[450px] mx-auto mt-16">
            <div className="flex items-center space-x-4 mb-6">
                <Image src={logo} width={90} height={90} alt="logo" className=""></Image>
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Register</h1>
                    <p className="text-sm text-gray-600">
                        Join us today and start your journey!
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col space-y-2">
                <label>Name</label>
                <input type="text" {...register("name")} name="name" className="h-[44px] border border-gray-400 rounded-md px-3 text-base" />
                <label>Email</label>
                <input type="email" {...register("email")} name="email" className="h-[44px] border border-gray-400 rounded-md px-3 text-base" />
                <label>Password</label>
                <input type="password" {...register("password")} name="password" className="h-[44px] border border-gray-400 rounded-md px-3 text-base" />
                <Button className="w-full mt-2 h-[44px]">Register</Button>
            </form>
            <p className="text-sm text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Log in here
        </Link>
      </p>
        </div>
    )
}
export default RegisterForm