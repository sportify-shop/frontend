export interface ProductModel {
  id: number;
  name: string;
  description: string;
  quantity: number;
  availability: boolean;
  price: number;
  gender: ProductGender;
  imageSlug: string;
  categoryId: number;
  subCategoryId: number;
}

export enum ProductGender {
  Homme = 'Homme',
  Femme = 'Femme',
  Unisexe = 'Unisexe'
}

export interface ProductResponse extends ProductModel {}