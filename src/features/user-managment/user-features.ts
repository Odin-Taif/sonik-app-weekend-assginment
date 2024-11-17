import { CreateUserDb } from "./user-repositroy";
import { createUserRouter } from "./user-router";
import { UserServices } from "./user-service";

export function createUserFeature() {
  const db = CreateUserDb();
  const service = UserServices(db);
  const router = createUserRouter(service);
  return {
    router,
    service,
    db,
  };
}
