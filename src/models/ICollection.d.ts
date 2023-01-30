export interface ICollection {
  name: string;
  configuration_name: string;
  id: number;
}

export interface ICollectionsResponse {
  collections: ICollection[];
  meta: object;
}
