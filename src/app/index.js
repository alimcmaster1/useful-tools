import './index.css'
import greet from './greet.js'
import {submitForm, delete_item} from './formActions.js';
import {getFavouritePages} from '../api/dataApi';

const name = "Alistair"
let message = greet();
document.getElementById('greeting').innerText = `${message}, ${name}!`

getFavouritePages().then(result => {
    result.Groups.forEach(group =>{
       let tabBody = `<table class="ui compact celled definition table">`;
       tabBody += `<tbody>` 
       group.Items.forEach(item =>{
            tabBody +=
            `<tr><td>${item.Name}
                <i class="trash alternate outline icon usefulitem" style="float:right"></i>
                </td><td>`
              item.Links.forEach(link => {
             tabBody += `<a class="external" href="${link}">${link} </a>`
             })
             tabBody += `</td><td>${item.Description}</td></tr>`
        })
        tabBody += `<tbody></table>`
        $('.tab.segment').filter(`[data-tab="${group.Group}"]`).html(tabBody)
    })

    $('.usefulitem').on('click', function(){
        // fix this and do in a non hack way!
        let group = this.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-tab')
        let name = this.parentElement.innerText.trim()
        delete_item(group, name)
    })

})

$('.menu .item')
    .tab()

$('.ui.form').form({ onSuccess: submitForm });
