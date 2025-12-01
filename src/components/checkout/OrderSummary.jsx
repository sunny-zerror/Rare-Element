import React from 'react'
import OrderItems from '@/components/checkout/OrderItems';
import GreenBoxBtn from '@/components/buttons/GreenBoxBtn';
import { formatePrice } from '@/utils/Util';
import Input from '../ui/Input';

const OrderSummary = ({ data, loading }) => {
  const {
    totalprice = 0,
    itemcount = 0,
    isFreeShippingEnabled = false,
    discountedPrice = 0,
    cart = [],
  } = data || {};
  return (
    <div className="checkout_summaryContainer">
      <div className="checkout_summaryWrapper">
        <OrderItems data={cart} count={itemcount} />
        <div className="coupon_div">
          <Input placeholder="Discount Code" className="checkout_couponInput" style={{width: "100%"}}/>
          <div className="checkout_couponBtn text-base uppercase">
            <GreenBoxBtn type="button" title={"Apply"} loading={loading} />
          </div>
        </div>

        <div className="checkout_row ">
          <p className="checkout_textBase text-lg uppercase">Subtotal</p>
          <p className="checkout_textBase text-lg uppercase">{formatePrice(totalprice)}</p>
        </div>

        <div className="checkout_borderRow ">
          <p className="checkout_textSm text-lg uppercase">Shipping Charge</p>
          <p className="checkout_textSm text-lg uppercase">{isFreeShippingEnabled ? "Free" : formatePrice(0)}</p>
        </div>

        <div className="checkout_row semibold uppercase text-2xl">
          <p className="checkout_subtotalText bold">Total</p>
          <p className="checkout_subtotalValue bold">{formatePrice(discountedPrice)}</p>
        </div>

        <div className="checkout_btn text-base uppercase">
          <GreenBoxBtn title={"Pay Now"} />
        </div>
      </div>
    </div>
  )
}

export default OrderSummary