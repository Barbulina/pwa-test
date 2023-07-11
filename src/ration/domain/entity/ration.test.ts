import { RATIONS_INFO_LIST } from '../../infractructure/repository/rationsData';
import { Ration } from './ration';

describe('Ration', () => {
  it('Should return ration entity', () => {
    const data = RATIONS_INFO_LIST[0];
    const expectedData = {
      label: RATIONS_INFO_LIST[0].name,
      gramsToCarbohydrate: RATIONS_INFO_LIST[0].gramsToCarbohydrate,
      bloodGlucoseIndex: RATIONS_INFO_LIST[0].bloodGlucoseIndex,
      type: RATIONS_INFO_LIST[0].type,
    };

    expect(new Ration(data)).toEqual(expectedData);
  });
});
