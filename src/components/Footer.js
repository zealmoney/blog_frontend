import 'semantic-ui-css/semantic.min.css'

const Footer = () => {
    return(
        <div>
            <div className='ui dividing header'>

            </div>
            <div className='ui three column grid'>
                <div className='column'>
                    <h3>News App Incorporated</h3>
                    <p className='meta'>
                        &copy; All Rights Reserved 2023
                    </p>
                </div>
                <div className='column'>
                    <h4>Policy</h4>
                    <p className='meta'>
                        We strongly advise against using the content of this website
                        to cause financial harm to any individual.
                    </p>
                </div>
                <div className='column'>
                    <h4>Social Media</h4>
                    <p>
                        <i className='facebook icon'></i>
                        <span>newspaper@facebook.com</span>
                    </p>
                    <p>
                        <i className='twitter icon'></i>
                        <span>newspaper@twitter.com</span>
                    </p>


                </div>

            </div>
        </div>
    )

};

export default Footer;