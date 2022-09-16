export enum ProductType {
  DAILY,
  PREMIUM,
  SPECIAL
}

export interface Product {
  pname: string,
  description: string,
  heroTitle: string,
  releaseDate: string,
  bidPrice: string,
  bidInc: string,
  bidStartDate: string,
  bidEndDate: string,
  bidStartTime: string,
  bidEndTime: string,
  prodFeature: string,
  prodSpec: string,
  learnLink: string,
  pImage: string,
  suppImage: string,
  suppVid: string,
  pType: string,
  status: string,
  id: string,
}