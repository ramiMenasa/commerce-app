function Footer() {
    const currentDay ="6/14/2024";

    return ( 
        <footer className="bg-light text-center py-3 ">
            <div className="container">
                <img src={require('../assets/logo.webp')} alt="Momentum Logo" className='img-fluid'></img>
                <p className='mt-3'>{currentDay}</p>
            </div>
        </footer>
     );
}

export default Footer;
