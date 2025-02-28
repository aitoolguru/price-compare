async function fetchPrices() {
    const product = document.getElementById('product').value;
    const amazonUrl = `https://www.amazon.in/s?k=${encodeURIComponent(product)}`;
    const flipkartUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(product)}`;

    document.getElementById('results').innerHTML = `
        <p>Find "${product}" on:</p>
        <ul>
            <li><a href="${amazonUrl}" target="_blank">Amazon</a></li>
            <li><a href="${flipkartUrl}" target="_blank">Flipkart</a></li>
        </ul>
    `;
}
