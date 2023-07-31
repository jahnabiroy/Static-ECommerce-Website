export default function Contact() {
    return(
        <div className='container-fluid' style={{backgroundColor:'#033a3d'}}>
            <div className="p-3 text-center text-white" style={{backgroundColor:'#033a3d', fontFamily:'larger'}}>
                <h2 style={{textShadow:'0px 0px 2px #fff'}}>GET IN TOUCH</h2>
            </div>
            <div className="row">
                <div className="col-sm-2"></div>
                <form id='form' className="col-sm-4 p-5">
                    <h5 className="text-center text-white">Leave a Message!</h5>
                    <div className="text-white-50">NAME</div>
                    <input type="text" className="mt-1 mb-4 form-control" placeholder="Name" aria-label="text" aria-describedby="btnGroupAddon"/>
                    <div className="text-white-50">E-MAIL ADDRESS</div>
                    <input type="email" className="mt-1 mb-4 form-control" placeholder="Email Address" aria-label="emailid" aria-describedby="btnGroupAddon"/>
                    <div className="text-white-50">YOUR MESSAGE</div>
                    <input type="text" className="pb-5 mt-1 mb-4 form-control" placeholder="Your Message" aria-label="text" aria-describedby="btnGroupAddon"/>
                    <button type="submit" className="btn btn-warning mb-4">
                        SEND
                    </button>
                </form>
                <div className="container-fluid col-sm-5 ms-auto">
                    <div className="row">
                        <div className="p-4 col-sm-2">
                            <i style={{color:'white'}} className="bi bi-geo-alt"></i>
                        </div>
                        <div className="pt-4 col-sm-8">
                            <p className="text-white">IIT Campus, Indian Institute of Technology Delhi, Hauz Khas, New Delhi, Delhi 110016</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="p-4 col-sm-2">
                            <i style={{color:'white'}} className="bi bi-telephone"></i>
                        </div>
                        <div className="pt-4 col-sm-8">
                            <p className="text-white">+91 8212*****9</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="p-4 col-sm-2">
                            <i style={{color:'white'}} className="bi bi-envelope"></i>
                        </div>
                        <div className="pt-4 pb-4 col-sm-8">
                            <a className="text-white" href='devclub.iitd@gmail.com'>devclub.iitd@gmail.com</a>
                        </div>
                    </div>
                    <div className='col-sm-5'>
                        <a className="btn" style={{color:'white'}} href="#!" role="button">
                            <i className="bi bi-youtube"></i>
                        </a>
                        <a className="btn" style={{color:'white'}} href="#!" role="button">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a className="btn" style={{color:'white'}} href="#!" role="button">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a className="btn" style={{color:'white'}} href="#!" role="button">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8373747774863!2d77.19020022463053!3d28.544607438069555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df643557f7f%3A0xbc1cbe5d8a211254!2sIIT%20Campus%2C%20Hauz%20Khas%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1690301858935!5m2!1sen!2sin" loading="lazy" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}