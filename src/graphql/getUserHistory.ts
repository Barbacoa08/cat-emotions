import { fetchGraphQL } from "./shared/fetch";
import {
  GetUserHistoryResult,
  GetUserHistoryResultApiResult,
} from "./shared/types";

function fetchGetUserHistory(user: string, orderByDatetime?: "asc" | "desc") {
  const operationsDoc = `
    query getUserHistory($user: String = "", $datetime: order_by = asc) {
      emotions(where: {user: {_ilike: $user}}, order_by: {datetime: $datetime}) {
        datetime
        emotions
        image
        user
      }
    }
  `;

  return fetchGraphQL(operationsDoc, "getUserHistory", {
    user: user,
    datetime: orderByDatetime,
  });
}

export const getUserHistory = async (
  user: string,
  orderByDatetime?: "asc" | "desc"
): Promise<GetUserHistoryResult[]> => {
  const { errors, data } = await fetchGetUserHistory(user, orderByDatetime);
  const emotions: GetUserHistoryResultApiResult[] = data?.emotions || [];
  const result: GetUserHistoryResult[] = emotions.map((e) => ({
    ...e,
    datetime: new Date(e.datetime),
    emotions: e.emotions.split(","),
  }));

  if (errors) {
    console.error(errors);
  }

  return result;
};
