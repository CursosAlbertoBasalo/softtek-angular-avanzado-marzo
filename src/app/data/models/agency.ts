export enum OperatorRanges {
  ORBITAL,
  INTERPLANETARY,
}
export enum OperatorStatus {
  ACTIVE,
  PENDING,
}
export type Agency = {
  id: string;
  name: string;
  range: OperatorRanges;
  status: OperatorStatus;
};
