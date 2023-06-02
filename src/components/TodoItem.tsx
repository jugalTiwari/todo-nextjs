'use client'
import React from 'react'


type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    onToggle: (id: string, complete: boolean) => void
}

const TodoItem = ({ id, title, complete, onToggle }: TodoItemProps) => {
    return (
        <li className='flex gap-1 item-center'>
            <input
                defaultChecked={complete}
                id={id}
                type='checkbox'
                className='cursor-pointer peer'
                onChange={e => onToggle(id, e.target.checked)}
            />
            <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>
                {title}
            </label>
        </li>
    )
}

export default TodoItem