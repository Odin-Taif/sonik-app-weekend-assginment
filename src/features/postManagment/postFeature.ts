import { CreatePostDb } from "./postDb";
import { createPostRouter } from "./postRouter";
import { createPostServices } from "./postServices";

export function createPostFeature() {
  const db = CreatePostDb();
  const service = createPostServices(db);
  const router = createPostRouter(service);

  return {
    router,
    service,
    db,
  };
}
