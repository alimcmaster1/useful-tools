import 'whatwg-fetch'

export function getFavouritePages(){
    return get('favourite')
}

function get(url){
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(repsonse){
    return repsonse.json()
}

function onError(error){
    console.log(error) // eslint-disable-line no-console
}