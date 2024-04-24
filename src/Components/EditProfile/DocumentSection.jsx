const DocumentSection = () => {
  return (
    <div className="card edit-profile-card">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="jm-contact-wrap mb-50 mb-lg-0">
                <form className="jm-contact-form js-profile-form">
                <div className="row ">
                  <div className="col">
                    <div className="browse profile-image w-100">
                      <label
                        htmlFor="label-resume"
                        className="label-resume"
                      >
                        <div className="resume-label">
                          <span>
                          <i className="fa-duotone fa-file-pdf"></i>
                          </span>
                          <span>Upload Your Resume</span>
                        </div>
                        <input
                          type="file"
                          id="labelprofile-image"
                          className="input-resume form-control"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentSection; 
