<script>
        // JavaScript for handling product information
        const products = [
            { name: "Product 1", price: 10, image: "product1.jpg" },
            { name: "Product 2", price: 20, image: "product2.jpg" },
            { name: "Product 3", price: 15, image: "product3.jpg" }
            // Add more products as needed
        ];

        // Function to display products
        function displayProducts() {
            const productsContainer = document.getElementById("products");
            products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                `;
                productsContainer.appendChild(productElement);
            });
        }

        // Function to add item to cart
        function addToCart(name, price) {
            alert(`Added ${name} to cart. Price: $${price}`);
            // Here you would typically add the item to a cart object or perform some other action
        }

        // Call the displayProducts function when the page loads
        window.onload = displayProducts;
    </script>