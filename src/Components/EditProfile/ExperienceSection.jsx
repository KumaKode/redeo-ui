const ExperienceSection = () => {
  return (
    <div className="card edit-profile-card">
      <div className="card-body pb-5">
        <div className="container">
          <div className="row card-title pt-4">
            <div className="col">
              <h4>Work Experience</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="jm-contact-wrap mb-50 mb-lg-0">
                <form className="jm-contact-form js-profile-form">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="company-name">Company Name</label>
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Ascent Tech"
                        className="profile-input"
                        // value={formData.name}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="designation">Designation</label>
                      <input
                        type="text"
                        name="designation"
                        placeholder="Full Stack Developer"
                        className="profile-input"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="w-100"></div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="start_date">Start From</label>
                      <input
                        type="date"
                        name="start_date"
                        className="profile-input"
                        // value={formData.name}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="end-date-label">
                        <label htmlFor="email">End Date</label>
                        <div className="d-flex align-items-center gap-2">
                          <input
                            type="checkbox"
                            id="present"
                            className="checkbox-input"
                          />
                          <label>Present</label>
                        </div>
                      </div>
                      <input
                        type="date"
                        name="end_date"
                        className="profile-input"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="w-100"></div>
                    <div className="col-12">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        cols="30"
                        rows="10"
                        placeholder="Write here your description"
                        className="profile-input"
                        // value={formData.message}
                        // onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="col col-lg-3 col-xl-3">
                      <button type="submit" className="jm-theme-btn rounded">
                        Save
                      </button>
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
export default ExperienceSection;