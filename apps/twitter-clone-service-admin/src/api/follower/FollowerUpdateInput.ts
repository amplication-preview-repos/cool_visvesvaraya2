import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FollowerUpdateManyWithoutFollowersInput } from "./FollowerUpdateManyWithoutFollowersInput";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";

export type FollowerUpdateInput = {
  user?: UserWhereUniqueInput | null;
  followers?: FollowerUpdateManyWithoutFollowersInput;
  follower?: FollowerWhereUniqueInput | null;
};
