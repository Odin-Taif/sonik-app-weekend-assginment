import { Request, Response } from "express";
import { readdir, readFile } from "fs/promises";
export const getUsers = async (req: Request, res: Response) => {
  const usersDir = "src/db/users";
  try {
    const files = await readdir(usersDir);
    const users = await Promise.allSettled(
      files.map(async (file: any) => {
        const content = await readFile(`${usersDir}/${file}`, "utf-8");
        return JSON.parse(content);
      })
    );

    res.json({
      success: true,
      msg: "Users fetched successfully",
      users: users,
    });
  } catch (error) {
    res.json({ success: false, msg: { error } });
    throw error;
  }
};
