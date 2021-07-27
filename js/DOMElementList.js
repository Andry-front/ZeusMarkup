const headerDOM = `<header class="container flex">
            <div class="logo">
                <a href="/">
                    <img src="../images/logo.png" alt="Logo">
                </a>
            </div>


            <div class="product-form-wrapper">
                <form id="product" class="flex" action="/">
                    <label for="search">Product</label>
                    <input type="text" id="search" name="search" placeholder="Search">
                    <button class="flex">Search</button>
                </form>
            </div>

            <div class="panel flex">
                <div class="basket filled">
                    <button id="basket-icon" class="flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.11111 17.5558C7.19063 17.5558 6.44444 18.302 6.44444 19.2224C6.44444 20.1429 7.19063 20.8891 8.11111 20.8891C9.0316 20.8891 9.77778 20.1429 9.77778 19.2224C9.77778 18.302 9.0316 17.5558 8.11111 17.5558ZM18.1111 17.5558C17.1906 17.5558 16.4444 18.302 16.4444 19.2224C16.4444 20.1429 17.1906 20.8891 18.1111 20.8891C19.0316 20.8891 19.7778 20.1429 19.7778 19.2224C19.7778 18.302 19.0316 17.5558 18.1111 17.5558ZM21.7753 4.66459C21.5632 4.38359 21.2398 4.22244 20.8877 4.22244H6.23462L6.15201 3.78876C6.07715 3.39567 5.73344 3.11133 5.33333 3.11133H2.83333C2.37313 3.11133 2 3.48438 2 3.94466C2 4.40487 2.37313 4.77799 2.83333 4.77799H4.64378L6.73694 15.7672C6.81181 16.1603 7.15552 16.4447 7.55563 16.4447H18.9444C19.4047 16.4447 19.7778 16.0715 19.7778 15.6113C19.7778 15.1511 19.4047 14.778 18.9444 14.778H8.2451L7.92767 13.1113H18.9834C19.4794 13.1113 19.9152 12.7825 20.0516 12.3057L21.9565 5.639C22.0531 5.30046 21.9869 4.94563 21.7753 4.66459ZM18.5642 11.4447H7.61021L6.55208 5.88911H20.1517L18.5642 11.4447Z" fill="#7C8C9E"/>
                        </svg>
                    </button>

                    <div class="quantity">
                        <p>14</p>
                    </div>
                </div>
                <div class="user">
                    <button class="flex">
                        <img src="../images/user-icon.svg" alt="user">
                    </button>
                </div>
            </div>

            <!-- PANEL SING IN-->
<!--            <div class="panel-sign-in flex">-->
<!--                <a href="/">Sign in</a>-->
<!--            </div>-->
            <!--/ PANEL SING IN-->
        </header>`;
