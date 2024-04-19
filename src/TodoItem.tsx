import React, { ReactNode } from "react"
import { Todo } from "./Todo"

export const TodoItem = ({ todo, onClick, isChecked, children }: { todo: Todo, onClick: () => any, isChecked: boolean, children: ReactNode }) => {
    const { title, description, isImportant } = todo;
    let checkedStyle = isChecked ? "line-through opacity-70" : "";
    let commonStyle = checkedStyle + " flex flex-row items-center rounded-lg my-4 p-4 border-2 cursor-pointer ";
    let regularStyle = commonStyle + "bg-cyan-200 border-cyan-400 dark:bg-cyan-800 dark:border-cyan-600";
    let importantStyle = commonStyle + "bg-red-200 border-red-400 dark:bg-red-800 dark:border-red-600";
    let finalStyle = isImportant ? importantStyle : regularStyle;
    console.log("Children")
    console.log(children)
    return (
        <section className={finalStyle} onClick={onClick}>
            <div className="flex-1">
                <h2 className="font-bold text-lg">{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}