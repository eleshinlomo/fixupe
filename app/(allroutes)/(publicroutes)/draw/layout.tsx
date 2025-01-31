import { Metadata } from "next"

interface DrawProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Myafros | Draw',
    description: 'Draw or make e-signature free and fast on Myafros',
  }

const DrawLayout = ({children} : DrawProps)=>{

    return (
        <div>
            {children}
        </div>
    )

}

export default DrawLayout