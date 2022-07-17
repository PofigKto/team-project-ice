const $buttonOpen = document.querySelector('.mobile-menu__open-button'),
      $buttonClose = document.querySelector('.menu__close'),
      $menu = document.querySelector('.menu');
$buttonOpen.onclick=(e)=>{
    e.preventDefault()
    $menu.classList.toggle('active')
}
$buttonClose.onclick=(e)=>{
    e.preventDefault()
    $menu.classList.toggle('active')
}