import { use } from "react";
import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

const register = async (req, res) => {
  const { fullname, email, password, phonenumber } = req.body;

  try {
    // Check BOTH email & phone
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { phonenumber }
        ]
      }
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email or phone number already exists",
      });
    }

    const salt= await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);

    const newUser = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword, 
        phonenumber,
      },
    });

        // generate token
    const token= generateToken(newUser.id, res);
    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
        token:token
    });

  } catch (error) {
    console.error("Error registering user:", error);

    // Extra safety for unique constraint
    if (error.code === "P2002") {
      return res.status(409).json({
        message: "Phone number already registered",
      });
    }

    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  // Login logic here
  const { email, password } = req.body;
  const user= await prisma.user.findUnique({
    where:{email:email}
  });

  if(!user){
    return res
    .status(401)
    .json({error:"invalid email or password"})
  }

  const isMatch= await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res
        .status(401)
        .json({error:"invalid email or password"})
    }

    // generate token
    const token= generateToken(user.id, res);
    res.status(200).json({message:"login successful", user:user, token:token});

};

const me = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const logout = async (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires:new Date(0),
    });
    res.status(200).json({
        status: "success",
        message:"logout successful"});
}
const forgotPassword = async (req, res) => {
    // Forgot password logic here
}
const updateUser = async (req, res) => {
    // Update user logic here
}

export { register, login, logout, forgotPassword, updateUser, me };