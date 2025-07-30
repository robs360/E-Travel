'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { imagesLink } from "@/types/types" // Make sure this exports a valid array of images

const HotelDetails = () => {
  return (
    <div className="max-w-[1420px] mx-auto px-4 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Large Image */}
        <motion.div
          className="relative w-full h-[320px] tablet:h-[380px] laptop:h-[460px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={imagesLink[0] ?? "/images/more1.jpg"}
            alt="Main property view"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Smaller Images Grid */}
        <div className="grid grid-cols-2 gap-6">
          {imagesLink.slice(1, 5).map((src, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[150px] tablet:h-[180px] laptop:h-[220px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={src ?? "/images/more2.jpg"}
                alt={`Property detail ${index + 1}`}
                fill
                className="object-cover"
              />
              {index === 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-bold">
                  +20 More
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
          <div>
            <div>
                <h1 className="font-semibold text-2xl md:text-3xl">Private room in tent in Penebel, Indonesia</h1>
                 <h1 className="font-semibold text-gray-500">2 guests1 . bedroom2 . beds1 . 5 shared baths</h1>
                 <p className="mt-2">A modern hotel offering comfort and convenience in the heart of the city. With stylish, well-furnished rooms, excellent amenities, and exceptional service, it’s ideal for both business and leisure travelers. Guests can enjoy on-site dining, a rooftop lounge, fitness center, high-speed Wi-Fi, and easy access to local attractions for a relaxing and memorable stay</p>
            </div>

          </div>
          <div>

          </div>
      </div>
    </div>
  )
}

export default HotelDetails
