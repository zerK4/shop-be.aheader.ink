import { ReactNode } from 'react';

export interface CoreConfigData {
  data: {
    id?: string;
    name?: string;
    protocol?: string | null;
    base?: string | null;
    url?: string | null;
    path?: string | null;
    value?: string | null;
    redirect?: string | null;
  };
}

export interface SidebarSection {
  name?: string;
  icon?: ReactNode;
  link?: string;
  subSidebar?: boolean;
  subLinks?: SidebarItem[];
}

export interface SidebarItem {
  name?: string;
  icon?: ReactNode;
  link?: string;
}

export interface Product {
  id?: string;
  metaTitle?: string;
  metaDescription?: string;
  name?: string;
  description?: string;
  price?: string;
  salePrice?: string;
  tax?: string;
  taxPercent?: string;
  attributes?: string;
  categories?: ProductCategory[];
  published?: boolean;
  visible?: boolean;
  drafts?: Draft[];
}

export interface Draft {
  id: string;
  name?: string;
  productId?: string;
  product?: Product;
}

export interface Category {
  id: string;
  name?: string;
  description?: string;
  productId?: string;
  products: ProductCategory[];
  subCategories: SubCategory[];
}

export interface ProductCategory {
  id: string;
  product: Product[];
  category: Category[];
}

export interface SubCategory {
  id: string;
  name?: string;
  categoryId?: string;
  category?: Category;
}

export interface Attribute {
  id: string;
  name?: string;
  value?: string;
}
