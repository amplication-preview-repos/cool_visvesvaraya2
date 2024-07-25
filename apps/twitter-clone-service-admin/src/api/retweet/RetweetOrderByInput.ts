import { SortOrder } from "../../util/SortOrder";

export type RetweetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  originalTweet?: SortOrder;
  userId?: SortOrder;
};
