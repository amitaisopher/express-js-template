import type { Request, Response } from "express";

export const listProject = (req: Request, res: Response) => {
	res.status(200).json([]);
};
export const getProject = (req: Request, res: Response) => {
	const { id } = req.params;
	res.status(200).json({ message: `Get project with id ${id}` });
};
export const listProjectTasks = (req: Request, res: Response) => {
	const { id } = req.params;
	res.status(200).json([]);
};