const menuDOM = `<div id="menu" class="container">
            <div class="menu-wrapper flex">
                <div class="categories-list">
                    <div class="headline_categories-list flex">
                        <div class="categories-list-icon flex">
                            <img src="../images/categories-icon.svg" alt="Icon">
                        </div>
                        <p>Category</p>
                    </div>
                    <ul>
                        <li>
                            <a href="/">Agriculture</a>
                        </li>
                        <li>
                            <a href="/">Apparel</a>
                        </li>
                        <li>
                            <a href="/">Automobiles & Motorcycles</a>
                        </li>
                        <li>
                            <a href="/">Beauty & Personal Care</a>
                        </li>
                        <li>
                            <a href="/">Chemicals</a>
                        </li>
                        <li>
                            <a href="/">Construction & Real Estate</a>
                        </li>
                        <li>
                            <a href="/">Consumer Electronics</a>
                        </li>
                        <li>
                            <a href="/">Electrical Equipment & Supplies</a>
                        </li>
                        <li>
                            <a href="/">Electronic Components & Supplies</a>
                        </li>
                        <li>
                            <a href="/">Energy</a>
                        </li>
                        <li>
                            <a href="/">Environment</a>
                        </li>
                        <li>
                            <a href="/">Fashion Accessories</a>
                        </li>
                        <li>
                            <a href="/">Food & Beverage</a>
                        </li>
                        <li>
                            <a href="/">Furniture</a>
                        </li>
                        <li>
                            <a href="/">Gifts & Crafts</a>
                        </li>
                        <li>
                            <a href="/">Hardware</a>
                        </li>
                        <li>
                            <a href="/">Health & Medical</a>
                        </li>
                        <li>
                            <a href="/">Home & Garden</a>
                        </li>
                        <li>
                            <a href="/">Home Appliances</a>
                        </li>
                        <li>
                            <a href="/">Lights & Lighting</a>
                        </li>
                        <li>
                            <a href="/">Luggage</a>
                        </li>
                        <li>
                            <a href="/">Machinery</a>
                        </li>
                        <li>
                            <a href="/">Measurement & Analysis Instruments</a>
                        </li>
                        <li>
                            <a href="/">Minerals & Metallurgy</a>
                        </li>
                        <li>
                            <a href="/">Office & School Supplies</a>
                        </li>
                        <li>
                            <a href="/">Packaging & Printing</a>
                        </li>
                        <li>
                            <a href="/">Rubber & Plastics</a>
                        </li>
                        <li>
                            <a href="/">Security & Protection</a>
                        </li>
                        <li>
                            <a href="/">Shoes & Accessories</a>
                        </li>
                        <li>
                            <a href="/">Sports & Entertainment</a>
                        </li>
                        <li>
                            <a href="/">Telecommunications</a>
                        </li>
                        <li>
                            <a href="/">Textiles & Leather Products</a>
                        </li>
                        <li>
                            <a href="/">Timepieces</a>
                        </li>
                        <li>
                            <a href="/">Tools</a>
                        </li>
                        <li>
                            <a href="/">Toys & Hobbies</a>
                        </li>
                        <li>
                            <a href="/">Transportation</a>
                        </li>
                    </ul>
                </div>


                <div class="menu-list">
                    <div id="mobile-icon" class="flex">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul id="menu-content" class="flex">
                        <li>
                            <a href="/">How it works</a>
                        </li>
                        <li>
                            <a href="/">Marketplace</a>
                        </li>
                        <li>
                            <a href="/">News</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`;
const footerDOM = `<footer>
            <div class="container flex">
                <div class="panel-m">
                    <div class="social-box">
                        <ul class="flex">
                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <span><img src="../images/youtube-icon.svg" alt="Youtube"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <span><img src="../images/instagram-icon.svg" alt="Instagram"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <span><img src="../images/twitter-icon.svg" alt="Twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <span><img src="../images/facebook-icon.svg" alt="Facebook"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <span><img src="../images/linkedin-icon.svg" alt="Linkedin"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="panel-l">
                    <ul class="flex">
                        <li>
                            <a href="/">
                                <span>About US</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>Terms of Service</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>Copyright</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>Support</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>Help</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="panel-r flex">
                    <div class="link-box">
                        <ul class="flex">
                            <li>
                                <a href="mailto:seazeus@support.mail.com">
                                    <span><img src="../images/mail-to.svg" alt="Mail To"></span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+123-000-0000">
                                    <span><img src="../images/phone.svg" alt="Phone"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="rights-text">
                        <p>© SeaZeus. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>`;
