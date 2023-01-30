import { ICollection } from "../models/ICollection";

export const getFetchUrl = (
  page: number,
  collections: ICollection,
  colour: string[],
  shape: string[]
) => {
  let url = `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/${collections.configuration_name}/glasses?page[limit]=12&page[number]=${page}`;

  if (colour.length) {
    url += colour.map((e) => {
      return `&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${e}`;
    });
  }

  if (shape.length) {
    url += shape.map((e) => {
      return `&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${e}`;
    });
  }

  return url;
};
