import { RationInterface } from '../../infractructure/types/ration';

export class Ration {
  readonly label;
  readonly gramsToCarbohydrate;
  readonly bloodGlucoseIndex;
  readonly type;

  constructor({
    name,
    gramsToCarbohydrate,
    bloodGlucoseIndex,
    type,
  }: RationInterface) {
    this.label = name;
    this.gramsToCarbohydrate = gramsToCarbohydrate;
    this.bloodGlucoseIndex = bloodGlucoseIndex;
    this.type = type;
  }
}
