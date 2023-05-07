import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../services/userServices";

const prisma = new PrismaClient();


interface User {
  email: string;
  uid: string;
}
export const createUserController = async (req: User, res: Response) => {
  try {
    const result = await createUser(req); // create user in db

    // if user already exists, return 409
    if (!result) {
      return res.status(409).json({
        message: "User already exists",
      });
    } else {
      res.status(201).json(result);
    }
  } catch (error) {
    console.error(error);
    // if an http error occurs, return 500
    res.status(500).json({
      message: "An error ocurred while creating user",
    });
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const result = await getUsers(); // get users from db

    // if no users are found, return 404
    if (!result) {
      return res.status(404).json({
        message: "No users found",
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    // if an http error occurs, return 500
    res.status(500).json({
      message: "An error ocurred while getting users",
    });
  }
};

export const getUserController = async (req: Request, res: Response) => {
  try {
    const { uid } = req.body;
    const result = await getUser(uid); // get user from db
    if (!result) {
      return res.status(404).json({
        message: "No user found",
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    // if an http error occurs, return 500
    res.status(500).json({
      message: "An error ocurred while getting user",
    });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const result = await updateUser(req);

    if (!result) {
      return res.status(404).json({
        message: "No user found",
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    // if an http error occurs, return 500
    res.status(500).json({
      message: "An error ocurred while updating user",
    });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { uid } = req.body;
    const result = await deleteUser(uid);

    if (!result) {
      return res.status(404).json({
        message: "No user found",
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    // if an http error occurs, return 500
    res.status(500).json({
      message: "An error ocurred while deleting user",
    });
  }
};
