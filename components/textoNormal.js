export const onInput = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-ZñN ]/g,'');    
}