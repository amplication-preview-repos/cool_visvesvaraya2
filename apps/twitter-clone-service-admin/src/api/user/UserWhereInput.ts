import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";
import { FollowerListRelationFilter } from "../follower/FollowerListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { RetweetListRelationFilter } from "../retweet/RetweetListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  tweets?: TweetListRelationFilter;
  followers?: FollowerListRelationFilter;
  likes?: LikeListRelationFilter;
  retweets?: RetweetListRelationFilter;
};
