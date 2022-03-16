import { fetchGraphQL } from "./shared/fetch";
import {
  GetUserHistoryResult,
  GetUserHistoryResultApiResult,
} from "./shared/types";

function fetchGetUserHistory(user: string) {
  const operationsDoc = `
    query getUserHistory($user: String = "") {
      emotions(where: {user: {_ilike: $user}}) {
        datetime
        emotions
        image
        user
      }
    }
  `;

  return fetchGraphQL(operationsDoc, "getUserHistory", { user: user });
}

export const getUserHistory = async (
  user: string
): Promise<GetUserHistoryResult[]> => {
  const { errors, data } = await fetchGetUserHistory(user);
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
