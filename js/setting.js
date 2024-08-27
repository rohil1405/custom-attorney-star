document.addEventListener('DOMContentLoaded', function() {
  const mobileBtn = document.querySelector('.mobile-menu');
  const menu = document.querySelector('.mobile-nav ');

  mobileBtn.addEventListener('click', function() {
      if (menu.style.display === 'block') {
          menu.style.display = 'none';
      } else {
          menu.style.display = 'block';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropBtn = document.querySelector('.header-pages');
    const headerPage = document.querySelector('.header-page-content');
  
    dropBtn.addEventListener('click', function() {
        if (headerPage.style.display === 'block') {
            headerPage.style.display = 'none';
        } else {
            headerPage.style.display = 'block';
        }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dropBtn = document.querySelector('.mobile-menu-link.pages');
    const mobilePage = document.querySelector('.mobile-page-content');
  
    dropBtn.addEventListener('click', function() {
        if (mobilePage.style.display === 'block') {
            mobilePage.style.display = 'none';
        } else {
            mobilePage.style.display = 'block';
        }
    });
  });

