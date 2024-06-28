import React from 'react'
// import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { PhoneInput } from '@/components/ui/tel-input'

const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Temp: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = React.useState<string>("+66 081 304 39 20");

    return (
        <>
            <PhoneInput
                value={phoneNumber}
                onChange={setPhoneNumber}
                international
                defaultCountry="AU"
            />
        </>
    )
}

export default Temp 