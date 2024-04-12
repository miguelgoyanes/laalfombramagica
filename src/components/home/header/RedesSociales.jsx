import styles from './Header.module.css'

const RedesSociales = () => {

    return (
        <div className={`d-flex gap-3 ${styles.redesSociales}`}>
            <a
                href='https://www.instagram.com/laalfombramagica_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                target='blanck'
                className='text-decoration-none text-light fs-2 ms-4 efect-hover-gir'
            >
                <i className="bi bi-instagram"></i>
            </a>
            <a
                href='https://www.tiktok.com/@laalfombramagica_?is_from_webapp=1&sender_device=pc'
                target='blanck'
                className='text-decoration-none text-light fs-2 ms-4 efect-hover-gir'
            >
                <i className="bi bi-tiktok"></i>
            </a>
            <a
                href='mailto:alma.laalfombramagica@gmail.com'
                target='blanck'
                className='text-decoration-none text-light fs-2 ms-4 efect-hover-gir'
            >
                <i className="bi bi-envelope"></i>
            </a>
        </div>
    )
}

export default RedesSociales
