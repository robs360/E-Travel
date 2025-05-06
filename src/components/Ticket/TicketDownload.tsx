'use client'
import logo from '../../assets/logo2.jpeg'
import Image from "next/image"
import { Phone } from "lucide-react"

const TicketDownload = ({ res }: any) => {
    
   
    return (
        <div className='min-w-[500px]'>
            {res?.data.map((item: any, index: number) => (
                <div key={index} id={item._id}>
                    {/* Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Image src={logo} width={60} alt="logo" />
                            <h1 style={{ fontSize: '24px', fontWeight: '600', marginLeft: '12px' }}>E-Travell</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Phone size={32} />
                            <div>
                                <h1 style={{ fontWeight: '500' }}>0181303232</h1>
                                <h1 style={{ fontWeight: '500' }}>e-travell@gmail.com</h1>
                            </div>
                        </div>
                    </div>

                    {/* Route Info */}
                    <div style={{
                        height: '80px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px'
                    }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <h1 style={{ fontWeight: '500' }}>{item.from}</h1>
                            <span style={{ fontWeight: '500' }}>to</span>
                            <h1 style={{ fontWeight: '500' }}>{item.to}</h1>
                        </div>
                        <h1 style={{ fontWeight: '500' }}>
                            {item.date && new Date(item.date).toLocaleDateString()}
                        </h1>
                        <h1 style={{ fontWeight: '500' }}>Departing {item.time}PM</h1>
                    </div>

                    <hr />

                    {/* Passenger Info */}
                    <div style={{
                        marginTop: '12px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ padding: '16px' }}>
                            <h1>Name</h1>
                            <h1 style={{ fontWeight: '500' }}>{item.name}</h1>
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h1>Bus Name</h1>
                            <h1 style={{ fontWeight: '500' }}>{item.busName}</h1>
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h1>Bus Number</h1>
                            <h1 style={{ fontWeight: '500' }}>{item.busNumber}</h1>
                        </div>
                    </div>

                    {/* Price & Contact */}
                    <div style={{
                        padding: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <span>Total Fee:</span>
                            <h1 style={{ fontWeight: '500' }}>{item.BDT}</h1>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <Phone size={20} />
                            <h1 style={{ fontWeight: '500' }}>0{item.phone}</h1>
                        </div>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <span>Seat:</span>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                {item.ticket?.map((seat: string, i: number) => (
                                    <span key={i}>{seat}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Download Button */}
                    <div style={{ padding: '16px' }}>
                        <button
                            style={{
                                padding: '8px 24px',
                                fontSize: '18px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                border: 'none'
                            }}
                        >
                            Download
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TicketDownload;
