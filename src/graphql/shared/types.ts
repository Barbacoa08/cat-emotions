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
