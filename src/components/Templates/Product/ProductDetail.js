import styles from "@/styles/Product.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const ProductsDetail = ({ product }) => {



    return (
        <div
            className={`${styles.product_main}   align-items-center mb-5 text-decoration-none justify-content-center`}
        >
            <img
                className={`${styles.product_img}  mb-3 mb-sm-0`}
                src={product.img}
                alt=""
            />
            <div style={{ width: "500px" }}>
                <h4 className="text-white mb-3">{product.title}</h4>
                <hr style={{ borderColor: "white" }} />
                <div className={styles.stars}>
                    {
                        new Array(Math.trunc(product.score)).fill().map( (item , index) => {
                            return (<FontAwesomeIcon key={index} className={styles.fill_star} icon={faStar} />)
                        })
                    }
                    {
                        new Array(5 - Math.trunc(product.score)).fill().map( (item , index) => {
                            return (< FontAwesomeIcon key={index} icon={faStar} />)
                        })
                    }
                
                    
                </div>
                <div className={styles.price_details}>
                    {product.off ? (
                        <>
                            <p>${product.price - (product.off * product.price / 100)}</p>
                            <p>${product.price}</p>
                        </>

                    ) : (
                        <p>${product.price}</p>
                    )}
                </div>
                <p style={{ color: "#fff" }} className="m-0 pr-5">
                    {product.desc}
                </p>
                <button className={styles.shopping_btn}>
                    buy
                    <FontAwesomeIcon className="ml-2" icon={faShoppingBag} />
                </button>
            </div>
        </div>
    );
};

export default ProductsDetail;
