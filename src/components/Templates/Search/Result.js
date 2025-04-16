import ProductCard from '@/components/Modules/ProductCard/ProductCard'
import React from 'react'

export default function Result({searchResult}) {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5">Hot Coffee</h1>
                        {
                            searchResult.filter(menuItem => menuItem.type === 'hot').slice(0, 3).map(menuItem => {
                                return (
                                    <ProductCard key={menuItem.id} {...menuItem} />
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Cold Coffee</h1>
                        {
                            searchResult.filter(menuItem => menuItem.type === 'cold').slice(0, 3).map(menuItem => {
                                return (
                                    <ProductCard key={menuItem.id} {...menuItem} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
