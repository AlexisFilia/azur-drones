import { list } from "@keystone-6/core";
import {
  text,
  relationship,
  timestamp,
  integer,
} from "@keystone-6/core/fields";
import { Lists } from ".keystone/types";
import { Person } from "./scr/schemas/person";
import { Organization } from "./scr/schemas/organization";
import { Product } from "./scr/schemas/product";
import { ProductModel } from "./scr/schemas/product-model";
import { Article } from "./scr/schemas/article";
import { UseAction } from "./scr/schemas/use-action";
import { Report } from "./scr/schemas/report";
import { User } from "./scr/schemas/user";

export const lists = {
  User,
  Person,
  Organization,
  ProductModel,
  Product,
  Article,
  UseAction,
  Report,
};
