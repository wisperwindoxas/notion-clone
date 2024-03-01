import { useEffect, useState } from "react"

export const useScrolled = () => {
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {
        const handlerScroll = () => {
            if(window.scrollY > 10){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handlerScroll)
        return () => window.removeEventListener("scroll", handlerScroll)
    }, [])

    return scrolled
}