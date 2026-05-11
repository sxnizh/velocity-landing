const tabBtns = document.querySelectorAll(".tab__button");
//console.log(tabBtns);
const tabPanels = document.querySelectorAll(".tab__panel")
//console.log(tabPanels);

function hideTabs(){
    tabBtns.forEach(tabBtn => tabBtn.classList.remove("tab__button--active"));
    tabPanels.forEach(tabPanel => tabPanel.classList.add("hide"));
}

function showTab(index){
    tabBtns[index].classList.add('tab__button--active');
    tabPanels[index].classList.remove("hide");
}

hideTabs();
showTab(0);

tabBtns.forEach((tabBtn,index) => tabBtn.addEventListener('click',() => {
        hideTabs();
        showTab(index);
    })
)

//Anchors

const ancs = document.querySelectorAll(".header__nav a");
//console.log(ancs);

ancs.forEach(anc => {
    anc.addEventListener('click', e => {
        e.preventDefault();
        
        let id = anc.getAttribute('href');
        let elem = document.querySelector(id);
        //console.log(elem);

        window.scroll({
            top: elem.offsetTop - 76,
            behavior: 'smooth',
        })
    })
})