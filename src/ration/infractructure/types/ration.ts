export enum RationType {
  lacteal = 'lácteos',
  cereals_flours_pulses_legumes_tubers = 'cereales, harinas, legumbres y tuberculos',
  fruits = 'frutas',
  vegetables = 'hortalizas',
  oily_and_dry_fruit = 'frutas secas y grasa',
  drinks = 'bebidas',
  others = 'otros',
}

export interface RationInterface {
  name: string;
  gramsToCarbohydrate: number;
  bloodGlucoseIndex?: number;
  type: RationType;
}
