import { fetchGraphQL } from "./shared/fetch";
import { AddEmotionRequest, AddEmotionResult } from "./shared/types";

function executeAddEmotion(addRequest: AddEmotionRequest) {
  const operationsDoc = `
    mutation addEmotion($emotions: String, $image: String, $user: String) {
      insert_emotions(objects: {user: $user, image: $image, emotions: $emotions}) {
        affected_rows
        returning {
          user
          datetime
        }
      }
    }
  `;

  return fetchGraphQL(operationsDoc, "addEmotion", addRequest);
}

export const addEmotion = async (
  addRequest: AddEmotionRequest
): Promise<AddEmotionResult> => {
  const { errors, data } = await executeAddEmotion(addRequest);
  const result = data?.insert_emotions || {};

  if (errors) {
    console.error(errors);
  }

  return result;
};
