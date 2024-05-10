import type { AppStore } from "./data/app.store";

export type Environment = {
  Variables: {
    data: AppStore;
    user_id: string;
  };
};
