export type User = {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
};

export type Post = {
  id: string;
  content: string;
  authorId: string;
};

export type SetTokenCookieOptions = {
  token: string;
  res: Response;
};
