
    const items = document.querySelectorAll('.item-wrap');
    const cart = document.getElementById('cart')
    const cartItems = {};

    items.forEach(function (item) {
        item.addEventListener('click', function () {
            
            const itemName = this.querySelector('p').textContent;
            // 클릭 시 객체값 있는지 체크 있으먄 수량 1 증가
            if (cartItems[itemName]) {
                cartItems[itemName].quantityInput.value = parseInt(cartItems[itemName].quantityInput.value) + 1;
                recalculate(itemname);
            } else {
                // 객체 값 없을시 장바구니에 객체 값 추가
                const itemContainer = document.createElement('div')
                itemContainer.classList.add('list') //스타일 용

                //체크박스 생성
                const itemCheck = document.createElement('input')
                itemCheck.type = 'checkbox'
                itemCheck.min = 0
                itemContainer.appendChild(itemCheck)
                //p문자열 생성
                let newP = document.createElement('p')
                newP.textContent = itemName;
                itemContainer.appendChild(newP);
                //수량칸 생성   
                const itemQuantity = document.createElement('input');
                itemQuantity.type = 'number'
                itemQuantity.value = 1;
                itemQuantity.addEventListener('input', function(){
                    recalculate(itemname);
                })
                itemContainer.appendChild(itemQuantity);
                //이미지 생성
                const itemImage = this.querySelector('img')
                let imgSrc = itemImage.src
                const itemThumbnail = document.createElement('img');
                itemThumbnail.setAttribute('src', imgSrc);
                itemContainer.appendChild(itemThumbnail)

                //가격 가져오기
                const itemPrice = this.querySelector('.price')
                let newI = document.createElement('i')
                let priceText = itemPrice.textContent
                let price = parseInt(priceText.replace(/[^\d]/g,"")) ||0;
                newI.textContent =`${price.toLocaleString()}원`
                itemContainer.appendChild(newI)

                cart.appendChild(itemContainer);

                cartItems[itemName] = { name: itemName, 
                                        quantityInput: itemQuantity,
                                        calculatedPriceElement : newI,
                                        price : price };
                

            }
        })
    })
// 수량 변동시 재계산
function recalculate(itemname){
    const item = cartItems[itemName]
    const quantity = parseInt(item.quantityInput.value) || 0;
    const calculatedPrice = item.price*quantity

    item.calculatedPriceElement.textContent = `${calculatedPrice.toLocaleString()}원`
}