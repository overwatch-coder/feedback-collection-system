import jwt from "jsonwebtoken";

// Generate Token
export const generateToken = (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  return token;
};
