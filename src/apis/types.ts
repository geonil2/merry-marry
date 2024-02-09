export type MerryResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export type MerryResponseFailed = MerryResponse<string>;
