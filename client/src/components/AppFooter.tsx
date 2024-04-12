import '../assets/css/AppFooter.css'
import '../assets/css/global.css'
import { useLocation} from "react-router-dom";


function AppFooter(){
    const location = useLocation();
return(
    <footer className={`container ${location.pathname==='/' ? "bookstore-footer-home-bg" : "bookstore-footer-others-bg" }`}>
            <section className="links">
                <a href="mailto:sonagj@vt.edu">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.2 3.5L9 7.875L1.8 3.5V1.75L9 6.125L16.2 1.75M16.2 0H1.8C0.801 0 0 0.77875 0 1.75V12.25C0 12.7141 0.189642 13.1592 0.527208 13.4874C0.864773 13.8156 1.32261 14 1.8 14H16.2C16.6774 14 17.1352 13.8156 17.4728 13.4874C17.8104 13.1592 18 12.7141 18 12.25V1.75C18 0.77875 17.19 0 16.2 0Z"
                            fill="#1C0461"/>
                    </svg>
                    <label>Contact Us</label>
                </a>
                <a href="https://maps.app.goo.gl/Nz1BNvRBYfHCtjQVA">
                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.00008 8.58335C5.44755 8.58335 4.91764 8.36386 4.52694 7.97316C4.13624 7.58246 3.91675 7.05255 3.91675 6.50002C3.91675 5.94749 4.13624 5.41758 4.52694 5.02688C4.91764 4.63618 5.44755 4.41669 6.00008 4.41669C6.55262 4.41669 7.08252 4.63618 7.47322 5.02688C7.86392 5.41758 8.08342 5.94749 8.08342 6.50002C8.08342 6.77361 8.02953 7.04452 7.92483 7.29728C7.82013 7.55004 7.66668 7.7797 7.47322 7.97316C7.27977 8.16661 7.0501 8.32007 6.79734 8.42477C6.54458 8.52947 6.27367 8.58335 6.00008 8.58335ZM6.00008 0.666687C4.45299 0.666687 2.96925 1.28127 1.87529 2.37523C0.78133 3.46919 0.166748 4.95292 0.166748 6.50002C0.166748 10.875 6.00008 17.3334 6.00008 17.3334C6.00008 17.3334 11.8334 10.875 11.8334 6.50002C11.8334 4.95292 11.2188 3.46919 10.1249 2.37523C9.03091 1.28127 7.54718 0.666687 6.00008 0.666687Z"
                            fill="#1C0461"/>
                    </svg>
                    <label>Directions</label>
                </a>
            </section>
            <section className="copyright">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.56 7.145C6.5975 6.8975 6.68 6.68 6.785 6.5C7.01 6.08 7.3925 5.8625 7.91 5.855C8.2475 5.855 8.555 6.005 8.7725 6.2225C8.9825 6.455 9.125 6.7775 9.125 7.1H10.475C10.46 6.7475 10.3925 6.425 10.25 6.125C10.1375 5.84 9.965 5.585 9.74 5.375C8.6525 4.37 6.635 4.5125 5.7125 5.6525C4.745 6.905 4.7225 9.095 5.705 10.3475C6.6125 11.465 8.6 11.6225 9.68 10.625C9.9125 10.4375 10.1 10.205 10.25 9.935C10.37 9.665 10.4525 9.38 10.46 9.0725H9.125C9.125 9.23 9.0725 9.3725 9.005 9.5C8.9375 9.6425 8.8475 9.755 8.75 9.8525C8.5025 10.0475 8.21 10.1525 7.895 10.1525C7.625 10.145 7.4 10.0925 7.2275 9.98C7.04 9.875 6.875 9.7025 6.785 9.5C6.41 8.825 6.47 7.8875 6.56 7.145ZM8 0.5C3.875 0.5 0.5 3.875 0.5 8C0.8975 17.9525 15.125 17.945 15.5 8C15.5 3.875 12.125 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2.33 0.0425003 13.67 0.0425003 14 8C14 11.3075 11.3075 14 8 14Z"
                        fill="#1C0461"/>
                </svg>
                <label> 2024 PaperPulse. All Rights Reserved.</label>
            </section>
            <section className="social-media-icons">
                <a href={"https://www.instagram.com/virginia.tech/"}>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                            fill="#1C0461"/>
                    </svg>

                </a>
                <a href={"https://www.facebook.com/virginiatech/"}>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 0.039978C4.5 0.039978 0 4.52998 0 10.06C0 15.06 3.66 19.21 8.44 19.96V12.96H5.9V10.06H8.44V7.84998C8.44 5.33998 9.93 3.95998 12.22 3.95998C13.31 3.95998 14.45 4.14998 14.45 4.14998V6.61998H13.19C11.95 6.61998 11.56 7.38998 11.56 8.17998V10.06H14.34L13.89 12.96H11.56V19.96C13.9164 19.5878 16.0622 18.3855 17.6099 16.57C19.1576 14.7546 20.0054 12.4456 20 10.06C20 4.52998 15.5 0.039978 10 0.039978Z"
                            fill="#1C0461"/>
                    </svg>

                </a>
                <a href={"https://twitter.com/virginia_tech"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="24" height="24" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_182_725" transform="scale(0.01)"/>
                            </pattern>
                            <image id="image0_182_725" width="100" height="100"
                                   xlinkHref="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                </a>
                <a href={"https://www.youtube.com/@virginiatech"}>
                    <svg width="24" height="24" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                            fill="#1C0461"/>
                    </svg>
                </a>
            </section>
        </footer>
)
}

export default AppFooter;
