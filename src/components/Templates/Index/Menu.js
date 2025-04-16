import ProductCard from '@/components/Modules/ProductCard/ProductCard'
import React from 'react'


export default function Menu({menu}) {

    

    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Menu &amp; Pricing</h4>
                    <h1 className="display-4">Competitive Pricing</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5">Hot Coffee</h1>
                        {
                            menu.filter( menuItem => menuItem.type === 'hot').slice(0,3).map(menuItem => {
                                return (
                                    <ProductCard key={menuItem.id} {...menuItem} />
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Cold Coffee</h1>
                        {
                            menu.filter( menuItem => menuItem.type === 'cold').slice(0,3).map(menuItem => {
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
