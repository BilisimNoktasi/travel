"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "@/util/swiperOption";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { getVillasDispatch } from '@/redux/villaSlice'
import { capitalizeText } from "@/util/capitalizeText";
import urlParser from "@/util/urlParser";

export default function TopRated1() {

  const dispatch = useDispatch<AppDispatch>()
  const { villas } = useSelector((state:RootState) => state.villa)

  const t = useTranslations('HomePage')
  const t_common = useTranslations('Common')

  useEffect(()=> {
    dispatch(getVillasDispatch())
  },[dispatch])

  return (
    <>
      <section className="section-box box-top-rated background-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-6">
              <h2 className="neutral-1000">{t('popular_villa_title')}</h2>
              <p className="text-md-medium neutral-500">
                {t('popular_villa_subtitle')}
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end">
                <Link className="btn btn-black-lg" href="#">
                  {t_common('viewMoreBtn')}
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15L15 8L8 1M15 8L1 8"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-slider box-swiper-padding">
          <div className="box-swiper mt-30">
            <div className="swiper-container swiper-group-animate swiper-group-journey">
              <Swiper {...swiperGroupAnimate}>
                {
                  villas?.map((item,index)=> (
                    <SwiperSlide key={index}>
                  <div className="card-journey-small background-card">
                    <div className="card-image">
                      <img
                        src="/assets/imgs/page/homepage1/journey2.png"
                        alt="Travila"
                      />
                    </div>
                    <div className="card-info">
                      <div className="card-rating">
                        <div className="card-left"> </div>
                        <div className="card-right">
                          {" "}
                          <span className="rating">
                            4.96{" "}
                            <span className="text-sm-medium neutral-500">
                              (672 reviews)
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="card-title">
                        {" "}
                        <Link
                          className="heading-6 neutral-1000"
                          href={`/villa-detail/${urlParser(item.url)}`}
                        >
                          {capitalizeText(item.title)}{" "}
                        </Link>
                      </div>
                      <div className="card-program">
                        <div className="card-location">
                          <p className="text-location text-md-medium neutral-500">
                            Manchester, England
                          </p>
                          <p className="text-star">
                            {" "}
                            <img
                              className="light-mode"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Travila"
                            />
                            <img
                              className="light-mode"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Travila"
                            />
                            <img
                              className="light-mode"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Travila"
                            />
                            <img
                              className="light-mode"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Travila"
                            />
                            <img
                              className="light-mode"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Travila"
                            />
                            <img
                              className="dark-mode"
                              src="/assets/imgs/template/icons/star-w.svg"
                              alt="Travila"
                            />
                            <img
                              className="dark-mode"
                              src="/assets/imgs/template/icons/star-w.svg"
                              alt="Travila"
                            />
                            <img
                              className="dark-mode"
                              src="/assets/imgs/template/icons/star-w.svg"
                              alt="Travila"
                            />
                            <img
                              className="dark-mode"
                              src="/assets/imgs/template/icons/star-w.svg"
                              alt="Travila"
                            />
                            <img
                              className="dark-mode"
                              src="/assets/imgs/template/icons/star-w.svg"
                              alt="Travila"
                            />
                          </p>
                        </div>
                        <div className="endtime">
                          <div className="card-price">
                            <h6 className="heading-6 neutral-1000">$48.25</h6>
                            <p className="text-md-medium neutral-500">
                              / person
                            </p>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link className="btn btn-gray" href={`/villa-detail/${urlParser(item.url)}`}>
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
