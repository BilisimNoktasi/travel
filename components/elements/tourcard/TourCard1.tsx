import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function TourCard1({ tour }: any) {
	const t=useTranslations("TourCard1")
	
	return (
		<>
			<div className="card-journey-small background-card">
				<div className="card-image"> <Link className="label" href="#">{t("topRated")}</Link>
				<img src={`/assets/imgs/page/tour/${tour?.image}`} alt="Travila" />
				</div>
				<div className="card-info background-card">
					<div className="card-rating">
						<div className="card-left"> </div>
						<div className="card-right"> <span className="rating">{tour.rating} <span className="text-sm-medium neutral-500">(672 {t("reviews")} )</span></span></div>
					</div>
					<div className="card-title">
						<Link className="text-lg-bold neutral-1000" href="/tour-detail">{tour.name} </Link></div>
					<div className="card-program">
						<div className="card-duration-tour">
							<p className="icon-duration text-sm-medium neutral-500">{tour.duration} {t("days")} , {tour.duration - 1} {t("night")}</p>
							<p className="icon-guest text-sm-medium neutral-500">{tour.groupSize} {t("guest")}</p>
						</div>
						<div className="endtime">
							<div className="card-price">
								<h6 className="heading-6 neutral-1000">${tour.price}</h6>
							</div>
							<div className="card-button"> <Link className="btn btn-gray hover:bg-orange-400" href="/tour-detail">{t("bookNow")}</Link></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
