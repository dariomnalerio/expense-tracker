import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (uid: string, email: string) => {
  // check if user already exists in database
  const userExists = await prisma.user.findUnique({
    where: { uid: uid },
  });

  // if user already exists, return null
  if (userExists) {
    return null;
  }

  // if user doesn't exist, create user in database using prisma client
  const user = await prisma.user.create({
    data: {
      email,
      uid,
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

export const getUser = async (uid: string) => {
  const user = await prisma.user.findUnique({
    where: { uid: uid },
  });

  // if no user is found, return null
  if (!user) {
    return null;
  }

  return user;
};

export const updateUser = async (
  uid: string,
  email: string,
  name: string | null,
  age: number | null
) => {
  const user = await prisma.user.findUnique({
    where: { uid },
  });

  // if no user is found, return null
  if (!user) {
    return null;
  }

  // update user in database using  prisma client
  const updatedUser = await prisma.user.update({
    where: { uid },
    data: {
      name: name || user?.name,
      age: age || user?.age,
    },
  });

  return updatedUser;
};

export const deleteUser = async (uid: string) => {
  const user = await prisma.user.findUnique({
    where: { uid },
  });

  // if no user is found, return null
  if (!user) {
    return null;
  }

  // delete user from database using prisma client
  const deletedUser = await prisma.user.delete({
    where: { uid },
  });

  return deletedUser;
}