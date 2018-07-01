export default function greet (){
    const MORNING_END = 12
    const AFTERNOON_END = 5
    
    const MORN_GREET = "Good Morning"
    const AFTER_GREET = "Good Afternoon"
    const EVE_GREET = "Good Evening"

    let date = new Date()
    let hours = date.getHours() 

    if(hours < MORNING_END){
        return MORN_GREET
    }else if(hours < AFTERNOON_END){
        return AFTER_GREET
    }else{
        return EVE_GREET
    }
}