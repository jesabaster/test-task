interface IMedia {
  id: number;
  medium_type: string;
  mime_type: string;
  file_location: string;
  file_name: string;
  original_file_name: string;
  size: number;
  url: string;
  position: 1;
}

interface IGlassesVariant {
  id: number;
  barcode: null;
  harmonized_system_code: any;
  stock_keeping_unit: any;
  inventory: boolean;
  home_trial_available: boolean;
  price: number;
  default_glass_variant: boolean;
  frame_variant: object;
  media: Array<IMedia>;
}

export interface IGlassesItem {
  name: string;
  configuration_name: string;
  default_collection_name: any;
  cost_breakdown: object;
  glass_variants: [];
}

export interface IGlasses {
  glasses: Array<IGlassesItem>;
  meta: {
    total_count: number;
  };
}
