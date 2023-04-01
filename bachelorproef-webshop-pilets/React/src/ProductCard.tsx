import * as React from 'react';
export interface ProductCard {
    name: string;
    price: number;
    description: string;
    image: string;
    addBtn: React.ReactNode;
}

export const ProductCard: React.FC<ProductCard> = ({ name, price, description, image, addBtn }) => {
    return (
        <div className="col-sm-12 col-md-4 card mt-3">
            <img src={image} alt="Image header" />
            <div className="card-body">
                <div className="card-title">{name}</div>
                <div className="card-title">Price: {price}</div>
                <p className="card-text">{description}</p>
                {addBtn}
            </div>
        </div>
    )
}