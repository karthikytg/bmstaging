export interface Pass {
  pname: string;
  description: string;
  color: string;
  amount: string;
  daysValid: string;
  availProd: string;
  discPer1: number;
  discPer2: number;
  pImage: string;
  pType: PassType;
  status: string;
  id: string;
}

export enum PassType {
  DAILY,
  PREMIUM,
  SPECIAL,
  COMBO,
  ALLACCESS,
}