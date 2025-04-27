import Image from "next/image"
import logo from '../../assets/logo.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="px-5 py-10 flex gap-4 items-center justify-evenly w-full min-h-[310px] mt-8 rounded-tl-[60px]" style={{
            background: "linear-gradient(135deg, #000000 0%, #222222 40%, #555555 84%, #888888 100%)",
        }}>
            <div className="max-w-[356px]">
                <div className="flex items-center space-x-3">
                    <Image src={logo} className="rounded-full" width={40} height={40} alt="LOGO"></Image>
                    <h1 className="text-white font-medium text-xl ">E-Ticket</h1>
                </div>
                <p className="text-white mt-2 text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ea at laborum tempora veritatis perferendis sapiente unde qui, non ipsa</p>
            </div>
            <div className="flex space-x-24">
                <div>
                    <h1 className="text-xl text-white font-medium">Office</h1>
                    <p className="text-white text-[15px] mt-2">Hathazari</p>
                    <p className="text-white text-[15px] mt-1">11 Mile</p>
                    <p className="text-white text-[15px] mt-1">Kobir Road</p>
                    <p className="text-white text-[15px] mt-1">Chittagong</p>
                </div>
                <div>
                    <h1 className="text-xl text-white font-medium">Link</h1>
                    <p className="text-white text-[15px] mt-2">Home</p>
                    <p className="text-white text-[15px] mt-1">Blog</p>
                    <p className="text-white text-[15px] mt-1">Services</p>
                    <p className="text-white text-[15px] mt-1">Ticket</p>
                </div>
            </div>
            <div>
                <h1 className="text-xl text-white font-medium">Contact</h1>
                <p className="text-white text-[15px] mt-2">+08699239023</p>
                <div className="mt-3 flex gap-x-7">
                   <FaFacebook className="text-white text-3xl"></FaFacebook>
                   <FaYoutube className="text-white text-3xl"></FaYoutube>
                   <FaInstagram className="text-white text-3xl"></FaInstagram>
                   <FaEnvelope className="text-white text-3xl"></FaEnvelope>
                </div>
            </div>
        </div>
    )
}
export default Footer