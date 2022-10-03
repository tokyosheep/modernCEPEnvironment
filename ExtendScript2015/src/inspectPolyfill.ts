import { ReturnSuccess } from './main';

type InspectObj = {
    object: {
        num: string,
        integer: number,
        name: string
    },
    array: { key: string, value: string|number }[]
};

export type InspectPolyfillReturn = ReturnSuccess<InspectObj, 'inspectPolyfill'>

/**
 * test for polyfill and babel
 * @returns {InspectPolyfillReturn}
 */
export const inspectPolyfill:()=>InspectPolyfillReturn = () => {
  const decimal = 34.2234;
  const num = 4;
  const object = {
    num: num.toString().padStart(2, '0'),
    integer: Math.trunc(decimal),
    name: 'object'
  };
  const array = Object.entries(object).map(([key,value]) => {
    return { key, value };
  });
  return {
    status: 'success',
    param: {
        object,
        array
    },
    from: 'inspectPolyfill'
  };
};


