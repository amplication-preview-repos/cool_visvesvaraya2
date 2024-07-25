import { JsonValue } from "type-fest";
import { Tweet } from "../tweet/Tweet";
import { Follower } from "../follower/Follower";
import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  tweets?: Array<Tweet>;
  followers?: Array<Follower>;
  likes?: Array<Like>;
  retweets?: Array<Retweet>;
};
