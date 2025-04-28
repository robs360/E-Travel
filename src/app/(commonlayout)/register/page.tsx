import RegisterForm from "@/components/Auth/RegisterForm"
import Image from "next/image"
import img from '../../../assets/register2.avif'
const Register=()=>{
    return(
        <div>
           <div className="min-h-screen gap-x-2 px-6 flex justify-center items-center">
            <Image className="hidden lg:flex"
             src={img} alt="My image" width={600} height={20}/>
            <RegisterForm></RegisterForm>
        </div>
        </div>
    )
}
export default Register