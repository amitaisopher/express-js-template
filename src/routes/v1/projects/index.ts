import express, { type Router } from "express";
import { listProject, getProject, listProjectTasks } from "./controller";

const projects: Router = express.Router();

projects.get("/", listProject);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTasks);

export default projects;
