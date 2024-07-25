import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
