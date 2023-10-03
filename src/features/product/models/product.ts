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

enum ProductGender {
  H = 'H',
  F = 'F'
}

export interface ProductResponse extends ProductModel {}