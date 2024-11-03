import jwt from "jsonwebtoken";
export const generateToken = async (userId: string, SECRET_KEY: string) => {
  const token = jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: "1d",
  });

  return token;
};
