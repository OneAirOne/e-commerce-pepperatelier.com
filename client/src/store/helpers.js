import _ from 'lodash';

const createAsyncTransaction = function createAsyncTransaction(type) {
  return {
    type,
    action: _.camelCase(`${type}_ACTION`),
    mutations: {
      SUCCESS: `${type}_SUCCESS`,
      FAILURE: `${type}_FAILURE`,
      PENDING: `${type}_PENDING`,
    },
    keys: {
      pending: _.camelCase(`${type}_PENDING`),
      error: _.camelCase(`${type}_ERROR`),
      data: _.camelCase(`${type}_DATA`),
    },
    state: {
      [_.camelCase(`${type}_PENDING`)]: null,
      [_.camelCase(`${type}_ERROR`)]: null,
      [_.camelCase(`${type}_DATA`)]: null,
    },
  };
};

export { createAsyncTransaction as default };
