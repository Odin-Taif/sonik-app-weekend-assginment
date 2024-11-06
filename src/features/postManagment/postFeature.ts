import { CreatePostDb } from "./postDb";
import { createPostRouter } from "./postRouter";
import { PostServices } from "./postServices";

export function createPostFeature() {
  const db = CreatePostDb();
  const service = PostServices(db);
  const router = createPostRouter(service);

  return {
    router,
    service,
    db,
  };
}
