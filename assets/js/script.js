     // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Simple filter functionality for demonstration
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // In a real implementation, you would filter products here
            });
        });
        
        // Testimonial Slider
        $(document).ready(function(){
            $('.testimonials-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
            });
        });

        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            if (searchTerm.length > 2) {
                const filteredProducts = products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) || 
                    product.category.toLowerCase().includes(searchTerm)
                );
                
                displaySearchResults(filteredProducts);
            } else {
                searchResults.style.display = 'none';
            }
        });

        // Display search results
        function displaySearchResults(results) {
            if (results.length > 0) {
                searchResults.innerHTML = '';
                results.forEach(product => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="search-result-img">
                        <div class="search-result-info">
                            <h4>${product.name}</h4>
                            <p>${product.category}</p>
                            <div class="search-result-price">${product.price}</div>
                        </div>
                    `;
                    item.addEventListener('click', function() {
                        // In a real implementation, this would navigate to the product page
                        window.location.href = `#product-${product.id}`;
                        searchResults.style.display = 'none';
                        searchInput.value = product.name;
                    });
                    searchResults.appendChild(item);
                });
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="no-results">No products found</div>';
                searchResults.style.display = 'block';
            }
        }

        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });




// Product Data (Indian market prices)
const products = [
    // Fruits
    {
        id: 1,
        name: "Alphonso Mango",
        category: "fruits",
        price: 450,
        originalPrice: 500,
        image: "https://m.media-amazon.com/images/I/61YyQy5QZQL._SL1500_.jpg",
        rating: 4.8,
        organic: true,
        unit: "kg",
        stock: 15
    },
    {
        id: 2,
        name: "Banana - Yelakki",
        category: "fruits",
        price: 40,
        originalPrice: 50,
        image: "https://m.media-amazon.com/images/I/61pZRf6XURL._SL1500_.jpg",
        rating: 4.2,
        organic: false,
        unit: "dozen",
        stock: 30
    },
    {
        id: 3,
        name: "Apple - Shimla",
        category: "fruits",
        price: 120,
        originalPrice: 150,
        image: "https://m.media-amazon.com/images/I/81xQBb5jRzL._SL1500_.jpg",
        rating: 4.5,
        organic: true,
        unit: "kg",
        stock: 20
    },
    {
        id: 4,
        name: "Pomegranate",
        category: "fruits",
        price: 90,
        originalPrice: 120,
        image: "https://m.media-amazon.com/images/I/61bRMvxJJ5L._SL1500_.jpg",
        rating: 4.3,
        organic: false,
        unit: "kg",
        stock: 18
    },
    {
        id: 5,
        name: "Watermelon",
        category: "fruits",
        price: 30,
        originalPrice: 40,
        image: "https://m.media-amazon.com/images/I/71Y1S1m-QAL._SL1500_.jpg",
        rating: 4.0,
        organic: false,
        unit: "kg",
        stock: 12
    },
    {
        id: 6,
        name: "Guava",
        category: "fruits",
        price: 60,
        originalPrice: 80,
        image: "https://m.media-amazon.com/images/I/61oYzZ+QpSL._SL1500_.jpg",
        rating: 4.1,
        organic: true,
        unit: "kg",
        stock: 25
    },
    // Vegetables
    {
        id: 7,
        name: "Tomato",
        category: "vegetables",
        price: 25,
        originalPrice: 40,
        image: "https://m.media-amazon.com/images/I/61YyQy5QZQL._SL1500_.jpg",
        rating: 3.9,
        organic: false,
        unit: "kg",
        stock: 40
    },
    {
        id: 8,
        name: "Potato",
        category: "vegetables",
        price: 30,
        originalPrice: 35,
        image: "https://m.media-amazon.com/images/I/61pZRf6XURL._SL1500_.jpg",
        rating: 4.0,
        organic: false,
        unit: "kg",
        stock: 50
    },
    {
        id: 9,
        name: "Onion",
        category: "vegetables",
        price: 35,
        originalPrice: 45,
        image: "https://m.media-amazon.com/images/I/81xQBb5jRzL._SL1500_.jpg",
        rating: 3.8,
        organic: false,
        unit: "kg",
        stock: 45
    },
    {
        id: 10,
        name: "Carrot - Organic",
        category: "vegetables",
        price: 60,
        originalPrice: 70,
        image: "https://m.media-amazon.com/images/I/61bRMvxJJ5L._SL1500_.jpg",
        rating: 4.4,
        organic: true,
        unit: "kg",
        stock: 22
    },
    {
        id: 11,
        name: "Cucumber",
        category: "vegetables",
        price: 20,
        originalPrice: 25,
        image: "https://m.media-amazon.com/images/I/71Y1S1m-QAL._SL1500_.jpg",
        rating: 3.7,
        organic: false,
        unit: "kg",
        stock: 30
    },
    {
        id: 12,
        name: "Spinach",
        category: "vegetables",
        price: 15,
        originalPrice: 20,
        image: "https://m.media-amazon.com/images/I/61oYzZ+QpSL._SL1500_.jpg",
        rating: 4.2,
        organic: true,
        unit: "bunch",
        stock: 35
    },
    // Juices
    {
        id: 13,
        name: "Orange Juice - Fresh",
        category: "juices",
        price: 120,
        originalPrice: 150,
        image: "https://m.media-amazon.com/images/I/61YyQy5QZQL._SL1500_.jpg",
        rating: 4.6,
        organic: false,
        unit: "500ml",
        stock: 15
    },
    {
        id: 14,
        name: "Pomegranate Juice - Organic",
        category: "juices",
        price: 180,
        originalPrice: 200,
        image: "https://m.media-amazon.com/images/I/61pZRf6XURL._SL1500_.jpg",
        rating: 4.7,
        organic: true,
        unit: "500ml",
        stock: 10
    },
    {
        id: 15,
        name: "Mixed Fruit Juice",
        category: "juices",
        price: 150,
        originalPrice: 180,
        image: "https://m.media-amazon.com/images/I/81xQBb5jRzL._SL1500_.jpg",
        rating: 4.5,
        organic: false,
        unit: "500ml",
        stock: 12
    },
    {
        id: 16,
        name: "Watermelon Juice",
        category: "juices",
        price: 90,
        originalPrice: 120,
        image: "https://m.media-amazon.com/images/I/61bRMvxJJ5L._SL1500_.jpg",
        rating: 4.3,
        organic: false,
        unit: "500ml",
        stock: 8
    },
    {
        id: 17,
        name: "Apple Juice - Organic",
        category: "juices",
        price: 200,
        originalPrice: 250,
        image: "https://m.media-amazon.com/images/I/71Y1S1m-QAL._SL1500_.jpg",
        rating: 4.8,
        organic: true,
        unit: "500ml",
        stock: 5
    },
    {
        id: 18,
        name: "Carrot-Beetroot Juice",
        category: "juices",
        price: 140,
        originalPrice: 160,
        image: "https://m.media-amazon.com/images/I/61oYzZ+QpSL._SL1500_.jpg",
        rating: 4.4,
        organic: true,
        unit: "500ml",
        stock: 7
    }
];

