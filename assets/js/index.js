import Alert from 'js/bootstrap/src/alert'
import Button from 'js/bootstrap/src/button'
import Carousel from 'js/bootstrap/src/carousel'
import Collapse from 'js/bootstrap/src/collapse'
import Dropdown from 'js/bootstrap/src/dropdown'
import Modal from 'js/bootstrap/src/modal'
import Offcanvas from 'js/bootstrap/src/offcanvas'
import Popover from 'js/bootstrap/src/popover'
import ScrollSpy from 'js/bootstrap/src/scrollspy'
import Tab from 'js/bootstrap/src/tab'
import Toast from 'js/bootstrap/src/toast'
import Tooltip from 'js/bootstrap/src/tooltip'

import PhotoSwipeLightbox from 'photoswipe/lightbox';

const lightbox = new PhotoSwipeLightbox({
	gallery: '.gallery--real-estate',
	children: 'a',
	showHideAnimationType: 'fade',
	zoom: false,
	doubleTapAction: false,
	bgOpacity: 0.5,
	spacing: 0.4,
	loop: true,
	indexIndicatorSep: " of ",
	mainClass: 'text-bg-primary',
	pswpModule: () => import('photoswipe')
});
lightbox.init();


export default {
	Alert,
	Button,
	Carousel,
	Collapse,
	Dropdown,
	Modal,
	Offcanvas,
	Popover,
	ScrollSpy,
	Tab,
	Toast,
	Tooltip
}