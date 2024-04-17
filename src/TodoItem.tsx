import React from "react"

export const TodoItem = ({ title, description, isImportant, onClick, isChecked }: { title: string, description: string, isImportant: boolean, onClick: () => any, isChecked: boolean }) => {
    let checkedStyle = isChecked ? "line-through opacity-70" : ""
    let commonStyle = checkedStyle + " rounded-lg my-4 p-4 border-2 cursor-pointer "
    let regularStyle = commonStyle + "bg-cyan-200 border-cyan-400 dark:bg-cyan-800 dark:border-cyan-600"
    let importantStyle = commonStyle + "bg-red-200 border-red-400 dark:bg-red-800 dark:border-red-600"
    let finalStyle = isImportant ? importantStyle : regularStyle
    return (
        <section className={finalStyle} onClick={onClick}>
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{description}</p>
        </section>
    )
}