import { icon } from "@fortawesome/fontawesome-svg-core"
import React, { ReactNode } from "react"

export const CustomButton = ({ label, icon, onClick, style }: { label: string, icon: ReactNode | undefined, onClick: () => any, style: string }) => {
    const iconIsDefined = typeof icon !== 'undefined'
    const lightStyles = "text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white"
    const darkStyles = "dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-400"
    const finalStyle = "flex items-center rounded-full px-3 py-1 my-2 border-2" + " " + style + " " + lightStyles + " " + darkStyles
    const separator = <span className="px-1"></span>
    return (
        <button className={finalStyle} onClick={onClick} aria-description={label}>
            {iconIsDefined ? icon : ""}
            {iconIsDefined ? separator : ""}
            <span>{label}</span>
        </button>
    )
}