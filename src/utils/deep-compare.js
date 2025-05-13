import { isDate, isEqual } from 'date-fns';

export function deepCompare(input1, input2) {
  if (input1 === input2) {
    return true;
  }
  if (isDate(input1) && isDate(input2)) {
    return isEqual(input1, input2);
  }
  if (Array.isArray(input1) && Array.isArray(input2)) {
    if (input1.length !== input2.length) {
      return false;
    }
    for (let i = 0; i < input1.length; i++) {
      if (!deepCompare(input1[i], input2[i])) {
        return false;
      }
    }
    return true;
  }
  if (typeof input1 === 'object' && typeof input2 === 'object') {
    if (input1 === null || input2 === null) {
      return false;
    }
    if (Object.keys(input1).length !== Object.keys(input2).length) {
      return false;
    }
    for (const key in input1) {
      if (!(key in input2)) {
        return false;
      }
      if (!deepCompare(input1[key], input2[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}