import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { IUser } from "../types/user";

const usersFilePath = path.join(process.cwd(), "lib", "data", "users.json");

type TStoredUser = IUser & {
  _id: string;
  password: string;
  _type?: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
};

const readUsers = async (): Promise<TStoredUser[]> => {
  const raw = await fs.readFile(usersFilePath, "utf8");
  return JSON.parse(raw) as TStoredUser[];
};

const writeUsers = async (users: TStoredUser[]) => {
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf8");
};

export const findUserByEmail = async (email: string) => {
  const users = await readUsers();
  return users.find((user) => user.email === email);
};

export const findUserByPhoneNumber = async (phoneNumber: string) => {
  const users = await readUsers();
  return users.find((user) => user.phoneNumber === phoneNumber);
};

export const createUser = async (params: {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  isAdmin?: boolean;
}) => {
  const users = await readUsers();
  const now = new Date().toISOString();
  const user: TStoredUser = {
    _id: randomUUID(),
    _type: "user",
    _createdAt: now,
    _updatedAt: now,
    _rev: randomUUID().replace(/-/g, ""),
    name: params.name,
    email: params.email,
    password: params.password,
    phoneNumber: params.phoneNumber,
    isAdmin: Boolean(params.isAdmin),
  };
  users.push(user);
  await writeUsers(users);
  return user;
};
