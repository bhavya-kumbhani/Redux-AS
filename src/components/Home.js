import React from 'react'

function Home() {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    // onClick={
                    //     ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                    //     }
                        >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home