export type User = {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
};

type Post = {
  id: string;
  content: string;
  authorId: string;
};
