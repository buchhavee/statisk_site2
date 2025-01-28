const products = [
  { id: 1, name: "Leather Jacket", price: 199.99, image: "https://via.placeholder.com/300", soldOut: false },
  { id: 2, name: "Denim Jeans", price: 59.99, image: "https://via.placeholder.com/300", soldOut: false, discount: 20 },
  { id: 3, name: "Sneakers", price: 89.99, image: "https://via.placeholder.com/300", soldOut: true },
  { id: 4, name: "T-Shirt", price: 24.99, image: "https://via.placeholder.com/300", soldOut: false },
  { id: 5, name: "Hoodie", price: 79.99, image: "https://via.placeholder.com/300", soldOut: false, discount: 15 },
  { id: 6, name: "Dress", price: 129.99, image: "https://via.placeholder.com/300", soldOut: false },
  { id: 7, name: "Sunglasses", price: 39.99, image: "https://via.placeholder.com/300", soldOut: true },
  { id: 8, name: "Watch", price: 159.99, image: "https://via.placeholder.com/300", soldOut: false, discount: 10 },
]

function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"

  const imageContainer = document.createElement("div")
  imageContainer.className = "product-image"

  const image = document.createElement("img")
  image.src = product.image
  image.alt = product.name
  imageContainer.appendChild(image)

  if (product.soldOut) {
    const soldOutOverlay = document.createElement("div")
    soldOutOverlay.className = "sold-out-overlay"
    soldOutOverlay.textContent = "Sold Out"
    imageContainer.appendChild(soldOutOverlay)
  } else if (product.discount) {
    const discountBadge = document.createElement("div")
    discountBadge.className = "discount-badge"
    discountBadge.textContent = `${product.discount}% OFF`
    imageContainer.appendChild(discountBadge)
  }

  card.appendChild(imageContainer)

  const info = document.createElement("div")
  info.className = "product-info"

  const name = document.createElement("h2")
  name.className = "product-name"
  name.textContent = product.name
  info.appendChild(name)

  const details = document.createElement("div")
  details.className = "product-details"

  const price = document.createElement("span")
  price.className = "product-price"
  price.textContent = `$${product.price.toFixed(2)}`
  details.appendChild(price)

  const readMore = document.createElement("a")
  readMore.className = "read-more"
  readMore.href = "#"
  readMore.textContent = "Read more"
  details.appendChild(readMore)

  info.appendChild(details)
  card.appendChild(info)

  return card
}

function renderProductGrid() {
  const grid = document.getElementById("product-grid")
  products.forEach((product) => {
    const card = createProductCard(product)
    grid.appendChild(card)
  })
}

document.addEventListener("DOMContentLoaded", renderProductGrid)

