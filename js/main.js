window.addEventListener('load',()=>{
  const tabOpen = document.querySelector('.tab_open')
  const tabClose = document.querySelector('.tab_close')
  const tabMenu = document.querySelector('.tab_menu_div')
  const tabMenuUi = document.querySelector('.tab_menu_ul')
  tabOpen.addEventListener('click',()=>{
    document.querySelector('.tab_menu_div').style.display = 'inline';
  })
  tabClose.addEventListener('click',()=>{
    tabMenu.style.display = 'none'
  })
  tabMenuUi.addEventListener('click', ()=>{
    tabMenu.style.display = 'none'
  })
})