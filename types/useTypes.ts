// User Types
export interface User {
  id: string;
  fullname: string;
  email: string;
  phonenumber: string;
  password?: string;
  role: 'USER' | 'ADMIN';
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  fullname: string;
  email: string;
  phonenumber: string;
  password: string;
}


export interface Product {
  id: string;
  productName: string;
  productImageUrl: string[];
  productNewPrice: number;
  productOldPrice?: number;
  productDescription: string;
  productInStock: number;
  categoryId: string;
  category?: Category;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductData {
  productName: string;
  productImageUrl: string[];
  productNewPrice: number;
  productOldPrice?: number;
  productDescription: string;
  productInStock: number;
  categoryId: string;
}


export interface Category {
  id: string;
  categoryName: string;
  categoryImageUrl: string;
  categoryDescription: string;
  createdAt: string;
  updatedAt: string;
  products?: Product[];
}

export interface CreateCategoryData {
  categoryName: string;
  categoryImageUrl: string;
  categoryDescription: string;
}


export interface CartItem {
  productId: string;
  productName: string;
  productImageUrl: string;
  price: number;
  quantity: number;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
}


export interface ContactUs {
  id: string;
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
  createdAt: string;
}

export interface CreateContactUsData {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
}


export interface Newsletter {
  id: string;
  email: string;
  createdAt: string;
}

export interface CreateNewsletterData {
  email: string;
}


export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  createdAt: string;
  updatedAt: string;
}


export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
