const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

function addLeftWidth(tabActive){
    const line = $('.tabs .line');
    line.style.left = tabActive.offsetLeft + 'px';
    line.style.width = tabActive.offsetWidth + 'px';
}
const tabActive = $('.tab-item.active');
addLeftWidth(tabActive); 
// const tabActive = $('.tab-item.active');
// const line = $('.tabs .line');
// line.style.left = tabActive.offsetLeft + 'px';
// line.style.width = tabActive.offsetWidth + 'px';
tabs.forEach((tab, index) => {
    tab.onclick = function(){

        $('.tab-item.active').classList.remove('active');

        $('.tab-pane.active').classList.remove('active');

        tab.classList.add('active');
        // line.style.left = tab.offsetLeft + 'px';
        // line.style.width = tab.offsetWidth + 'px';
        addLeftWidth(tab);

        const paneActive = panes[index];
        paneActive.classList.add('active');

    }
});
