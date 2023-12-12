import { Task } from "../models/Task";
import { BrowserLocalStorage } from "./BrowserLocalStorage";

export const todoTaskStorage = new BrowserLocalStorage<Task, Task["id"]>(
  "TODO.TASKS",
  () => crypto.randomUUID()
);

