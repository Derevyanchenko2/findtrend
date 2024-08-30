// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});


// tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Удаление активного класса у всех табов и контента
        tabs.forEach(item => item.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Добавление активного класса к выбранному табу и соответствующему контенту
        tab.classList.add('active');
        const contentId = tab.getAttribute('data-tab');
        document.getElementById(contentId).classList.add('active');
    });
});


// price switch
document.getElementById('pricing-toggle').addEventListener('change', function() {
  const isChecked = this.checked;
  const prices = document.querySelectorAll('.price');

  prices.forEach(price => {
    const monthlyPrice = price.getAttribute('data-monthly');
    const yearlyPrice = price.getAttribute('data-yearly');

    price.classList.add('fade-out');

    setTimeout(() => {
      price.innerHTML = isChecked ? `${yearlyPrice} <span>/Year</span>` : `${monthlyPrice} <span>/Month</span>`;
      price.classList.remove('fade-out');
    }, 300); 
  });
});
