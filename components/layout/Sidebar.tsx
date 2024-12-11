import Link from 'next/link'
import CurrencyDropdown from '@/components/elements/CurrencyDropdown'
import LanguageDropdown from '@/components/elements/LanguageDropdown'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useTranslations } from 'next-intl'

export default function Sidebar({ isSidebar, handleSidebar, }: any) {
	const t= useTranslations("SideBarMenu")
	return (
		<>

			<div className={`sidebar-canvas-wrapper perfect-scrollbar button-bg-2 ${isSidebar ? "sidebar-canvas-visible" : ""}`}>
				<PerfectScrollbar className="sidebar-canvas-container">
					<div className="sidebar-canvas-head">
						<div className="sidebar-canvas-logo"> <Link className="d-flex" href="/"><img className="light-mode" alt="Travila" src="/assets/imgs/template/logo.svg" /><img className="dark-mode" alt="Travila" src="/assets/imgs/template/logo-w.svg" /></Link></div>
						<div className="sidebar-canvas-lang">
							<LanguageDropdown />
							<CurrencyDropdown />
							<a className="close-canvas" onClick={handleSidebar}> <img alt="Travila" src="/assets/imgs/template/icons/close.png" /></a>
						</div>
						
					</div>
					<div className="sidebar-canvas-content">
						<div className="box-author-profile">
							<div className="card-author">
								<div className="card-image"> <img src="/assets/imgs/page/homepage1/author2.png" alt="Travila" /></div>
								<div className="card-info">
									<p className="text-md-bold neutral-1000">Birgül İsaf</p>
									<p className="text-xs neutral-1000">Antalya</p>
								</div>
							</div><Link className="btn btn-black" href="#">{t("logout")}</Link>
						</div>
						<div className="box-quicklinks">
							<h6 className="title-quicklinks neutral-1000">{t("quickLinks")}</h6>
							<div className="box-list-quicklinks">
								<div className="item-quicklinks">
									<div className="item-icon"> <img src="/assets/imgs/template/icons/notify.svg" alt="Travila" />
									</div>
									<div className="item-info"> <Link href="#">
										<h6 className="text-md-bold neutral-1000">{t("notifications")}</h6>
									</Link>
										<p className="text-xs neutral-500 online">2 yeni mesaj</p>
									</div>
								</div>
								<div className="item-quicklinks">
									<div className="item-icon"> <img src="/assets/imgs/template/icons/bookmark.svg" alt="Travila" />
									</div>
									<div className="item-info"> <Link href="#">
										<h6 className="text-md-bold neutral-1000">{t("bookMarks")}</h6>
									</Link>
										<p className="text-xs neutral-500">7 tours, 2 rooms</p>
									</div>
								</div>
								<div className="item-quicklinks">
									<div className="item-icon"> <img src="/assets/imgs/template/icons/settings.svg" alt="Travila" />
									</div>
									<div className="item-info"> <Link href="#">
										<h6 className="text-md-bold neutral-1000">{t("settings")}</h6>
									</Link>
										<p className="text-xs neutral-500">Hesap Ayarları</p>
									</div>
								</div>
							</div>
						</div>
						<div className="box-eventsdate">
							<h6 className="title-eventsdate neutral-1000">{t("eventDates")}</h6>
							<div className="box-calendar-events">
								<div id="calendar-events" />
							</div>
						</div>
						<div className="box-savedplaces">
							<h6 className="title-savedplaces neutral-1000">{t("savedPlaces")}</h6>
							<div className="box-list-places">
								<div className="card-place">
									<div className="card-image"> <img src="/assets/imgs/page/homepage1/place.png" alt="Travila" />
									</div>
									<div className="card-info background-card">
										<div className="card-info-top">
											<h6 className="text-xl-bold"> <Link className="neutral-1000" href="#">Machu Picchu</Link></h6>
											<p className="text-xs card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" />4/5</p>
										</div>
										<div className="card-info-bottom">
											<p className="text-xs-medium neutral-500">Carved by the Colorado River in Arizona,
												United States</p><Link href="#">
												<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
													<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
												</svg></Link>
										</div>
									</div>
								</div>
								<div className="card-place">
									<div className="card-image"> <img src="/assets/imgs/page/homepage1/place2.png" alt="Travila" />
									</div>
									<div className="card-info background-card">
										<div className="card-info-top">
											<h6 className="text-xl-bold"> <Link className="neutral-1000" href="#">Machu Picchu</Link></h6>
											<p className="text-xs card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" />4/5</p>
										</div>
										<div className="card-info-bottom">
											<p className="text-xs-medium neutral-500">Carved by the Colorado River in Arizona,
												United States</p><Link href="#">
												<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
													<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
												</svg></Link>
										</div>
									</div>
								</div>
								<div className="card-place">
									<div className="card-image"> <img src="/assets/imgs/page/homepage1/place3.png" alt="Travila" />
									</div>
									<div className="card-info background-card">
										<div className="card-info-top">
											<h6 className="text-xl-bold"> <Link className="neutral-1000" href="#">Machu Picchu</Link></h6>
											<p className="text-xs card-rate"> <img src="/assets/imgs/template/icons/star.svg" alt="Travila" />4/5</p>
										</div>
										<div className="card-info-bottom">
											<p className="text-xs-medium neutral-500">Carved by the Colorado River in Arizona,
												United States</p><Link href="#">
												<svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
													<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
												</svg></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="box-contactus">
							<h6 className="title-contactus neutral-1000">{t("contactUs")}</h6>
							<div className="contact-info">
								<p className="address-2 text-md-medium neutral-1000">4517 Washington Ave. <br />Manchester, Kentucky
									39495</p>
								<p className="hour-work-2 text-md-medium neutral-1000">{t("hours")}: 8:00 - 17:00, Mon - Sat</p>
								<p className="email-2 text-md-medium neutral-1000">support@travila.com</p>
							</div>
						</div>
					</div>
				</PerfectScrollbar>
			</div>

		</>
	)
}
