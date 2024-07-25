import { User } from "../user/User";

export type Retweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  originalTweet: string | null;
  user?: User | null;
};
