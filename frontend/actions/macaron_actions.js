import * as APIUtil from "../util/macaron_api_util";

export const RECEIVE_MACARONS = "RECEIVE_MACARONS";

export const receiveMacarons = macarons => ({
  type: RECEIVE_MACARONS,
  macarons
});

export const fetchMacarons = () => dispatch =>
  APIUtil.fetchMacarons().then(macarons => dispatch(receiveMacarons(macarons)));

//
//
//
//
//
//
//
//
//
