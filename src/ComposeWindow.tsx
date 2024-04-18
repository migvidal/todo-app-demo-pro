import { icon } from "@fortawesome/fontawesome-svg-core"
import React, { FormEvent, ReactNode, useState } from "react"
import { Todo } from "./Todo";
import { title } from "process";
import { CustomButton } from "./CustomButton";

export const ComposeWindow = ({ onSubmit }: { onSubmit: (todo: Todo) => any }) => {
    let cardStyle = "rounded-lg my-2 p-4 border-2 border-gray-500 bg-slate-300 text-black dark:bg-slate-800 dark:text-white"
    let [formPayload, setFormPayload] = useState(new Todo("", "", false))
    function onFormSubmit(e: FormEvent) {
        e.preventDefault();
        // get data from form
        onSubmit(formPayload);
    }
    function onTitleChange(newTitle: string) {
        const newTodo = new Todo(newTitle, formPayload.description, formPayload.isImportant)
        setFormPayload(newTodo)
    }
    function onDescriptionChange(newDescription: string) {
        const newTodo = new Todo(formPayload.title, newDescription, formPayload.isImportant)
        setFormPayload(newTodo)
    }
    function onIsImportantChange(newisImportant: boolean) {
        const newTodo = new Todo(formPayload.title, formPayload.description, newisImportant)
        setFormPayload(newTodo)
    }
    return (
        <form className="flex flex-col" onSubmit={e => onFormSubmit(e)}>
            <label htmlFor="todo-title-input">Title</label>
            <input className={cardStyle} onChange={e => onTitleChange(e.target.value)} type="text" name="todo-title-input" id="todo-title-input" />
            <label htmlFor="todo-description-input">Description</label>
            <textarea className={cardStyle} onChange={e => onDescriptionChange(e.target.value)} name="todo-description-input" id="todo-description-input" cols={30} rows={5}></textarea>
            <div>
                <input onChange={e => onIsImportantChange(e.target.checked)} type="checkbox" name="todo-important-input" id="todo-important-input" />
                <span className="px-1"></span>
                <label htmlFor="todo-important-input">Important</label>
            </div>
            <div>
                <CustomButton label={"Submit"} icon={undefined} onClick={() => { }} />
            </div>
        </form>
    )
}