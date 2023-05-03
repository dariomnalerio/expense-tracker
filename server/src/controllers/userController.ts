import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create user in database (gets user data from request body)
export const createUser = async (req: Request, res: Response) => {

    try {
        // get user data from request body
        const { email } = req.body;
          
        // create user in database using prisma client
        const user = await prisma.user.create({
            data: {
                email,
            },
        });

        res.status(201).json({
            message: "User created successfully",
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error ocurred while creating user",
        });
    }
}

export const getUser = async (req: Request, res: Response) => {
  const data = await prisma.user.findMany()
  res.json(data);
};

// update user in database (for now uses email as unique identifier, will change to id later)
export const updateUser = async (req: Request, res: Response) => {
  // get user data from request body
  const { email, name, age } = req.body;

  // get user from db
  const user = await prisma.user.findUnique({
    where: { email },
  });

  // update user in database using  prisma client
  const updatedUser = await prisma.user.update({
    where: { email },
    data: {
      name: name || user?.name,
      age: age || user?.age,
    },
  });

    res.json(updatedUser);
};
