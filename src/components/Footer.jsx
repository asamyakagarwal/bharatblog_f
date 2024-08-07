import React from "react";
function Footer() {
  return (
    <div className="MyFooter container-fluid p-0 m-0">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="">

            <div className="row d-flex justify-content-center  align-items-center">
              <div className="col">
                <p className="pt-2 ">
                  <strong>Connect With Me</strong>
                </p>
              </div>



              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <a href="https://www.linkedin.com/in/samyakagarwal7/" target="_blank"
                    style={{ marginRight: "20px" }}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/asamyakagarwal" target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

            </div>



          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "black" }}
        >
          © 2024 Copyright : BharatBlog.com
        </div>
      </footer>
    </div>
  );
}

export default Footer;
