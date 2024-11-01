import express from "express";
export function userFeatures() {
  return {
    getUsersRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json({ messsage: "route is working for users" });
        // res.json(await db.getAll());
      });

      router.get("/:id", async (req, res) => {
        res.json({ messsage: "route is working for a single user" });
        // res.json(await db.getAll());
      });

      router.post("/", async (req, res) => {
        res.json({ messsage: "route is working for a single user" });
        // res.json(await db.getAll());
      });

      return router;
    },
  };
}
