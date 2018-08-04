import {addFavouritePage, deleteFavouritePage} from '../api/dataApi';

export function submitForm(){
    addFavouritePage(getFieldValue('group'),
                     getFieldValue('item_name'),
                     [getFieldValue('link')],
                     getFieldValue('desc'))
}

function getFieldValue(fieldId){
    // 'get field' is part of Semantics form behavior API
    return $('.ui.form').form('get field', fieldId).val()
}

export function delete_item(group, name){
    // Delete based upon Group/Item name ignore other fields
    deleteFavouritePage(group, name, '', '')
}
