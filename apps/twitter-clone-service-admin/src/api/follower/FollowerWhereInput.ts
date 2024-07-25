import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FollowerListRelationFilter } from "./FollowerListRelationFilter";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";

export type FollowerWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  followers?: FollowerListRelationFilter;
  follower?: FollowerWhereUniqueInput;
};
