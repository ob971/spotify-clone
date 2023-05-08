"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _react = require("@testing-library/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return _objectSpread({}, state, {
        user: action.user
      });

    case "SET_PLAYING":
      return _objectSpread({}, state, {
        playing: action.playing
      });

    case "SET_ITEM":
      return _objectSpread({}, state, {
        item: action.item
      });

    case "SET_DISCOVER_WEEKLY":
      return _objectSpread({}, state, {
        discover_weekly: action.discover_weekly
      });

    case "SET_TOP_ARTISTS":
      return _objectSpread({}, state, {
        top_artists: action.top_artists
      });

    case "SET_TOKEN":
      return _objectSpread({}, state, {
        token: action.token
      });

    case "SET_SPOTIFY":
      return _objectSpread({}, state, {
        spotify: action.spotify
      });

    case "SET_PLAYLISTS":
      return _objectSpread({}, state, {
        playlists: action.playlists
      });

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
f;