import { User } from "../user/User";
import { Like } from "../like/Like";

export type Tweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  user?: User | null;
  likes?: Array<Like>;
};
