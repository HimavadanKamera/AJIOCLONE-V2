document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.add-to-cart').forEach((btn) => {
    btn.removeAttribute('onclick'); 

    btn.addEventListener('click', function () {
      const product = btn.closest('.product');
      const name = product.querySelector('h2')?.innerText.trim();
      const priceText = product.querySelector('p')?.innerText || '';
      const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));

      if (name && !isNaN(price)) {
        sessionStorage.setItem('cartProduct', JSON.stringify({ name, price }));
        window.location.href = 'cart.html';
      } else {
        alert("Could not read product info.");
      }
    });
  });
});
