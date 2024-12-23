export const locators = {
    // Login Page
    login: {
        email: '[data-qa="login-email"]',
        password: '[data-qa="login-password"]',
        submit: '[data-qa= "login-button"]',
    },

    products: {
        goProduts: 'a[href="/products"]',
        searchProduct: '#search_product',
        submitSearc: '#submit_search',
    },

    cart: {
        viewCart: 'a[href="/view_cart"]',
        deleteProductsCart: '.cart_quantity_delete',
        addToCart: '[data-product-id="13"]',
        checkMessage: '[id="cartModal"] [class="text-center"]',
        messageDisplayed: 'Your product has been added to cart.',
        cardModal: '#cartModal',
        descriptionProduct: 'tr#product-13 .cart_description h4 a',
        proceedToCheckout: '[class="btn btn-default check_out"]',

    },





};