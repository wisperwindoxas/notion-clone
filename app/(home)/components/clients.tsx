import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='max-w-xl'>
            <h2 className='text-4xl mt-6 font-bold'>
                Willions run on Notion every day
            </h2>
            <p className='opacity-70 mt-2'>
                    power the wrodl's best teams, from next-generation startups 
                     to established entrprise
            </p>

            <div className='flex justify-center items-center gap-6 flex-wrap mt-6'>
                    {clients.map((item, idx) => <Image key={idx} src={item} width={50} height={50} alt={"client"}/>)}
            </div>
    </div>
  )



}

const clients = [
    "/clients/1.svg",
    "/clients/2.svg",
    "/clients/3.svg",
    "/clients/4.svg",
    "/clients/5.svg",
    "/clients/6.svg",
    "/clients/7.svg",
    "/clients/8.svg",
    "/clients/9.svg",
    "/clients/10.svg",
    "/clients/11.svg",
    "/clients/12.svg",
    "/clients/13.svg",
    "/clients/14.svg",
]

export default Clients