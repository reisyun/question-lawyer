export interface UserModel {
  avatar?: string;
  name: string;
}

export interface PostInfoModel {
  user: UserModel;
  title: string;
  image?: string;
  date?: string;
  likeCount?: number;
}

export interface EventInfoModel {
  title: string;
  category: string;
  image?: string;
  date?: string;
}
