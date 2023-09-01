import {put, takeEvery}  from 'redux-saga/effects'
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from '../constant';

function* getProduct(){
    let data = yield fetch( 'http://localhost:3500/product');
    data = yield data.json() ;
    yield put({type:SET_PRODUCT_LIST, data})
    console.log('call api here',data)
}
function* searchProduct(data){
    let result = yield fetch( `http://localhost:3500/product?q=${data.query}`);
    result = yield result.json() ;
    yield put({type:SET_PRODUCT_LIST, data:result})
    console.log('call api here',data)
}

function* productSaga(){
yield takeEvery(PRODUCT_LIST,getProduct)
yield takeEvery(PRODUCT_SEARCH,searchProduct)
}

export default productSaga;