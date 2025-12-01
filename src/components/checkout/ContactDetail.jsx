import React from 'react'
import Link from 'next/link'
import Input from '@/components/ui/Input'
import { RiCheckLine } from '@remixicon/react'
import { useAuthStore } from "@/store/auth-store";
import { EmailSubscribedStatus } from "@/utils/Constant";

const ContactDetail = ({ register, setValue, watch, errors }) => {
    const { isLoggedIn } = useAuthStore((state) => state);
    const isSubscribed = watch("emailSubscribedStatus") === EmailSubscribedStatus.SUBSCRIBED;
    return (
        <>
            <div className="checkout_user_details">
                <div className="checkout_user_detailsHeader">
                    <p className="checkout_subHeading text-lg uppercase">Email</p>
                    {!isLoggedIn &&
                        <Link href="/login">
                            <div className="settings__link">
                                <p className="underline uppercase text-base">Login</p>
                            </div>
                        </Link>
                    }
                </div>
                <Input
                    type="email"
                    placeholder="Email"
                    error={errors?.email}
                    {...register("email", { required: "Email is required" })}
                />
                <div onClick={() => {
                    setValue(
                        "emailSubscribedStatus",
                        !isSubscribed
                            ? EmailSubscribedStatus.SUBSCRIBED
                            : EmailSubscribedStatus.UNSUBSCRIBED
                    )
                }} className="cards_inner_content">
                    <div className={`check_box_div center ${isSubscribed ? "check_box_div_active" : ""} `}>
                        {isSubscribed && <RiCheckLine size={14} />}
                    </div>
                    <p>Email me with news and offers</p>
                </div>

                {/* <div className=" text-base">
                                        <p>{user.email}</p>
                                        <p>{user.phone}</p>
                                        <p>{user.name}</p>
                                        <p>{user.dob}</p>
                                    </div> */}

                {/* <div className="checkout_thin_line"></div> */}
            </div>
        </>
    )
}

export default ContactDetail