import { RATIONS_INFO_LIST } from '../../repository/rationsData';
import restoreRations from './restoreRations';

describe('restoreRations', () => {
  it('Should return restore data', () => {
    const data = [RATIONS_INFO_LIST[0], RATIONS_INFO_LIST[1]];
    const expectedData = [
      {
        label: RATIONS_INFO_LIST[0].name,
        gramsToCarbohydrate: RATIONS_INFO_LIST[0].gramsToCarbohydrate,
        bloodGlucoseIndex: RATIONS_INFO_LIST[0].bloodGlucoseIndex,
        type: RATIONS_INFO_LIST[0].type,
      },
      {
        label: RATIONS_INFO_LIST[1].name,
        gramsToCarbohydrate: RATIONS_INFO_LIST[1].gramsToCarbohydrate,
        bloodGlucoseIndex: RATIONS_INFO_LIST[1].bloodGlucoseIndex,
        type: RATIONS_INFO_LIST[1].type,
      },
    ];

    expect(restoreRations({ rations: data })).toEqual(expectedData);
  });
});