// DOM Elements
const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
const priceRange = document.getElementById('priceRange');
const priceMinValue = document.getElementById('priceMinValue');
const priceMaxValue = document.getElementById('priceMaxValue');
const sortBy = document.getElementById('sortBy');
const resetFilters = document.getElementById('resetFilters');
const viewButtons = document.querySelectorAll('.view-btn');
const cartCount = document.getElementById('cartCount');

// Cart
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', filterProducts);
    
    // Filter checkboxes
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
    
    // Price range
    priceRange.addEventListener('input', function() {
        priceMaxValue.textContent = this.value;
        filterProducts();
    });
    
    // Sort by
    sortBy.addEventListener('change', filterProducts);
    
    // Reset filters
    resetFilters.addEventListener('click', resetAllFilters);
    
    // View buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            productContainer.className = 'row';
            if (this.dataset.view === 'list') {
                productContainer.classList.add('list-view');
            } else {
                productContainer.classList.remove('list-view');
            }
            filterProducts();
        });
    });
}

// Filter products based on search, filters and sort
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const maxPrice = parseInt(priceRange.value);
    const selectedCategories = Array.from(document.querySelectorAll('.filter-checkbox[type="checkbox"]:checked')).map(cb => cb.value);
    const organicOnly = document.getElementById('filterOrganic').checked;
    const discountOnly = document.getElementById('filterDiscount').checked;
    const sortOption = sortBy.value;
    
    let filteredProducts = products.filter(product => {
        // Search term
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        
        // Price
        const matchesPrice = product.price <= maxPrice;
        
        // Category
        const matchesCategory = selectedCategories.includes(product.category);
        
        // Organic
        const matchesOrganic = !organicOnly || (organicOnly && product.organic);
        
        // Discount
        const matchesDiscount = !discountOnly || (discountOnly && product.originalPrice > product.price);
        
        return matchesSearch && matchesPrice && matchesCategory && matchesOrganic && matchesDiscount;
    });
    
    // Sort products
    filteredProducts = sortProducts(filteredProducts, sortOption);
    
    // Render filtered products
    renderProducts(filteredProducts);
}

