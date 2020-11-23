// Cart
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

if (shipping == 'False'){
    document.getElementById('shipping-info').hidden = true
}
if (user != 'AnonymousUser'){
    document.getElementById('user-info').hidden = true
}
if (shipping == 'False' && user !='AnonymousUser'){
    document.getElementById('shipping-info').hidden = true
    document.getElementById('user-info').hidden = true
}

// Checkout
const form = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('checkout-btn').hidden = true
    document.getElementById('payment-info').hidden = false
})

document.getElementById('payment-btn').addEventListener('click', function(e){
    e.preventDefault();
    processOrder()
})


function processOrder() {
    console.log('Form Submitted');
    alert('Payment successfull!')

    const userFormData = {
        'name':null,
        'email': null,
        'total': total
    }

    const shippingInfo = {
        'address':address,
        'city':city,
        'state':state,
        'zipcode':zipcode
    }

    if (shipping != 'False'){
        shippingInfo.address = form.address.value
        shippingInfo.city = form.city.value
        shippingInfo.state = form.state.value
        shippingInfo.zipcode = form.zipcode.value
    }

    if(user == 'AnonymousUser'){
        userFormData.name = form.name.value
        userFormData.email = form.email.value
    }
    
    fetch('/process-order/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({'form':userFormData, 'shipping':shippingInfo})
    })
    .then(res => res.json())
    .then(data => {
        console.log('Data:', data);
        console.log('UserInfo:', userFormData );
        console.log('ShippingInfo:', shippingInfo );
        window.location.href = storeUrl;
    })
}