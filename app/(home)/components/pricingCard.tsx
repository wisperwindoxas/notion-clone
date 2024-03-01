import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import React from 'react'

interface PricingCardProps {
    title:string,
    subtitle:string
    options:string
    price:string
}

const PricingCard = ({options, price, subtitle, title}:PricingCardProps) => {
  return (
   <div>
   
   
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
       <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
       <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{subtitle}</p>
       <div className="flex justify-center items-baseline my-8">
       { price === "Free" ? <span className="font-extrabold text-5xl dark:text-gray-400"></span> :<span className="font-extrabold text-5xl dark:text-gray-400">$</span>}
           <span className="mr-2 text-5xl font-extrabold">{price}</span>
           <span className=" dark:text-gray-400">/month</span>
       </div>
       
       
       <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
       <Button>Get Started</Button>
       <ul role='list' className='space-4 text-left mt-8'>
                {options.split(", ").map((option, idx) => (
                    <li className='flex item-center space-x-3' key={idx}>
                        <Check className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400' />
                        <span>{option}</span>
                        </li>
                ))}
       </ul>
   </div>
   </div>

  )
}

export default PricingCard