// Sort products
function sortProducts(products, sortOption) {
    switch(sortOption) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'name':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        case 'discount':
            return [...products].sort((a, b) => {
                const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
                const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
                return discountB - discountA;
            });
        default: // popularity
            return [...products].sort((a, b) => b.rating - a.rating);
    }
}

// Reset all filters
function resetAllFilters() {
    // Reset search
    searchInput.value = '';
    
    // Reset checkboxes
    filterCheckboxes.forEach(checkbox => {
        if (checkbox.type === 'checkbox') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
    
    // Reset price range
    priceRange.value = priceRange.max;
    priceMaxValue.textContent = priceRange.max;
    
    // Reset sort
    sortBy.value = 'popularity';
    
    // Render all products
    renderProducts(products);
}

// Render products
function renderProducts(productsToRender) {
    if (productsToRender.length === 0) {
        productContainer.innerHTML = '<div class="col-12 text-center py-5"><h4>No products found matching your criteria</h4><p>Try adjusting your filters or search term</p></div>';
        return;
    }
    
    productContainer.innerHTML = '';
    
    productsToRender.forEach(product => {
        const discountPercentage = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
        
        const productCard = document.createElement('div');
        productCard.className = 'col-md-6 col-lg-4';
        productCard.innerHTML = `
            <div class="card product-card h-100">
                <div class="product-img-container">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    ${product.organic ? '<span class="badge badge-organic rounded-pill"><i class="fas fa-seedling me-1"></i>Organic</span>' : ''}
                    ${discountPercentage > 0 ? `<span class="badge badge-discount rounded-pill">${discountPercentage}% OFF</span>` : ''}
                </div>
                <div class="product-info">
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-category text-uppercase">${product.category} • ${product.unit}</div>
                    <div class="product-price">
                        ₹${product.price}
                        ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${generateStarRating(product.rating)}
                        <span class="text-muted ms-1">(${product.rating})</span>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        productContainer.appendChild(productCard);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId);
        });
    });
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        } else {
            alert(`Only ${product.stock} ${product.name} available in stock!`);
            return;
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    showToast(`${product.name} added to cart`);
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show toast notification
function showToast(message) {
    // In a real app, you might use Bootstrap's toast component
    const toast = document.createElement('div');
    toast.className = 'position-fixed bottom-0 end-0 p-3';
    toast.innerHTML = `
        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-success text-white">
                <strong class="me-auto">Success</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}