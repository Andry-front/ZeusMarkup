document.addEventListener('DOMContentLoaded', () => {
    const marketplaceStyle = './styles/css/marketplace/marketplace.min.css';
    const productPageStyle = './styles/css/product-page/product-page.min.css';

    const addStyle = (aFile) => {
        const head = window.document.getElementsByTagName('head')[0]
        const style = window.document.createElement('link')
        style.href = aFile
        style.rel = 'stylesheet'
        head.appendChild(style)
    }
    const renderPage = (page) => {
        const createDOMElem = (nameTag,className,IdName) => {
            const newTag = document.createElement(nameTag);
            if (className) {
                newTag.className = className;
            }

            if (IdName) {
                newTag.id = IdName;
            }
            return newTag;
        };
        const addElemMarketplace = () => {
            addStyle(marketplaceStyle);
            mainContainer.prepend(H1);
            H1.innerHTML = page;

            const productBox = createDOMElem('div','flex','product-box');
            H1.after(productBox);

            productBox.innerHTML =
                `${sortSelectDOM}
                ${toolsProductDOM}
                ${productListDOM}`;
        };
        const addElementProductPage = () => {
            addStyle(productPageStyle);
        }

        const newBody = createDOMElem('div','flex','body');
        const mainContainer = createDOMElem('main','container',);
        const H1 = createDOMElem('h1');

        document.body.prepend(newBody);
        newBody.innerHTML =
            `${headerDOM}
            ${menuDOM}
            ${footerDOM}
            ${modalCartDOM}`;
        document.getElementById('menu').after(mainContainer);

        switch (page) {
            case 'marketplace':
                addElemMarketplace();
                break;
            case 'product page':
                addElementProductPage();
                break;
        }
    }

    addStyle(productPageStyle);
    renderPage(document.body.getAttribute('data-page'));

    const cartModal = () => {
        const button = document.getElementById('basket-icon');
        const modalCart = document.getElementById('modal-cart');

        button.addEventListener( 'click',(event) => {
            document.body.style.cssText = 'overflow: hidden';
            modalCart.classList.add('open');

            const closeBox = modalCart.getElementsByClassName('close');

            closeBox[0].addEventListener('click', () => {
                document.body.style.cssText = '';
                modalCart.classList.remove('open');
            })
        })
    }
    cartModal();

    const counterCart = () => {
        const labelList = [...document.querySelectorAll('.quantity-box')];
        const updateInput = (label, parent) => {
            let input = [...parent.querySelectorAll('.quantity-input')];
            input = input[0];

            let number = 0;
            switch (label) {
                case '-':
                    number = Number(input.value)-1;
                    input.value = +input.value > input.min ? number : input.value;
                    break;
                case '+':
                    number = Number(input.value)+1;
                    input.value = +input.value < input.max ? number : input.value;
                    break;
            }
            input.focus();
        };
        const deleteCart = () => {
            const basketBoxList = [...document.getElementsByClassName('basket-box')];

            basketBoxList.forEach(basketBox => {
                basketBox.addEventListener('click', (event) => {
                    const cartDelete = event.target.closest('.cart-item');
                    cartDelete.remove();

                })
            })
        }

        labelList.forEach(label => {
            label.addEventListener('click', (event) => {
                const parent = event.target.closest('.quantity-box');
                const text = event.target.textContent;

                event.srcElement.localName === 'label' && updateInput(text,parent);
            })
        });

        deleteCart();
    }
    counterCart();

    const sliderProductPage = () => {
        const frontPanel = document.querySelector('.photo-panel .front-image');
        const listPhotoProduct = [...document.querySelectorAll('.photo-panel_list .panel_list_elem')];
        const buttonList = [...document.querySelectorAll('.photo-panel_list-wrapper button')];
        const panel = document.querySelector('.photo-panel_list-wrapper .wrapper');
        const lengthPhoto = document.querySelectorAll('.panel_list_elem').length;

        const eventScrollNext = (position) => {
            panel.scroll({
                left: (position + 116),
                behavior: 'smooth'
            })
        }

        const eventScrollPrev = (position) => {
            panel.scroll({
                left: (position - 116),
                behavior: 'smooth'
            })
        }
        const lengthPosition = (length,active) => {
            const frontPhoto = document.querySelector('.photo-panel .front-image');
            frontPhoto.setAttribute('data-length',`${active + 1} / ${length}`)
        }

        lengthPosition(lengthPhoto,0);

        buttonList.forEach(button => {
            button.addEventListener('click', ()=> {
                const positionScroll = panel.scrollLeft;
                const positionButton = button.getAttribute('data-position');

                switch (positionButton) {
                    case 'next':
                        eventScrollNext(positionScroll);
                        break;
                    case 'prev':
                        eventScrollPrev(positionScroll);
                        break;
                }
            })
        })

        listPhotoProduct.forEach((itemPhoto, key) => {
            itemPhoto.addEventListener('click', () => {
                frontPanel.querySelector('img').setAttribute('src',itemPhoto.querySelector('img').getAttribute('src'));

                lengthPosition(lengthPhoto,key);
            });
        })
    };
    sliderProductPage();

    const tabsProductPage = () => {
        const tabsButton = [...document.querySelectorAll('.headline-panel button')];
        const contentPanelList = [...document.querySelectorAll('.content-panel .panel-item')];

        const addActive = (arr,elem) => {
            arr.forEach(item => {
                item.classList.remove('active');
            });
            elem.classList.add('active');
        }
        const eventContentPanel = (position) => {
            const activeElem = contentPanelList.find((item,key) => key === +position);
            addActive(contentPanelList,activeElem);
        };

        tabsButton.forEach(button => {
            button.addEventListener('click', () => {
                const position = button.getAttribute('data-description');
                eventContentPanel(position);
                addActive(tabsButton,button);


                const headlinePanel = document.querySelector('.description-panel .headline-panel');

                switch (position) {
                    case '0':
                        headlinePanel.classList.add('active-0');
                        headlinePanel.classList.remove('active-1');
                        break;
                    case '1':
                        headlinePanel.classList.add('active-1');
                        headlinePanel.classList.remove('active-0');
                        break;
                }
            })
        })
    };
    tabsProductPage();

    const modalProductPhoto = () => {
        const frontPhoto = document.querySelector('.photo-panel .front-image');

        frontPhoto.addEventListener('click',() => {
            console.log(frontPhoto);
        })
    };
    modalProductPhoto();


    const boxActiveList = [...document.getElementsByClassName('box-event-active')];
    const buttonsAll = (buttons) => {
        for (const button of buttons) {
            button.addEventListener('click', (event) => {
                const listClass = [...button.classList];
                const res = listClass.find(item => item === 'active');

                if (res) {
                    button.classList.remove('active')
                } else if (event.target !== button) {
                    button.classList.add('active');
                } else {
                    button.classList.add('active');
                }
            })
        }
    };
    buttonsAll(boxActiveList);
})