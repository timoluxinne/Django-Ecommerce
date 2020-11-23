var updateBtns = document.getElementsByClassName('update-btn')
for (let index = 0; index < updateBtns.length; index++) {
    updateBtns[index].addEventListener('click', function(){
        console.log('Item');
        const productId = this.dataset.product
        const action = this.dataset.action
        if (user == 'AnonymousUser'){
            console.log('Not Logged in');
        }else{
            updateCartOrder(productId, action)
        }
    })
}

function updateCartOrder(productId, action){
    console.log('productId', productId, 'action:',action);

    fetch('/update-cart/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({'productId':productId, 'action':action})
    })
    .then(res => res.json())
    .then(data => {
        console.log('Data:', data);
        location.reload()
    })
}