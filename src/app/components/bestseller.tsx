import { PricingCard, PricingCardProps } from '@/components/PricingCard';
import React from 'react'

type Props = {}
const pricingData: PricingCardProps[] = [
    {
      title: "FORNITE SPOOFER",
      price: "€29.99",
      features: [
        "Windows 10 & 11 Supported",
        "Tournaments Ready",
        "Modifies Serials Permanently",
        "24/7 Support",
        "1 Click Spoof",
        "USB Required"
      ],
      popular: false
    },
    {
      title: "VALORANT SPOOFER",
      price: "€29.99",
      features: [
        "Windows 10 & 11 Supported",
        "TPM BYPASS",
        "Modifies Serials Permanently",
        "24/7 Support",
        "1 Click Spoof",
        "USB Required"
      ],
      popular: true
    },
    {
      title: "LOL SPOOFER",
      price: "€29.99",
      features: [
        "Windows 10 Supported",
        "VAN 152 BYPASS",
        "Modifies Serials Permanently",
        "24/7 Support",
        "1 Click Spoof",
        "USB Required"
      ],
      popular: false
    }
  ];
function Bestseller({}: Props) {
  return (
    <div className="flex justify-center items-center py-12">
    <div className="flex space-x-6">
      {pricingData.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  </div>
  )
}

export default Bestseller