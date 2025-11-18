import express, { type Request, type Response } from "express";

export const listTasks = (req: Request, res: Response) => {
	// Placeholder implementation
	res.status(200).json([]);
};

export const getTask = (req: Request, res: Response) => {
	const { id } = req.params;
	// Placeholder implementation
	res.status(200).json({ id, name: `Sample Task ${id}` });
};
