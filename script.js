
// Navigation Hamburger Menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Subscribe Form
document.getElementById('subscribeForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (/^\S+@\S+\.\S+$/.test(email)) {
        localStorage.setItem('subscriber', email);
        alert('Subscribed successfully!');
    } else {
        alert('Please enter a valid email.');
    }
});

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const item = cart.find(i => i.name ===);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

function viewCart() {
    let message = 'Cart Contents:\n';
    cart.forEach(item => {
        message += `${item.name} - $${item.price} x ${item.quantity}\n`;
    });
    alert(message || 'Cart is empty.');
}

// Customer Feedback

document.getElementById('feedbackForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    sessionStorage.setItem('feedback', JSON.stringify({ name, feedback }));
});

document.getElementById('customForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const order = {
        name: document.getElementById('custName').value,
        date: document.getElementById('date').value,
        details: document.getElementById('details').value
    };
    sessionStorage.setItem('order', JSON.stringify(order));
    alert('Order submitted!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
