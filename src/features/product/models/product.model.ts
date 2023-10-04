import * as yup from 'yup';

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

export interface ProductRequest extends Omit<ProductModel, "id" | "availability"> {};

export enum ProductGender {
  Homme = 'Homme',
  Femme = 'Femme',
  Unisexe = 'Unisexe'
}

export interface ProductResponse extends ProductModel {}

export const addProductFormSchema = yup.object({
  name: yup.string().required("Champs requis."),
  description: yup.string().required("Champs requis."),
  quantity: yup.number().required("Champs requis.").typeError('Vous devez saisir un nombre valide.'),
  price: yup.number().required("Champs requis.").typeError('Vous devez saisir un nombre valide.'),
  gender: yup.string().required("Champs requis.").oneOf(['Homme', 'Femme', 'Unisexe']),
  imageSlug: yup.string().required("Champs requis."),
  categoryId: yup.number().required("Champs requis.").typeError('Vous devez saisir un nombre valide.'),
});