// external js: masonry.pkgd.js

var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  columnWidth: 1,
  stamp: '.stamp',
  gutter: 2
});

grid.addEventListener( 'click', function( event ) {
  // don't proceed if item was not clicked on
  if ( !matchesSelector( event.target, '.grid-item' ) ) {
    return;
  }
  // change size of item via class
  event.target.classList.toggle('grid-item--gigante');
  // trigger layout
  msnry.layout();
});