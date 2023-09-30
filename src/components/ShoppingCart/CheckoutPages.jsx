
import { useNavigate, useParams } from 'react-router-dom';
import './checkout.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { DLT } from '../../redux/actions/action';
import { Alert } from 'react-bootstrap';
import InfoCart from '../../assets/images/trustbanner2.png'

const CheckoutPages = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getdata = useSelector((state) => state.cartreducer.carts);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        country: '',
        state: '',
        zip: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [price, setPrice] = useState(0);

    useEffect(() => {
        total();
    }, [id, getdata]);

    const total = () => {
        const totalPrice = getdata.reduce((total, item) => total + item.price * item.qnty, 0);
        setPrice(totalPrice);
    };
    const validateField = (fieldName) => {
        switch (fieldName) {
            case 'firstName':
                if (!formData.firstName) {
                    return 'First name is required';
                }
                break;
            case 'lastName':
                if (!formData.lastName) {
                    return 'Last name is required';
                }
                break;
            case 'email':
                if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
                    return 'Invalid email format';
                }
                break;
            case 'phone':
                if (!/^\d{10,11}$/.test(formData.phone)) {
                    return 'Phone must have 10 to 11 digits';
                }
                break;
            case 'address':
                if (!formData.address) {
                    return 'Address is required';
                }
                break;
            case 'country':
                if (!formData.country) {
                    return 'Country is required';
                }
                break;
            case 'state':
                if (!formData.state) {
                    return 'State is required';
                }
                break;
            case 'zip':
                if (!/^\d{6}$/.test(formData.zip)) {
                    return 'Zip code must have 6 digits';
                }
                break;
            default:
                return ''; 
        }
        
        return ''; 
    };

    const validateForm = () => {
        const errors = {};

        const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'country', 'state', 'zip'];

        requiredFields.forEach((field) => {
            const fieldError = validateField(field);
            if (fieldError) {
                errors[field] = fieldError;
            }
        });

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };









    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        setSubmitted(true);
        if (isValid) {
            toast.success('Payment successful!');
            navigate('/');
        }
    };

    const formatPrice = (price) => {
        return price.toFixed(2) + '$';
    };

    const dlt = (id) => {
        dispatch(DLT(id));
    };

    useEffect(() => {
        if (submitted) {
            const fieldNames = ['firstName', 'lastName', 'email', 'phone', 'address', 'country', 'state', 'zip'];
            for (const fieldName of fieldNames) {
                if (errors[fieldName]) {
                    document.getElementById(fieldName).focus();
                    break;
                }
            }
        }
    }, [errors, submitted]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paymentOnDelivery');


    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    return (
        <div className="container">
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
                        Checkout
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="row">
                    {getdata && getdata.length > 0 ? (
                        <>
                            <div className="col-md-4 order-md-2 mb-4">
                                <h3 className="d-flex  align-items-center justify-content-between mb-3">
                                    <span className="fs-4">
                                        <i class="ri-shopping-basket-line fs-3"></i> Your Shopping Cart:
                                    </span>

                                    <span class="badge rounded-pill bg-secondary">{getdata.length}</span>

                                </h3>
                                <ul className="list-group mb-3">

                                    {getdata.map((ele) => (


                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>

                                                <div className="item-info">
                                                    <div className="image-item">
                                                        <img src={ele.imgdata} title={ele.rname} />
                                                    </div>
                                                    <div className="content-item">
                                                        <p>
                                                            {ele.rname}
                                                        </p>
                                                        <small>{formatPrice(ele.price)} </small>
                                                        <a href="#" className='px-2' onClick={() => dlt(ele.id)}>
                                                            <i className="ri-delete-bin-line" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}







                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total products</span>
                                        <span className="text-muted ">{formatPrice(price)} </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total shipping</span>
                                        <span className="text-muted">0.00</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>${price}</strong>
                                    </li>
                                </ul>
                                <form className="card p-2">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Vouchers"
                                        />
                                        <button type="submit" className="btn btn-secondary">
                                            OK
                                        </button>
                                    </div>
                                </form>
                                <div className="form-check-selectShip px-2">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio1"
                                            name="rdShipping"
                                            defaultValue="option1"
                                            defaultChecked={true} 
                                        />
                                        Shipping Express (3-5 days)
                                        <label className="form-check-label" htmlFor="rdShipping" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3">Billing  address</h4>
                                <form className="needs-validation" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName">First name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Enter first name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`form-control ${submitted ? (validateField('firstName') ? 'is-invalid' : 'is-valid') : ''}`}
                                            />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName">Last name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"  
                                                placeholder="Enter last name"
                                                value={formData.lastName}
                                                onChange={handleChange} 
                                                className={`form-control ${submitted ? (validateField('lastName') ? 'is-invalid' : 'is-valid') : ''}`}
                                            />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                        </div>

                                    </div>



                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`form-control ${submitted ? (validateField('email') ? 'is-invalid' : 'is-valid') : ''}`}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="1234567890"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`form-control ${submitted ? (validateField('phone') ? 'is-invalid' : 'is-valid') : ''}`}
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address">Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            placeholder="1234 Main St"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className={`form-control ${submitted ? (validateField('address') ? 'is-invalid' : 'is-valid') : ''}`}
                                        />
                                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address2">
                                            Address 2 <span className="text-muted">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address2"
                                            placeholder="Apartment or suite"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 mb-3">



                                            <label htmlFor="country">Country</label>

                                            <select
                                                value={formData.country}
                                                onChange={handleChange}
                                                className={`form-select d-block w-100 ${submitted ? (validateField('country') ? 'is-invalid' : 'is-valid') : ''}`}
                                                id="country"
                                                name="country"
                                            >
                                                <option value="">Choose...</option>
                                                <option>United States</option>
                                            </select>
                                            {errors.country && <div className="invalid-feedback">{errors.country}</div>}

                                        </div>
                                        <div className="col-md-4 mb-3">




                                            <label htmlFor="state">State</label>


                                            <select

                                                value={formData.state}
                                                onChange={handleChange}
                                                className={`form-select d-block w-100 ${submitted ? (validateField('state') ? 'is-invalid' : 'is-valid') : ''}`}
                                                id="state"
                                                name="state"
                                            >
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            {errors.state && <div className="invalid-feedback">{errors.state}</div>}

                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="zip">Zip</label>
                                            <input
                                                type="text"
                                                id="zip"
                                                name="zip"
                                                placeholder="Zip"
                                                value={formData.zip}
                                                onChange={handleChange}
                                                className={`form-control ${submitted ? (validateField('zip') ? 'is-invalid' : 'is-valid') : ''}`}
                                            />
                                            {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                                        </div>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="same-address"
                                        />
                                        <label className="custom-control-label" htmlFor="same-address">
                                            Shipping address is the same as my billing address
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="save-info"
                                        />
                                        <label className="custom-control-label" htmlFor="save-info">
                                            Save this information for next time
                                        </label>
                                    </div>


                                    <hr className="mb-4" />
                                    <h4 className="mb-3">Payment</h4>
                                    <div className="d-block my-3">
                                        <div className="form-check">
                                            <input
                                                id="paymentOnDelivery"
                                                name="paymentMethod"
                                                type="radio"
                                                className="form-check-input"
                                                value="paymentOnDelivery"
                                                checked={selectedPaymentMethod === 'paymentOnDelivery'}
                                                onChange={handlePaymentMethodChange}
                                                required=""
                                            />
                                            <label className="custom-control-label" htmlFor="paymentOnDelivery">
                                                Payment on delivery
                                            </label>
                                        </div>
                                        <div className="form-check custom-radio">
                                            <input
                                                id="creditCard"
                                                name="paymentMethod"
                                                type="radio"
                                                className="form-check-input"
                                                value="creditCard"
                                                checked={selectedPaymentMethod === 'creditCard'}
                                                onChange={handlePaymentMethodChange}
                                                required=""
                                            />
                                            <label className="custom-control-label" htmlFor="creditCard">
                                                Credit card
                                            </label>
                                        </div>


                                    </div>

                                    {selectedPaymentMethod === 'creditCard' && (
                                        <div className="info-card">
                                            <h5 style={{ marginTop: 5 }}>Information Card</h5>
                                            <img
                                                src={InfoCart}
                                                className="trustbadge"
                                                alt=""
                                            />
                                            <div className="row">
                                                <div className="col-md-6 pt-2 mb-3">
                                                    <label htmlFor="cc-name">Name on card</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cc-name"
                                                        placeholder="Full Name as displayed on card"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">Name on card is required</div>
                                                </div>
                                                <div className="col-md-6 pt-2 mb-3">
                                                    <label htmlFor="cc-number">Credit card number</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cc-number"
                                                        placeholder="Enter your card number"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Credit card number is required
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <label htmlFor="cc-expiration">Expiration</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cc-expiration"
                                                        placeholder="MM/YYYY"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">Expiration date required</div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label htmlFor="cc-expiration">CVV</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cc-cvv"
                                                        placeholder="CVV"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">Security code required</div>
                                                </div>
                                            </div>

                                        </div>
                                    )}











                                    <button type="submit" className="btn btn-green btn-placeorder">
                                        PLACE YOUR ORDER
                                    </button>








                                </form>
                            </div>
                        </>
                    ) : (
                        <Alert variant="warning">
                            <Alert.Heading>Your shopping cart is empty!</Alert.Heading>


                        </Alert>
                    )}








                </div>

            </div>









        </div>

    )
}

export default CheckoutPages
