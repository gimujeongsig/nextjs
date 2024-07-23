// import {age,name} from './data,js'
export default function Cart() {
    let 장바구니 = ['Tomaotes', 'Pasta'];
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem item={장바구니[0]}/>
            <CartItem item={장바구니[1]}/>
            <CartItem/>
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>상품명 {props.item}</p>
            <p>14000원</p>
            <p>1개</p>
        </div>
    )
}