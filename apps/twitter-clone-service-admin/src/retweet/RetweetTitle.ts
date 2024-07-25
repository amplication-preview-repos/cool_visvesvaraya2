import { Retweet as TRetweet } from "../api/retweet/Retweet";

export const RETWEET_TITLE_FIELD = "originalTweet";

export const RetweetTitle = (record: TRetweet): string => {
  return record.originalTweet?.toString() || String(record.id);
};
