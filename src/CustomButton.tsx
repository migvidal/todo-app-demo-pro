import { icon } from "@fortawesome/fontawesome-svg-core"
import React, { ReactNode } from "react"

export const CustomButton = ({ label, icon, onClick }: { label: string, icon: ReactNode | undefined, onClick: () => any }) => {
    const iconIsDefined = typeof icon !== 'undefined'
    const lightStyles = "text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white"
    const darkStyles = "dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-400"
    const style = "flex items-center rounded-full px-3 py-1 m-2 border-2" + " " + lightStyles + " " + darkStyles
    const separator = <span className="px-1"></span>
    return (
        <button className={style} onClick={onClick} aria-description={label}>
            {iconIsDefined ? icon : ""}
            {iconIsDefined ? separator : ""}
            <span>{label}</span>
        </button>
    )
}