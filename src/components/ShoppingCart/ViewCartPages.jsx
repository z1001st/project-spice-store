
import { Link, useParams } from 'react-router-dom';
import './view-cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ADD, DLT, REMOVE } from '../../redux/actions/action';
import { Alert } from 'react-bootstrap';

const ViewCartPages = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const getdata = useSelector((state) => state.cartreducer.carts);



    const [price, setPrice] = useState(0);

    useEffect(() => {
        total();
    }, [id, getdata]);

    const total = () => {
        const totalPrice = getdata.reduce((total, item) => total + item.price * item.qnty, 0);
        setPrice(totalPrice);
    };






    const formatPrice = (price) => {
        return price.toFixed(2) + '$';
    };

    const send = (e) => {
        dispatch(ADD(e));
    };

    const dlt = (id) => {
        dispatch(DLT(id));
    };

    const remove = (item) => {
        dispatch(REMOVE(item));
    };
























    return (
        <main className="container">
            <div className="breadcrumb-box">
                <div className="breadcrumb-inner">
                    <div className="left">
                        <a
                            className="home"
                            href="#"
                        >
                            Home
                        </a>
                        <span className="navigation-pipe" />
                        Your shopping cart
                    </div>
                </div>
            </div>
            <div className='cart-page'>

                {getdata && getdata.length > 0 ? (
                    <>
                        <h3><i class="ri-shopping-basket-line fs-3"></i> Your shopping cart</h3>
                        <div id="order-detail-content" className="table-responsive">
                            <table
                                id="cart_summary"
                                className="table table-bordered"
                            >
                                <thead>
                                    <tr>
                                        <th >Product</th>
                                        <th >Description</th>
                                        <th className="text-center text-nowrap">Unit price</th>
                                        <th className=" text-center px-5 " style={{ width: 0 }}>Quantity</th>
                                        <th></th>
                                        <th className=" text-center">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((ele) => {
                                            return (

                                                <tr

                                                    key={ele.id}
                                                >
                                                    <td>

                                                        <img
                                                            src={ele.imgdata}
                                                            title={ele.rname}
                                                            width={90}
                                                            height={90}
                                                        />

                                                    </td>
                                                    <td>
                                                        <p className="product-name">
                                                            {ele.description}
                                                        </p>
                                                    </td>

                                                    <td  >
                                                        <ul className=" text-end" >

                                                            <li className=" text-center">    {formatPrice(ele.price)}</li>
                                                        </ul>
                                                    </td>
                                                    <td className=" align-items-center " >
                                                        <div className="quantity-box">

                                                            <input

                                                                type="text"

                                                                className="cart_quantity_input form-control grey"
                                                                value={ele.qnty}

                                                            />
                                                            <div className="cart_quantity_button clearfix">
                                                                <a

                                                                    className="cart_quantity_down button-minus"


                                                                    title="Subtract"
                                                                >
                                                                    <span onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>
                                                                        <i className="fa fa-minus" />
                                                                    </span>
                                                                </a>
                                                                <a

                                                                    className="cart_quantity_up button-plus"
                                                                    id="cart_quantity_up_2506_0_0_0"

                                                                    title="Add"
                                                                >
                                                                    <span onClick={() => send(ele)}>
                                                                        <i className="fa fa-plus" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="cart_delete text-center" >
                                                        <div>
                                                            <a
                                                                onClick={() => dlt(ele.id)}

                                                                title="Delete"
                                                                className="cart_quantity_delete"


                                                            >
                                                                <i className="fa fa-trash" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="cart_total " data-title="Total">
                                                        <span className="price" id="total_product_price_2506_0_0">
                                                            {formatPrice(ele.price * ele.qnty)}
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>



                        </div>


                        <div className="total-price">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>{formatPrice(price)}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td>0.00$</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td><strong>{formatPrice(price)}</strong></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <Link to='/checkout'>   <button className="btn btn-green btn-place-order">
                                                Checkout
                                            </button></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <Alert variant="warning">
                        <Alert.Heading>Your shopping cart is empty!</Alert.Heading>


                    </Alert>
                )}








            </div>
        </main>
    )
}

export default ViewCartPages
