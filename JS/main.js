function applyTheme(theme){
    document.body.classList.remove("theme-auto","theme-dark","theme-light")
    document.body.classList.add(`theme-${theme}`)
}

document.addEventListener('DOMContentLoaded', ()=>{
    const saveTheme = localStorage.getItem('theme') || "auto"

    applyTheme(saveTheme)

    for(const optionElement of document.querySelectorAll('#selTheme option')){
        optionElement.selected = saveTheme === optionElement.value
    }

    document.querySelector('#selTheme').addEventListener('change', function(){
        localStorage.setItem("theme", this.value)
        applyTheme(this.value)
    })
})