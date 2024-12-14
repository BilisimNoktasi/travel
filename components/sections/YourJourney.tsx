"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "@/util/swiperOption";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { getToursDispatch } from "@/redux/tourSlice";

export default function YourJourney() {
  const currentTime = new Date();
  const dispatch = useDispatch<AppDispatch>();
  const { tours } = useSelector((state: RootState) => state.tour);
  const t = useTranslations("HomePage");
  const t_card = useTranslations("TourCard")

  useEffect(() => {
    dispatch(getToursDispatch(0, 10));
  }, [dispatch]);

  return (
    <>
      <section className="section-box box-your-journey background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9 mb-30">
              <h2 className="neutral-1000 mb-15">{t("title")}</h2>
              <h6 className="heading-6-medium neutral-400">{t("subtitle")} </h6>
            </div>
            <div className="col-md-3 position-relative mb-30">
              <div className="box-button-slider box-button-slider-team justify-content-end">
                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-slider">
          <div className="box-swiper mt-30">
            <div className="swiper-container mx-2 swiper-group-animate swiper-group-journey">
              <Swiper {...swiperGroupAnimate}>
                {tours?.map((item, index) => (
                <SwiperSlide key={index}>
                <div className="card-journey-small background-card">
                  <div className="card-image">
                    {" "}
                    <Link className="wish" href={`/tour-detail-3/${item.slug}`}>
                      <svg
                        width={20}
                        height={18}
                        viewBox="0 0 20 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </Link>
                    <img src={`${process.env.NEXT_PUBLIC_SOURCE_URI}${item.images[0]}`} alt="Travila" />
                  </div>
                  <div className="card-info background-card">
                    <div className="card-rating">
                      <div className="card-left"> </div>
                      <div className="card-right">
                        {" "}
                        <span className="rating">
                          4.96{" "}
                          <span className="text-sm-medium neutral-500">{`(672 ${t_card('reviews')})`}</span>
                        </span>
                      </div>
                    </div>
                    <div className="card-title">
                      {" "}
                      <Link className="heading-6 neutral-1000" href={`/tour-detail-3/${item.slug}`}>
                        {item.name}{" "}
                      </Link>
                    </div>
                    <div className="card-program">
                      <div className="duration">
                        <p className="text-md-medium neutral-500">{item.duration} {t_card('hours')} - {item.groupSize} {t_card('group_size')}</p>
                      </div>
                      <div className="endtime">
                        <div className="card-price">
                          <h6 className="heading-6 neutral-1000">$48.25</h6>
                          <p className="text-md-medium neutral-500">/ {t_card('person')}</p>
                        </div>
                        <div className="card-button">
                          {" "}
                          <Link className="btn btn-gray" href={`/tour-detail-3/${item.slug}`}>
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

{/* <SwiperSlide>
  <div className="card-journey-small background-card">
    <div className="card-image">
      {" "}
      <Link className="wish" href="/tour-detail">
        <svg
          width={20}
          height={18}
          viewBox="0 0 20 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </Link>
      <img src="/assets/imgs/page/homepage1/journey2.png" alt="Travila" />
    </div>
    <div className="card-info background-card">
      <div className="card-rating">
        <div className="card-left"> </div>
        <div className="card-right">
          {" "}
          <span className="rating">
            4.96{" "}
            <span className="text-sm-medium neutral-500">(672 reviews)</span>
          </span>
        </div>
      </div>
      <div className="card-title">
        {" "}
        <Link className="heading-6 neutral-1000" href="/tour-detail">
          California Sunset/Twilight Boat Cruise{" "}
        </Link>
      </div>
      <div className="card-program">
        <div className="duration">
          <p className="text-md-medium neutral-500">2 days 3 nights - Family</p>
        </div>
        <div className="endtime">
          <div className="card-price">
            <h6 className="heading-6 neutral-1000">$48.25</h6>
            <p className="text-md-medium neutral-500">/ person</p>
          </div>
          <div className="card-button">
            {" "}
            <Link className="btn btn-gray" href="/tour-detail">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>; */}
