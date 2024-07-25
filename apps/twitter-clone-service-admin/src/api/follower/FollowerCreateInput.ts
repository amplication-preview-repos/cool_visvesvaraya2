import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FollowerCreateNestedManyWithoutFollowersInput } from "./FollowerCreateNestedManyWithoutFollowersInput";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";

export type FollowerCreateInput = {
  user?: UserWhereUniqueInput | null;
  followers?: FollowerCreateNestedManyWithoutFollowersInput;
  follower?: FollowerWhereUniqueInput | null;
};
