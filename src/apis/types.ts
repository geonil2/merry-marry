export type MerryResponse<T> = {
  statusCode: string;
  message: string;
  data: T;
};

export type MerryResponseFailed = MerryResponse<string>;
