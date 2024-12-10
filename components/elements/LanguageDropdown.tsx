import { Link } from '@/i18n/routing'
import Dropdown from 'react-bootstrap/Dropdown'

export default function LanguageDropdown() {

	return (
		<>
			<Dropdown className="d-none d-xxl-inline-block box-dropdown-cart align-middle mr-15">
				<Dropdown.Toggle as="span" className="text-14-medium icon-list icon-account icon-lang">
					<span className="text-14-medium arrow-down">EN</span>
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdown-account" style={{visibility: 'visible'}}>
					<ul>
								<li><Link className="text-sm-medium" href='/' locale='tr'>TR</Link></li>
								<li><Link className="text-sm-medium" href='/' locale='en'>EN</Link></li>
							
					</ul>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}
