import restoreRations from '../builders/restoreRations/restoreRations';
import { RATIONS_INFO_LIST } from './rationsData';

const getRations = () => {
  return restoreRations({ rations: RATIONS_INFO_LIST });
};

export default getRations;
