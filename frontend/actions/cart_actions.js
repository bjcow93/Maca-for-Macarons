export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});
