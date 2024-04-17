import { icon } from "@fortawesome/fontawesome-svg-core"
import React, { ReactNode } from "react"

export const CustomButton = ({ label, icon, onClick }: { label: string, icon: ReactNode | undefined, onClick: () => any }) => {
    const iconIsDefined = typeof icon !== 'undefined'
    const lightStyles = "text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-white"
    const darkStyles = "dark:text-cyan-600 dark:border-cyan-600 dark:hover:bg-cyan-600"
    const style = "flex items-center rounded-full px-3 py-1 m-2 border-2" + " " + lightStyles + " " + darkStyles
    return (
        <button className={style} onClick={onClick} aria-description={label}>
            {iconIsDefined ? icon : ""}
            <span className="px-1"></span>
            <span>{label}</span>
        </button>
    )
}