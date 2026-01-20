import jwt from 'jsonwebtoken';

export const generateToken = (userId,res) => {
    const payload = { id: userId };
    const token= jwt.sign(payload, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN 
    });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000 // 1 hour
    }); 
    return token;
}