import { CreateUserDb } from "./userRepositroy";
import { createUserRouter } from "./userRouter";
import { UserServices } from "./userService";

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
