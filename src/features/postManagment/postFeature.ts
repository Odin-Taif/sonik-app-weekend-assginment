import { createPostRouter } from "./postRouter";

export function createPostFeature() {
  const router = createPostRouter();
  return {
    router,
  };
}
