import { User } from "../user/User";

export type Follower = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  followers?: Array<Follower>;
  follower?: Follower | null;
};