const modalCartDOM = `<div id="modal-cart" class="flex">
            <div class="box-cart-wrapper flex">
                <div class="box-cart flex">
                    <div class="headline flex">
                        <div class="info-box">
                            <p>You cart</p>
                            <p>Quantity of goods: 8</p>
                        </div>

                        <div class="close">
                            <img src="../images/close-icon.svg" alt="Close">
                        </div>
                    </div>

                    <div class="cart-list">
                        <div class="cart-item flex">
                            <div class="checked-box">
                                <label>
                                    <input type="checkbox" name="checkbox" value="css" checked/>
                                    <span></span>
                                </label>
                            </div>

                            <div class="img-wrapper flex">
                                <img src="../images/product-default.png" alt="Product name!">
                            </div>

                            <div class="product-info-box">
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="name">
                                    <a href="/">Scooter Kirgen mx480 Watt</a>
                                </div>

                                <div class="color flex">
                                    <p class="title">Color</p>
                                    <div class="box-color" style="background: #D1DBE1;"></div>
                                    <p class="name">silver</p>
                                </div>

                                <div class="quantity flex">
                                    <p class="title">Quantity</p>
                                    <div class="quantity-box flex">
                                        <label>-</label>
                                        <input class="quantity-input" type="number" name="quantity" min="1" max="150" value="1">
                                        <label>+</label>
                                    </div>
                                </div>

                                <div class="price flex">
                                    <p class="title">Price per unit</p>
                                    <p class="price-unit">
                                        <span>$</span>
                                        1500
                                    </p>
                                </div>

                                <div class="order flex">
                                    <button>Order</button>

                                    <div class="heart-box box-event-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                            <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="basket-box">
                                <img src="../images/basket.svg" alt="Basket">
                            </div>
                        </div>
                        <div class="cart-item flex">
                            <div class="checked-box">
                                <label>
                                    <input type="checkbox" name="checkbox" value="css" checked/>
                                    <span></span>
                                </label>
                            </div>

                            <div class="img-wrapper flex">
                                <img src="https://content1.rozetka.com.ua/goods/images/big_tile/144249735.jpg" alt="Product name!">
                            </div>

                            <div class="product-info-box">
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="name">
                                    <a href="/">Scooter Kirgen mx480 Watt</a>
                                </div>

                                <div class="color flex">
                                    <p class="title">Color</p>
                                    <div class="box-color" style="background: #D1DBE1;"></div>
                                    <p class="name">silver</p>
                                </div>

                                <div class="quantity flex">
                                    <p class="title">Quantity</p>
                                    <div class="quantity-box flex">
                                        <label>-</label>
                                        <input class="quantity-input" type="number" name="quantity" min="1" max="150" value="150">
                                        <label>+</label>
                                    </div>
                                </div>

                                <div class="price flex">
                                    <p class="title">Price per unit</p>
                                    <p class="price-unit">
                                        <span>$</span>
                                        1500
                                    </p>
                                </div>

                                <div class="order flex">
                                    <button>Order</button>

                                    <div class="heart-box active box-event-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                            <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="basket-box">
                                <img src="../images/basket.svg" alt="Basket">
                            </div>
                        </div>
                        <div class="cart-item flex">
                            <div class="checked-box">
                                <label>
                                    <input type="checkbox" name="checkbox" value="css" checked/>
                                    <span></span>
                                </label>
                            </div>

                            <div class="img-wrapper flex">
                                <img src="../images/product-default.png" alt="Product name!">
                            </div>

                            <div class="product-info-box">
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="name">
                                    <a href="/">Scooter Kirgen mx480 Watt</a>
                                </div>

                                <div class="color flex">
                                    <p class="title">Color</p>
                                    <div class="box-color" style="background: #D1DBE1;"></div>
                                    <p class="name">silver</p>
                                </div>

                                <div class="quantity flex">
                                    <p class="title">Quantity</p>
                                    <div class="quantity-box flex">
                                        <label>-</label>
                                        <input class="quantity-input" type="number" name="quantity" min="1" max="150" value="1">
                                        <label>+</label>
                                    </div>
                                </div>

                                <div class="price flex">
                                    <p class="title">Price per unit</p>
                                    <p class="price-unit">
                                        <span>$</span>
                                        1500
                                    </p>
                                </div>

                                <div class="order flex">
                                    <button>Order</button>

                                    <div class="heart-box box-event-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                            <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="basket-box">
                                <img src="../images/basket.svg" alt="Basket">
                            </div>
                        </div>
                        <div class="cart-item flex">
                            <div class="checked-box">
                                <label>
                                    <input type="checkbox" name="checkbox" value="css" checked/>
                                    <span></span>
                                </label>
                            </div>

                            <div class="img-wrapper flex">
                                <img src="../images/product-default.png" alt="Product name!">
                            </div>

                            <div class="product-info-box">
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="name">
                                    <a href="/">Scooter Kirgen mx480 Watt</a>
                                </div>

                                <div class="color flex">
                                    <p class="title">Color</p>
                                    <div class="box-color" style="background: #D1DBE1;"></div>
                                    <p class="name">silver</p>
                                </div>

                                <div class="quantity flex">
                                    <p class="title">Quantity</p>
                                    <div class="quantity-box flex">
                                        <label>-</label>
                                        <input class="quantity-input" type="number" name="quantity" min="1" max="150" value="1">
                                        <label>+</label>
                                    </div>
                                </div>

                                <div class="price flex">
                                    <p class="title">Price per unit</p>
                                    <p class="price-unit">
                                        <span>$</span>
                                        1500
                                    </p>
                                </div>

                                <div class="order flex">
                                    <button>Order</button>

                                    <div class="heart-box box-event-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                            <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="basket-box">
                                <img src="../images/basket.svg" alt="Basket">
                            </div>
                        </div>
                        <div class="cart-item flex">
                            <div class="checked-box">
                                <label>
                                    <input type="checkbox" name="checkbox" value="css" checked/>
                                    <span></span>
                                </label>
                            </div>

                            <div class="img-wrapper flex">
                                <img src="../images/product-default.png" alt="Product name!">
                            </div>

                            <div class="product-info-box">
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="name">
                                    <a href="/">Scooter Kirgen mx480 Watt</a>
                                </div>

                                <div class="color flex">
                                    <p class="title">Color</p>
                                    <div class="box-color" style="background: #D1DBE1;"></div>
                                    <p class="name">silver</p>
                                </div>

                                <div class="quantity flex">
                                    <p class="title">Quantity</p>
                                    <div class="quantity-box flex">
                                        <label>-</label>
                                        <input class="quantity-input" type="number" name="quantity" min="1" max="150" value="1">
                                        <label>+</label>
                                    </div>
                                </div>

                                <div class="price flex">
                                    <p class="title">Price per unit</p>
                                    <p class="price-unit">
                                        <span>$</span>
                                        1500
                                    </p>
                                </div>

                                <div class="order flex">
                                    <button>Order</button>

                                    <div class="heart-box box-event-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                            <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="basket-box">
                                <img src="../images/basket.svg" alt="Basket">
                            </div>
                        </div>
                        <div class="cart-item flex">
                            <div class="checked-box">
                                <label>
                                    <input type="checkbox" name="checkbox" value="css" checked/>
                                    <span></span>
                                </label>
                            </div>

                            <div class="img-wrapper flex">
                                <img src="../images/product-default.png" alt="Product name!">
                            </div>

                            <div class="product-info-box">
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="name">
                                    <a href="/">Scooter Kirgen mx480 Watt</a>
                                </div>

                                <div class="color flex">
                                    <p class="title">Color</p>
                                    <div class="box-color" style="background: #D1DBE1;"></div>
                                    <p class="name">silver</p>
                                </div>

                                <div class="quantity flex">
                                    <p class="title">Quantity</p>
                                    <div class="quantity-box flex">
                                        <label>-</label>
                                        <input class="quantity-input" type="number" name="quantity" min="1" max="150" value="1">
                                        <label>+</label>
                                    </div>
                                </div>

                                <div class="price flex">
                                    <p class="title">Price per unit</p>
                                    <p class="price-unit">
                                        <span>$</span>
                                        1500
                                    </p>
                                </div>

                                <div class="order flex">
                                    <button>Order</button>

                                    <div class="heart-box box-event-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                            <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="basket-box">
                                <img src="../images/basket.svg" alt="Basket">
                            </div>
                        </div>
                        <div class="cart-item flex">
                            <div class="checked-box">
                                <label>
                                    <input type="checkbox" name="checkbox" value="css" checked/>
                                    <span></span>
                                </label>
                            </div>

                            <div class="img-wrapper flex">
                                <img src="../images/product-default.png" alt="Product name!">
                            </div>

                            <div class="product-info-box">
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="name">
                                    <a href="/">Scooter Kirgen mx480 Watt</a>
                                </div>

                                <div class="color flex">
                                    <p class="title">Color</p>
                                    <div class="box-color" style="background: #D1DBE1;"></div>
                                    <p class="name">silver</p>
                                </div>

                                <div class="quantity flex">
                                    <p class="title">Quantity</p>
                                    <div class="quantity-box flex">
                                        <label>-</label>
                                        <input class="quantity-input" type="number" name="quantity" min="1" max="150" value="1">
                                        <label>+</label>
                                    </div>
                                </div>

                                <div class="price flex">
                                    <p class="title">Price per unit</p>
                                    <p class="price-unit">
                                        <span>$</span>
                                        1500
                                    </p>
                                </div>

                                <div class="order flex">
                                    <button>Order</button>

                                    <div class="heart-box box-event-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                            <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="basket-box">
                                <img src="../images/basket.svg" alt="Basket">
                            </div>
                        </div>
                        <div class="cart-item flex">
                            <div class="checked-box">
                                <label>
                                    <input type="checkbox" name="checkbox" value="css" checked/>
                                    <span></span>
                                </label>
                            </div>

                            <div class="img-wrapper flex">
                                <img src="../images/product-default.png" alt="Product name!">
                            </div>

                            <div class="product-info-box">
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="name">
                                    <a href="/">Scooter Kirgen mx480 Watt</a>
                                </div>

                                <div class="color flex">
                                    <p class="title">Color</p>
                                    <div class="box-color" style="background: #D1DBE1;"></div>
                                    <p class="name">silver</p>
                                </div>

                                <div class="quantity flex">
                                    <p class="title">Quantity</p>
                                    <div class="quantity-box flex">
                                        <label>-</label>
                                        <input class="quantity-input" type="number" name="quantity" min="1" max="150" value="1">
                                        <label>+</label>
                                    </div>
                                </div>

                                <div class="price flex">
                                    <p class="title">Price per unit</p>
                                    <p class="price-unit">
                                        <span>$</span>
                                        1500
                                    </p>
                                </div>

                                <div class="order flex">
                                    <button>Order</button>

                                    <div class="heart-box box-event-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                            <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="basket-box">
                                <img src="../images/basket.svg" alt="Basket">
                            </div>
                        </div>
                    </div>

                    <div class="panel-cart flex">
                        <a class="flex" href="/">Continue shopping</a>
                        <a class="flex" href="/">
                            <span class="text">Order All</span>
                            <span class="icon">
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25684 7L2.62571 12.6311C2.11433 13.1425 1.28522 13.1425 0.773841 12.6311C0.262461 12.1197 0.26246 11.2906 0.773841 10.7793L4.55309 7L0.773841 3.22075C0.262461 2.70937 0.262461 1.88026 0.773841 1.36888C1.28522 0.857495 2.11433 0.857495 2.62571 1.36888L8.25684 7Z" fill="white"/>
                            </svg>
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

// Marketplace
const productBoxDOM = `<div id="product-box" class="flex"></div>`;
const sortSelectDOM = `<div class="sort-select flex">
                    <div class="select-box flex box-event-active">
                        <p class="headline">
                            Sort by <span>Relevancy</span>
                        </p>
                        <div class="icon">
                            <img src="../images/select-icon.svg" alt="">
                        </div>
                        <ul class="select-list">
                            <li><a href="/">Relevancy</a></li>
                            <li><a href="/">Relevancy</a></li>
                            <li><a href="/">Relevancy</a></li>
                            <li><a href="/">Relevancy</a></li>
                            <li><a href="/">Relevancy</a></li>
                            <li><a href="/">Relevancy</a></li>
                            <li><a href="/">Relevancy</a></li>
                            <li><a href="/">Relevancy</a></li>
                        </ul>
                    </div>
                </div>`;
const toolsProductDOM = `<div class="tools-panel">
                    <div class="headline_categories-list flex">
                        <div class="categories-list-icon flex">
                            <img src="../images/categories-icon.svg" alt="Icon">
                        </div>
                        <p>Category</p>
                    </div>

                    <ul>
                        <li><a href="/"><span><img src="../images/tools-icon-default.svg" alt="Icon"></span> Tools</a></li>
                        <li><a href="/"><span><img src="../images/tools-icon-default.svg" alt="Icon"></span> Tools</a></li>
                        <li><a href="/"><span><img src="../images/tools-icon-default.svg" alt="Icon"></span> Tools</a></li>
                        <li><a href="/"><span><img src="../images/tools-icon-default.svg" alt="Icon"></span> Tools</a></li>
                        <li><a href="/"><span><img src="../images/tools-icon-default.svg" alt="Icon"></span> Tools</a></li>
                        <li><a href="/"><span><img src="../images/tools-icon-default.svg" alt="Icon"></span> Tools</a></li>
                        <li><a href="/"><span><img src="../images/tools-icon-default.svg" alt="Icon"></span> Tools</a></li>
                        <li><a href="/"><span><img src="../images/tools-icon-default.svg" alt="Icon"></span> Tools</a></li>
                    </ul>
                </div>`;
const productListDOM = `<div class="product-list flex">
                    <div class="product-list_elem-wrapper" data-id="123">
                        <div class="product-list_elem">
                            <div class="box-top">
                                <div class="heart-box box-event-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                        <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                    </svg>
                                </div>
                                <a href="/" class="img-wrapper flex">
                                    <img src="../images/product-default.png" alt="Product name!!">
                                </a>
                            </div>
                            <div class="box-bottom">
                                <div class="name">
                                    <a href="/">Bear Teddy Wonka Mashine</a>
                                </div>
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="price-old">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>

                                <div class="price">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-list_elem-wrapper" data-id="4362">
                        <div class="product-list_elem">
                            <div class="box-top">
                                <div class="heart-box active box-event-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                        <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                    </svg>
                                </div>
                                <a href="/" class="img-wrapper flex">
                                    <img src="https://content1.rozetka.com.ua/goods/images/big_tile/144249735.jpg" alt="Product name!!">
                                </a>
                            </div>
                            <div class="box-bottom">
                                <div class="name">
                                    <a href="/">Bear Teddy Wonka Mashine</a>
                                </div>
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="price-old">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>

                                <div class="price">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list_elem-wrapper" data-id="333">
                        <div class="product-list_elem">
                            <div class="box-top">
                                <div class="heart-box box-event-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                        <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                    </svg>
                                </div>
                                <a href="/" class="img-wrapper flex">
                                    <img src="../images/product-default.png" alt="Product name!!">
                                </a>
                            </div>
                            <div class="box-bottom">
                                <div class="name">
                                    <a href="/">Bear Teddy Wonka Mashine</a>
                                </div>
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="price-old">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>

                                <div class="price">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list_elem-wrapper" data-id="4444">
                        <div class="product-list_elem">
                            <div class="box-top">
                                <div class="heart-box box-event-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                        <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                    </svg>
                                </div>
                                <a href="/" class="img-wrapper flex">
                                    <img src="../images/product-default.png" alt="Product name!!">
                                </a>
                            </div>
                            <div class="box-bottom">
                                <div class="name">
                                    <a href="/">Bear Teddy Wonka Mashine</a>
                                </div>
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="price-old">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>

                                <div class="price">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list_elem-wrapper" data-id="5555">
                        <div class="product-list_elem">
                            <div class="box-top">
                                <div class="heart-box box-event-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                        <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                    </svg>
                                </div>
                                <a href="/" class="img-wrapper flex">
                                    <img src="../images/product-default.png" alt="Product name!!">
                                </a>
                            </div>
                            <div class="box-bottom">
                                <div class="name">
                                    <a href="/">Bear Teddy Wonka Mashine</a>
                                </div>
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="price-old">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>

                                <div class="price">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list_elem-wrapper" data-id="6666">
                        <div class="product-list_elem">
                            <div class="box-top">
                                <div class="heart-box box-event-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                        <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                    </svg>
                                </div>
                                <a href="/" class="img-wrapper flex">
                                    <img src="../images/product-default.png" alt="Product name!!">
                                </a>
                            </div>
                            <div class="box-bottom">
                                <div class="name">
                                    <a href="/">Bear Teddy Wonka Mashine</a>
                                </div>
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="price-old">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>

                                <div class="price">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list_elem-wrapper" data-id="7777">
                        <div class="product-list_elem">
                            <div class="box-top">
                                <div class="heart-box box-event-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                        <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                    </svg>
                                </div>
                                <a href="/" class="img-wrapper flex">
                                    <img src="../images/product-default.png" alt="Product name!!">
                                </a>
                            </div>
                            <div class="box-bottom">
                                <div class="name">
                                    <a href="/">Bear Teddy Wonka Mashine</a>
                                </div>
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="price-old">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>

                                <div class="price">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-list_elem-wrapper" data-id="8888">
                        <div class="product-list_elem">
                            <div class="box-top">
                                <div class="heart-box box-event-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
                                        <path d="M3.85976 4.34249C5.33107 3.06898 7.62638 3.27576 9.02586 4.72053L9.385 4.37266L9.02586 4.72054L9.64108 5.35566L10.0002 5.72642L10.3594 5.35566L10.9746 4.72054L10.9746 4.72053C12.374 3.27579 14.6692 3.06898 16.1406 4.34241C17.8628 5.83301 17.9503 8.49691 16.3937 10.1049L16.3936 10.1051L10.3577 16.346L10.3576 16.346C10.1591 16.5513 9.83839 16.5513 9.63985 16.346L9.63984 16.346L3.60404 10.1052C2.05009 8.49724 2.13757 5.83317 3.85976 4.34249ZM3.85976 4.34249L3.53253 3.96444L3.85976 4.34249Z"/>
                                    </svg>
                                </div>
                                <a href="/" class="img-wrapper flex">
                                    <img src="../images/product-default.png" alt="Product name!!">
                                </a>
                            </div>
                            <div class="box-bottom">
                                <div class="name">
                                    <a href="/">Bear Teddy Wonka Mashine</a>
                                </div>
                                <a href="/" class="score flex">
                                    <div class="score-logo">
                                        <img src="../images/score-logo-default.svg" alt="Score name!! logo">
                                    </div>
                                    <div class="score-name">
                                        <p>Jafza 17</p>
                                    </div>
                                </a>

                                <div class="price-old">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>

                                <div class="price">
                                    <p><span class="currency">$ </span> 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;