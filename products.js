const products = [
  { name: "Laptop Pro", category: "electronics", price: 1299, rating: 4.6 },
  { name: "Wireless Headphones", category: "electronics", price: 199, rating: 4.8 },
  { name: "Graphic Tee", category: "clothing", price: 25, rating: 4.3 },
  { name: "Denim Jeans", category: "clothing", price: 60, rating: 4.1 }
];

const filterSel = document.getElementById('categoryFilter');
const sortSel = document.getElementById('sortCriteria');
const productList = document.getElementById('productList');

filterSel.addEventListener('change', render);
sortSel.addEventListener('change', render);

function render() {
  let filtered = filterSel.value === 'all' ? products : products.filter(p => p.category === filterSel.value);
  filtered.sort((a, b) => a[sortSel.value] - b[sortSel.value]);

  productList.innerHTML = filtered.map((p) => `
    <div class="product-card">
      <h3>${p.name}</h3>
      <p><strong>Category:</strong> ${p.category}</p>
      <p><strong>Price:</strong> $${p.price}</p>
      <p><strong>Rating:</strong> ${p.rating}</p>
    </div>
  `).join('');
}

window.onload = render;
