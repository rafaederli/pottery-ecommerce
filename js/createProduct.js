const createProduct = (imageSrc, productName, productPrice, dataAttribute = "[data-products]") => {
    let product = document.createElement("div");
    product.classList.add("products__item");

    let image = document.createElement("img");
    image.setAttribute("src", imageSrc);
    image.setAttribute("alt", productName);
    image.classList.add("products__item--image");
    product.appendChild(image);
    
    let description = document.createElement("p");
    description.classList.add("products__item--description");
    description.innerHTML = productName;
    product.appendChild(description);

    let price = document.createElement("p");
    price.classList.add("products__item--price");
    price.innerHTML = `$ ${productPrice.toFixed(2)}`;
    product.appendChild(price);

    let counter = document.createElement("div");
    counter.classList.add("products__item--counter");

    let subtractButton = document.createElement("button");
    subtractButton.innerHTML = "-";
    counter.appendChild(subtractButton);

    let display = document.createElement("input");
    display.setAttribute("type", "text");
    display.setAttribute("name", "");
    display.setAttribute("id", "");
    display.setAttribute("placeholder", "0");
    display.setAttribute("disabled", "");
    counter.appendChild(display);

    let addButton = document.createElement("button");
    addButton.innerHTML = "+";
    counter.appendChild(addButton);
    
    product.appendChild(counter);
    
    let cartButton = document.createElement("button");
    cartButton.classList.add("products__item--button");
    cartButton.innerHTML = "Adicionar ao carrinho";
    product.appendChild(cartButton);

    let products = document.querySelector(dataAttribute);
    products.appendChild(product);
}

export default createProduct;