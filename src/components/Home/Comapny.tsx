import Image from "next/image"
import Marquee from "react-fast-marquee"
import sudia from '../../assets/logo1.png'
import ana from '../../assets/log3.jpeg'
import hanif from '../../assets/logof2.jpeg'
import green from '../../assets/logo5.png'
import shamoly from '../../assets/logo4.jpeg'
import marsa from '../../assets/marsa.png'
const Company = () => {
    return (
        <section className="py-10 bg-white">
            <h2 className="text-green-500 mt-16 text-3xl md:text-4xl font-bold text-center mb-10">
                Our Trusted Partners
            </h2>
            <div className="overflow-hidden mt-20">
                <Marquee pauseOnHover speed={40} gradient={false}>
                    {[sudia, ana, marsa, shamoly, hanif, green].map((logo, i) => (
                        <Image
                            key={i}
                            className="border-2 p-4 rounded-[8px] border-gray-300 mx-10  transition-all duration-300"
                            src={logo}
                            width={145}
                            height={75}
                            alt="Partner Company Logo"
                        />
                    ))}
                </Marquee>
            </div>
        </section>


    )
}
export default Company