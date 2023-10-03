export interface UserRequest {
  id?: number;
  email?: string;
  password?: string;
  repeat_password?: string;
}

export interface UserResponse extends UserModel {
}

export interface UserModel {
  id: number;
  email: string;
  password: string | null;
}
