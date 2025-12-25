import fs from "fs";
import path from "path";
import { Todo } from "../models/todo";
const dataPath = path.join(process.cwd(), "src", "data", "todos.json");
export function loadTodos(): Todo[] {
const text = fs.readFileSync(dataPath, "utf-8");
return JSON.parse(text) as Todo[];
}
export function saveTodos(Todos: Todo[]): void {
fs.writeFileSync(dataPath, JSON.stringify(Todos, null, 2), "utf-8");
}
export function addTodo(
Todos: Todo[],
title: string,
done: boolean
): Todo[] {
const nextId =
Todos.length === 0 ? 1 : Math.max(...Todos.map(s => s.id)) + 1;
const newTodo: Todo = { id: nextId, title, done:true };
return [...Todos, newTodo];
}