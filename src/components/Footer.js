function Footer() {
    const currentDay = new Date().toLocaleDateString();

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