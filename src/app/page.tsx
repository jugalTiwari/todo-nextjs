import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";
import { Fragment } from "react";

function getTodos() {
  return prisma.todo.findMany()
}

async function onToggle(id: string, checked: boolean) {
  'use server'
  await prisma.todo.update({ where: { id }, data: { complete: checked } })
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <Fragment>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href='/new'
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} onToggle={onToggle} />
        })}

      </ul>
    </Fragment>
  )
}
