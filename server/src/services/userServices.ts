import { PrismaClient } from "@prisma/client";
import { Console, error } from "console";
import {UserCredential } from "firebase/auth";

const prisma = new PrismaClient();

interface User {
  email: string;
  uid: string;
}


export const createUser = async (req: any, res: any) => {

  console.log(req)
  // if user doesn't exist, create user in database using prisma client
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      uid: req.body.uid,
    },
  });

  return user;
};

export const getUsers = async () => {
  const users = await prisma.user.findMany();

  // if no users are found, return null
  if (!users) {
    return null;
  }

  return users;
};

export const getUser = async (req: any) => {
  const user = await prisma.user.findUnique({
    where: { uid: req.body.uid },
  });

  // if no user is found, return null
  if (!user) {
    return null;
  }

  return user;
};

export const updateUser = async (req: any) => {
  const user = await prisma.user.findUnique({
    where: { uid: req.body.uid },
  });

  // if no user is found, return null
  if (!user) {
    return null;
  }

  // update user in database using  prisma client
  const updatedUser = await prisma.user.update({
    where: { uid: req.body.uid },
    data: {
      name: req.body.name || user?.name,
      age: req.body.age || user?.age,
    },
  });

  return updatedUser;
};

export const deleteUser = async (req: any) => {
  const user = await prisma.user.findUnique({
    where: { uid: req.body.uid },
  });

  // if no user is found, return null
  if (!user) {
    return null;
  }

  // delete user from database using prisma client
  const deletedUser = await prisma.user.delete({
    where: { uid: req.body.uid },
  });

  return deletedUser;
}
