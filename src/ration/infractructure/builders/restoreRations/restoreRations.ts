import { Ration } from '../../../domain/entity/ration';
import { RationInterface } from '../../types/ration';

const restoreRations = ({ rations }: { rations: RationInterface[] }) =>
  rations.map((ration) => new Ration(ration));

export default restoreRations;
