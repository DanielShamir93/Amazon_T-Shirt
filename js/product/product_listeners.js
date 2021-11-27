document.addEventListener('mouseover', (e) => {
    const productPic = document.querySelector('#product_pic');
    const miniPic1 = document.querySelector('#mini_pic1');
    const miniPic2 = document.querySelector('#mini_pic2');

    if (e.target.id === 'mini_pic1') {
        productPic.src = './assets/images/A13usaonutL._CLa|2140,2000|614RIQRw2nL.png|0,0,2140,2000+0.0,0.0,2140.0,2000.0_AC_UX522_.jpeg';
        Object.assign(e.target.style, {
            borderColor: 'rgb(231, 118, 0)',
            boxShadow: 'rgba(228, 121, 17, 0.5) 0px 0px 3px 2px'
        });
        Object.assign(miniPic2.style, {
            borderColor: 'rgba(15, 17, 17, 0.4)',
            boxShadow: 'unset'
        })
    }
    else if (e.target.id === 'mini_pic2') {
        productPic.src = './assets/images/713m63wif6L-_AC_UX679_.jpg';
        Object.assign(e.target.style, {
            borderColor: 'rgb(231, 118, 0)',
            boxShadow: 'rgba(228, 121, 17, 0.5) 0px 0px 3px 2px'
        });
        Object.assign(miniPic1.style, {
            borderColor: 'rgba(15, 17, 17, 0.4)',
            boxShadow: 'unset'
        })
    }
});

