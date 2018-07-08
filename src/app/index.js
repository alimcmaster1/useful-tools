import './index.css'
import greet from './greet.js'
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
            `<tr><td>${item.Name}</td><td>`
              item.Links.forEach(link => {
             tabBody += `<a class="external" href="${link}">${link} </a>`
             })
             tabBody += `</td><td>${item.Description}</td></tr>`
        })
        tabBody += `<tbody></table>`
        $('.tab.segment').filter(`[data-tab="${group.Group}"]`).html(tabBody)
    })
})

$('.menu .item')
    .tab()