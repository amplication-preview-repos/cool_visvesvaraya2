import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
