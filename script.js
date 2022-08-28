
let myLinks = [];

const inptVal = document.getElementById('inpt');
//console.log(inptVal);
const list = document.getElementById('save');
const bt = document.getElementById('inptBtn');
const del = document.getElementById('delBtn');
const saveTab = document.getElementById('saveBtn');

// let tab = []

let allLinks = JSON.parse(localStorage.getItem('myLinks'));
if (allLinks) {
    myLinks = allLinks
    update(myLinks);
}

bt.addEventListener("click", function () {
    if (inptVal.value != "") {
        myLinks.push(inptVal.value);
    }
    //console.log(myLinks);
    update(myLinks);
    inptVal.value = "";
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
})

saveTab.addEventListener("click", function () {
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks",JSON.stringify(myLinks))
        update(myLinks)
    })
})

del.addEventListener("click", function () {
    //console.log("del");
    myLinks = []
    //console.log(myLinks);
    localStorage.clear();
    update(myLinks)
})

function update(myLinks) {
    let display = ""
    for (let i = 0; i < myLinks.length; i++) {
        display += `<li><a href='${myLinks[i]}' target='_blank'> ${myLinks[i]}</a></li>`
    }
    list.innerHTML = display

}

// myLinks.forEach(function(e) {
//     console.log(e);
// })

