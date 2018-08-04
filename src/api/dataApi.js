import 'whatwg-fetch'

const url_root = "https://peaceful-harbor-60665.herokuapp.com"
const db_api = url_root + '/db/links'

export function getFavouritePages(){
    debugger;
    return build_request(db_api, "GET")
}

export function addFavouritePage(group, item_name, links, resource_desc){
    let data = {
        group: group,
        item_name : item_name,
        links: links,
        resource_desc : resource_desc
    }
    return build_request(db_api, "POST", JSON.stringify(data))
}

export function deleteFavouritePage(group, item_name, links, resource_desc){
    let data = {
        group: group,
        item_name : item_name,
        links: links,
        resource_desc : resource_desc
    }
    return build_request(db_api, "DELETE", JSON.stringify(data))
}

function build_request(url, method, data){
    return fetch(url, {method: method, body: data,
                       headers: {"Content-Type": "application/json; charset=utf-8"}
                    }).then(onSuccess, onError)
}

function onSuccess(repsonse){
    return repsonse.json()
}

function onError(error){
    console.log(error) // eslint-disable-line no-console
}