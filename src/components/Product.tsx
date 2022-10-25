import { IProduct } from "../models"
import {css} from '@emotion/css'

interface ProductProps {
    product: IProduct
}

export function Product(props:ProductProps) {
    return (
        <div className={css`
        width: 50%;
        text-align: center;
        border-style: solid;
        margin: 10px;
        `}>
            <img className={css`width: 200px;`} src={props.product.image}/>
            <br/>
            <h1>{props.product.title}</h1>
            <br/>
            <h2>Цена: <span> {props.product.price}</span></h2>
        </div>
    )
}