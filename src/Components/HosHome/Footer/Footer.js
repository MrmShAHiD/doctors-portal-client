function Footer() {
    return (
        <div class="container-fluid foot">
            <div class="row">
                <div class="col-xl-6 col-md-6 col-sm-6 col-12 p-4">
                <div className="container">
                        <div className="mb-5 mx-auto">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email address"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your name"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" className="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-6 col-12 p-4">
                    <p class="footer-head">Course</p>
                    <ul class="list-unstyled">
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>Business</li>
                        <li>Marketing</li>
                        <li>Engineering</li>
                    </ul>
                </div>
                
                <div class="col-xl-12  text-center p-3">
                    <h6 class="footer-copyright">&copy; 2020 - BRB Hospital</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;