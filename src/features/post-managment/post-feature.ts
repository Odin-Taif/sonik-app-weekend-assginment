import { CreatePostDb } from "./post-repositroy";
import { createPostRouter } from "./post-router";
import { PostServices } from "./post-services";

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
