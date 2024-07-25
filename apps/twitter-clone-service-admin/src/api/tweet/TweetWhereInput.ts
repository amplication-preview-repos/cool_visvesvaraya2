import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  likes?: LikeListRelationFilter;
};
