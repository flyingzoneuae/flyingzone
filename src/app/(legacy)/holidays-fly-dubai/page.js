"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import Breadcrumb from "@/components/common/Breadcrumb";

import { holidaysFlyDubaiData } from "@/data/holidaysFlyDubaiData";
import HolidayCard from "@/components/holidayComponents/HolidayCard";

const Page = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            effect: "fade", // Use the fade effect
            loop: true,
            fadeEffect: {
                crossFade: true, // Enable cross-fade transition
            },
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination5",
                clickable: true,
            },
        };
    }, []);

    return (
        <>
            <Breadcrumb pagename="Holidays Fly Dubai" pagetitle="Holidays Fly Dubai" bgImage="/assets/images/banners/holidays-by-flydubai.png" />
            <div className="room-suits-page pt-120 mb-120">
                <div className="container one">
                    <div className="row g-lg-4 gy-5">
                        {holidaysFlyDubaiData.map((holiday) => (
                            <div key={holiday.id} className="col-lg-4 col-md-6 col-12">
                                <HolidayCard holiday={holiday} settings={settings} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
