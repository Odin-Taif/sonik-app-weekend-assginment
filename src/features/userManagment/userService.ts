import { Db } from "./userDb";

export function UserServices(db: Db) {
  async function getUsers() {
    return db.getUsersFromDb();
  }

  return {
    getUsers,
  };
}

export type Service = ReturnType<typeof UserServices>;
