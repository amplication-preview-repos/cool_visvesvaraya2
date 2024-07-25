import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";
import { FollowerUpdateManyWithoutUsersInput } from "./FollowerUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { RetweetUpdateManyWithoutUsersInput } from "./RetweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  followers?: FollowerUpdateManyWithoutUsersInput;
  likes?: LikeUpdateManyWithoutUsersInput;
  retweets?: RetweetUpdateManyWithoutUsersInput;
};
