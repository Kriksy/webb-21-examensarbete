export interface IAnimal {
  name: string;
  slug: string;
}

export interface IAvatar {
  name: string;
  slug: string;
  imgUrl: string;
}

export interface ITag {
  name: string;
  slug: string;
  posts: IPost[];
}

export interface IPost {
  id: string;
  slug?: string;
  author: string;

  likes: number;
  likedBy: string[];
  pendingApproval: boolean;
  approved: boolean;

  img: string;
  text?: string;
  user?: IUser;
  animal: string;
  hashtags: string[];
  updatedAt?: string;
  createdAt?: string;
}

export interface ICreatePost {
  img: string;
  text?: string;
  user?: string;
  animal?: string
  hashtags?: string[];
  updatedAt?: string;
  createdAt?: string;
}

export interface IUser {
  id?: string;
  username: string;
  password?: string;
  role?: "standard" | "admin";
  avatar?: string;
  updatedAt?: string;
  createdAt?: string;
}
