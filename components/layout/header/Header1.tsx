"use client";
import CurrencyDropdown from "@/components/elements/CurrencyDropdown";
import LanguageDropdown from "@/components/elements/LanguageDropdown";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/router";
const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});
export default function Header1({
  scroll,
  handleLogin,
  handleMobileMenu,
  handleRegister,
  handleSidebar,
}: any) {

	const t = useTranslations('HeaderLink')

  return (
    <>
      <header className={`header sticky-bar ${scroll ? "stick" : ""}`}>
        {/* <div className="top-bar">
					<div className="container-fluid">
						<div className="text-header">
							<div className="text-unlock text-sm-bold">Unlock the Magic of Travel with Travila - Your Gateway to
								Extraordinary Experiences</div><Link className="link-secondary-2" href="#">Get This Now
								<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
									<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg></Link>
						</div>
					</div>
				</div> */}
        <div className="container-fluid background-body">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img
                    className="light-mode"
                    alt="Travila"
                    src="/assets/imgs/template/logo.svg"
                  />
                  <img
                    className="dark-mode"
                    alt="Travila"
                    src="/assets/imgs/template/logo-w.svg"
                  />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu">
                  <ul className="main-menu">
                    <li className="mega-li">
                      <Link className="active" href="/">
                        Home
                      </Link>
                      
                    </li>
                    <li className="mega-li-small has-children">
                      <Link href="/about">{t('tours')}</Link>
                      <div className="mega-menu">
                        <div className="mega-menu-inner mega-menu-inner-small">
                          <div className="row">
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Tours Listing
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/tour-grid-3">
                                    Tours List - Top Fillter
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tour-grid">
                                    Sidebar Left Fillter
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tour-grid-2">
                                    Sidebar Right Fillter
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tour-list">
                                    Tours List - List 1
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tour-list-2">
                                    Tours List - List 2
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Tour Details
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/tour-detail">
                                    Tour Single 01 - Gallery
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tour-detail-2">
                                    Tour Single 02 - Slideshow
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tour-detail-3">
                                    Tour Single 03 - Video
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/tour-detail-4">
                                    Tour Single 04 - Image
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="has-children">
                      <Link href="/blog">{t('villa')}</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/hotel-grid">Hotel List 01</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-2">Hotel List 02</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-3">Hotel List 03</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-4">Hotel List 04</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-5">Hotel List 05</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-6">Hotel List 06</Link>
                        </li>
                        <li>
                          <Link href="/hotel-detail">Hotel Details 01</Link>
                        </li>
                        <li>
                          <Link href="/hotel-detail-2">Hotel Details 02</Link>
                        </li>
                      </ul>
                    </li>
                   
                    <li className="has-children">
                      <Link href="/blog">{t('hotel')}</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/hotel-grid">Hotel List 01</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-2">Hotel List 02</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-3">Hotel List 03</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-4">Hotel List 04</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-5">Hotel List 05</Link>
                        </li>
                        <li>
                          <Link href="/hotel-grid-6">Hotel List 06</Link>
                        </li>
                        <li>
                          <Link href="/hotel-detail">Hotel Details 01</Link>
                        </li>
                        <li>
                          <Link href="/hotel-detail-2">Hotel Details 02</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="mega-li-small has-children">
                      <Link href="/service">{t('destinations')}</Link>
                      <div className="mega-menu">
                        <div className="mega-menu-inner mega-menu-inner-small mega-menu-inner-destinations">
                          <h6 className="text-lg-bold neutral-1000">
                            Destinations
                          </h6>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/destination">
                                Destinations list 01
                              </Link>
                            </li>
                            <li>
                              <Link href="/destination-2">
                                Destinations list 02
                              </Link>
                            </li>
                            <li>
                              <Link href="/destination-3">
                                Destinations list 03
                              </Link>
                            </li>
                            <li>
                              <Link href="/destination-4">
                                Destinations Details 01
                              </Link>
                            </li>
                            <li>
                              <Link href="/destination-5">
                                Destinations Details 02
                              </Link>
                            </li>
                            <li>
                              <Link href="/destination-6">
                                Destinations Details 03
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    
                    <li className="has-children">
                      <Link href="/javascript:void(0)">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link href="/privacy">Privacy</Link>
                        </li>
                        <li>
                          <Link href="/faq">FAQs</Link>
                        </li>
                        <li>
                          <Link href="/help-center">Help center</Link>
                        </li>
                        <li>
                          <Link href="/become-expert">Become Expert</Link>
                        </li>
                        <li>
                          <Link href="/comming-soon">Coming soon</Link>
                        </li>
                        <li>
                          <Link href="/term">Term</Link>
                        </li>
                        <li>
                          <Link href="/404">404</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="/blog-grid">{t('blog')}</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/blog-grid">Grid Full</Link>
                        </li>
                        <li>
                          <Link href="/blog-grid-2">Grid Sidebar</Link>
                        </li>
                        <li>
                          <Link href="/blog-grid-3">List</Link>
                        </li>
                        <li>
                          <Link href="/blog-detail">Blog Details</Link>
                        </li>
                        <li>
                          <Link href="/blog-detail-2">Blog Details 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">{t('contact')}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              <LanguageDropdown />
              <CurrencyDropdown />
              <div className="d-none d-xxl-inline-block align-middle mr-15">
                <ThemeSwitch />
                <a className="btn btn-default btn-signin" onClick={handleLogin}>
                  {t("signIn")}
                </a>
              </div>
              <div
                className="burger-icon-2 burger-icon-white"
                onClick={handleSidebar}
              >
                <img src="/assets/imgs/template/icons/menu.svg" alt="Travila" />
              </div>
              <div
                className="burger-icon burger-icon-white"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
