export type AddEmotionRequest = {
  emotions: string;
  image: string;
  user: string;
};

export type AddEmotionResult = {
  affected_rows: number;
  returning: {
    datetime: Date;
    user: string;
  }[];
};

export type GetUserHistoryResult = {
  datetime: Date;
  emotions: string[];
  image: string;
  user: string;
};

export type GetUserHistoryResultApiResult = {
  datetime: string;
  emotions: string;
  image: string;
  user: string;
};
