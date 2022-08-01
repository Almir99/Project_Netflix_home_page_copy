const tabItems = document.querySelectorAll(".tab-item")
const tabContentItems = document.querySelectorAll(".tab-content-item")

//Select tab content item
function selectItem(){
    removeBorder();
    removeShow()
    //Add border to current tab
    this.classList.add("tab-border")
    //Grab content
    const contentGrab = document.querySelector(`#${this.id}-content`);
    contentGrab.classList.add("show")
}
//Remove border
function removeBorder(){
    tabItems.forEach(item => item.classList.remove("tab-border"))
}
//Remove content
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove("show"))
}
//Listen for the click
tabItems.forEach(item =>{
    item.addEventListener("click", selectItem)
})
