import * as yup from 'yup';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  quantity: number;
  availability: boolean;
  price: number;
  gender: ProductGender;
  image_slug: string;
  category_id: number;
}

export interface ProductRequest extends Omit<ProductModel, "id" | "availability"> {};

export enum ProductGender {
  Homme = 'Homme',
  Femme = 'Femme',
  Unisexe = 'Unisexe'
}

export enum QueryOrderBy {
  ASC = "ASC",
  DESC = "DESC"
}

export interface ProductResponse extends ProductModel {}

export const addProductFormSchema = yup.object({
  name: yup.string().required("Champs requis."),
  description: yup.string().required("Champs requis."),
  quantity: yup.number().required("Champs requis.").typeError('Vous devez saisir un nombre valide.'),
  price: yup.number().required("Champs requis.").typeError('Vous devez saisir un nombre valide.'),
  gender: yup.string().required("Champs requis.").oneOf(['Homme', 'Femme', 'Unisexe']),
  imageSlug: yup.string().required("Champs requis."),
  category_id: yup.number().moreThan(0).required("Champs requis.").typeError('Champs requis.'),
});

export interface FilterForm {
  name: string;
  maxPrice: number;
  gender: ProductGender | "";
  categoryId: number | "";
  categoryName: string;
  orderBy: QueryOrderBy | "";
}