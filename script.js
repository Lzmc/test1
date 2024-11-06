function addProduct(imageSrc, name, price, discountPrice, sizes, description, images) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const productAnchor = document.createElement('a');
  productAnchor.href = "#";
  productAnchor.addEventListener('click', function (event) {
    event.preventDefault();
    showProductDetails(imageSrc, name, price, discountPrice, sizes, description, images, 'https://example.com');
  });

  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = name;

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('product-name');
  nameDiv.textContent = name;

  const priceDiv = document.createElement('div');
  priceDiv.classList.add('product-price');
  if (discountPrice) {
    priceDiv.innerHTML = `<span class="original-price">$${price.toFixed(2)}</span><span class="discount-price">$${discountPrice.toFixed(2)}</span>`;
  } else {
    priceDiv.textContent = `$${price.toFixed(2)}`;
  }

  productAnchor.appendChild(imgElement);
  productAnchor.appendChild(nameDiv);
  productAnchor.appendChild(priceDiv);

  productDiv.appendChild(productAnchor);
  document.getElementById('product-container').appendChild(productDiv);
}

function showProductDetails(imageSrc, name, price, discountPrice, sizes, description, images, buyLink) {
  const productDetails = document.getElementById('product-details');
  const productContent = document.querySelector('.product-details-content');

  document.getElementById('main-image').src = imageSrc;
  document.getElementById('details-name').textContent = name;

  const priceElement = document.getElementById('details-price');
  if (discountPrice) {
    priceElement.innerHTML = `<span class="original-price">$${price.toFixed(2)}</span><span class="discount-price">$${discountPrice.toFixed(2)} (Discount)</span>`;
  } else {
    priceElement.textContent = `Price: $${price.toFixed(2)}`;
  }

  document.getElementById('details-description').textContent = description;

  const sizeList = document.getElementById('size-list');
  sizeList.innerHTML = '';
  sizes.forEach(size => {
    const li = document.createElement('li');
    li.textContent = size;
    sizeList.appendChild(li);
  });

  const thumbnails = document.getElementById('image-thumbnails');
  thumbnails.innerHTML = '';
  images.forEach(img => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.alt = name;
    thumb.addEventListener('click', () => {
      document.getElementById('main-image').src = img;
    });
    thumbnails.appendChild(thumb);
  });

  const buyButton = document.getElementById('buy-btn');
  buyButton.href = buyLink;

  productDetails.style.display = 'block';
  productDetails.classList.add('fadeIn');
}

document.getElementById('close-btn').addEventListener('click', () => {
  const productDetails = document.getElementById('product-details');
  const productContent = document.querySelector('.product-details-content');

  productContent.style.animation = 'slideOut 0.5s forwards';
  productDetails.style.animation = 'fadeOut 0.5s forwards';

  setTimeout(() => {
    productDetails.style.display = 'none';
    productContent.style.animation = '';
    productDetails.style.animation = '';
  }, 500);
});

