import { combineReducers } from 'redux';
import data from './data';
import filterPrice from './filterPrice';
import filterColor from './filterColor';
import filterSpecies from './filterSpecies';
import sort from './sort'
import productDetail from './productDetail';
import checkLogIn from './checkLogIn';
import switchLogin from './switchLogin';
import search from './search';
import dataUsers from './datauser';
import paginationProduct from './paginationProduct';

export default combineReducers({
    data,
    dataUsers,
    filterPrice,
    filterColor,
    filterSpecies,
    sort,
    productDetail,
    checkLogIn,
    switchLogin,
    search,
    paginationProduct
})