// addProduct('IMG.JPG', 'Product', normal-price, discount-price, ['Small', 'Medium', 'Large'], 'Description of Product.', ['IMG.JPG', 'IMG.JPG']);
addProduct('IMG_1809.JPG', 'Cool Graphic Tee', 19.99, 14.99, ['Small', 'Medium', 'Large'], 'A stylish t-shirt made from 100% cotton, perfect for everyday wear.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Summer Vibes T-Shirt', 18.99, null, ['Medium', 'Large'], 'Comfortable and breathable, this t-shirt is ideal for warm weather.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Classic Fit Top', 21.99, 16.99, ['Small', 'Medium'], 'Featuring a classic fit, this t-shirt is a must-have for your wardrobe.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Urban Style Tee', 19.99, 14.99, ['Small', 'Medium', 'Large'], 'A stylish t-shirt made from 100% cotton, perfect for everyday wear.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Beach Day T-Shirt', 18.99, null, ['Medium', 'Large'], 'Comfortable and breathable, this t-shirt is ideal for warm weather.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Essential Fit Top', 21.99, 16.99, ['Small', 'Medium'], 'Featuring a classic fit, this t-shirt is a must-have for your wardrobe.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Chill Layering Tee', 20.49, null, ['Large'], 'Perfect for layering, this versatile t-shirt pairs well with jeans or shorts.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Stylish Statement Shirt', 22.49, 17.49, ['Small', 'Medium', 'Large'], 'With a trendy design, this t-shirt adds a splash of style to any outfit.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Everyday Comfort Tee', 15.99, null, ['Medium'], 'A budget-friendly option that doesn’t compromise on comfort.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Luxury Feel T-Shirt', 25.99, 19.99, ['Small', 'Large'], 'Crafted from premium materials, this t-shirt is soft to the touch.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Eye-Catching Graphic Tee', 17.49, null, ['Medium', 'Large'], 'This t-shirt features a unique graphic that stands out in a crowd.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Weekend Casual Tee', 20.99, 15.99, ['Small', 'Medium'], 'A great fit and feel, this t-shirt is perfect for casual outings.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Laid-Back Oversized Tee', 24.99, null, ['Large'], 'This oversized t-shirt provides a relaxed and modern look.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Forever Classic Shirt', 19.49, 14.49, ['Small', 'Medium', 'Large'], 'An essential piece for every wardrobe, featuring a timeless design.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Easy Layer Tee', 22.99, null, ['Medium'], 'Lightweight and easy to wear, perfect for layering or solo wear.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Sporty Lifestyle Top', 18.99, 13.99, ['Small', 'Large'], 'Sporty and chic, this t-shirt is perfect for workouts or casual days.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Bright Colors Tee', 21.49, null, ['Medium', 'Large'], 'With its vibrant colors, this t-shirt is sure to brighten your day.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Classic Crew Tee', 19.99, 15.49, ['Small', 'Medium'], 'A classic crew neck t-shirt that offers both style and comfort.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Playful Print Tee', 23.99, null, ['Large'], 'This printed t-shirt adds a fun twist to any outfit.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Comfort Fit Tee', 20.99, 16.49, ['Small', 'Medium', 'Large'], 'Designed for comfort, this t-shirt is made to move with you.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Everyday Go-To Tee', 15.49, null, ['Medium'], 'A great choice for everyday wear, offering both style and ease.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Bold Statement Tee', 24.99, 19.49, ['Small', 'Large'], 'This graphic tee is perfect for making a statement wherever you go.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Casual Chic Shirt', 17.99, null, ['Medium', 'Large'], 'Casual yet stylish, this t-shirt is perfect for any occasion.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Soft Comfort Tee', 22.49, 18.99, ['Small', 'Medium'], 'A soft, comfortable t-shirt that’s great for layering or wearing alone.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Minimalist Tee', 19.99, null, ['Large'], 'This t-shirt is perfect for the minimalist who loves clean lines.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Style Meets Comfort Tee', 20.49, 15.99, ['Small', 'Medium', 'Large'], 'An everyday essential that offers both comfort and style.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Comfortable Relaxed Fit', 18.99, null, ['Medium'], 'This relaxed fit t-shirt is designed for maximum comfort.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Versatile Style Tee', 21.99, 16.99, ['Small', 'Large'], 'A must-have for every wardrobe, this t-shirt is versatile and stylish.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Daily Comfort Tee', 15.99, null, ['Medium', 'Large'], 'Budget-friendly and comfortable, this t-shirt is perfect for daily wear.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Trendy Eye-Catching T-Shirt', 25.99, 20.49, ['Small', 'Medium'], 'This trendy t-shirt features a unique design that turns heads.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Functional Classic Tee', 17.49, null, ['Large'], 'A classic t-shirt that is both stylish and functional for any occasion.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Comfortable Lounging Tee', 20.99, 15.99, ['Small', 'Medium'], 'Featuring a comfortable fit, this t-shirt is perfect for lounging or outings.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Quality Style Tee', 24.99, null, ['Large'], 'Crafted with care, this t-shirt combines quality with style.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Fashion Must-Have Tee', 19.49, 14.49, ['Small', 'Medium', 'Large'], 'A fashionable staple that works well with any outfit.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Breathable All-Day Tee', 22.99, null, ['Medium'], 'Soft, breathable fabric makes this t-shirt perfect for all-day wear.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
