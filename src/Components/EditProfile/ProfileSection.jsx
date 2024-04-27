const ProfileSection = () => {
  return (
    <div className="card edit-profile-card">
      <div className="card-body w-100 pb-5">
        <div className="container">
          <div className="row card-title pt-4">
            <div className="col">
              <h4>General Information</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="jm-contact-wrap mb-50 mb-lg-0">
                <form className="jm-contact-form js-profile-form">
                <div className="row ">
                  <div className="col">
                    <div className="browse profile-image w-100 d-flex align-items-center gap-4">
                      <label
                        htmlFor="label-profile-image"
                        className="label-profile-image"
                      >
                        <div className="profile-label">
                          <span>
                            <i className="fal fa-arrow-up"></i>
                          </span>
                          <span>Browse Image</span>
                        </div>
                        <input
                          type="file"
                          id="labelprofile-image"
                          className="input-profile-image form-control"
                        />
                      </label>
                      <span>
                        Max file size is 1MB, Minimum dimension: 330x300 And
                        Suitable files are .jpg & .png
                      </span>
                    </div>
                    <div className="label-divider w-100 my-4"></div>
                  </div>
                </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="profile-input"
                        // value={formData.name}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="job-title">Job Title</label>
                      <input
                        type="text"
                        name="job_title"
                        placeholder="Full Stack Developer"
                        className="profile-input"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="w-100"></div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="+92 307 5313 442"
                        className="profile-input"
                        // value={formData.name}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="johndoe@gmail.com"
                        className="profile-input"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="w-100"></div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="gender">Gender</label>
                      <select
                        className="profile-input"
                        // value={jobType}
                        // onChange={(e) => setJobType(e.target.value)}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        name="age"
                        placeholder="25"
                        className="profile-input"
                        // value={formData.name}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="w-100"></div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="qualification">Qualification</label>
                      <select
                        className="profile-input"
                        // value={jobType}
                        // onChange={(e) => setJobType(e.target.value)}
                      >
                        <option>Bachelor Degree</option>
                        <option>Master Degree</option>
                        <option>Ph.D.</option>
                      </select>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="experience">Experience</label>
                      <select
                        className="profile-input"
                        // value={jobType}
                        // onChange={(e) => setJobType(e.target.value)}
                      >
                        <option>1-2 Years</option>
                        <option>2-3 Years</option>
                        <option>3-4 Years</option>
                        <option>4-5 Years</option>
                        <option>5-6 Years</option>
                        <option>6 Years</option>
                      </select>
                    </div>
                    <div className="w-100 mt-3"></div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Pakistan"
                        className="profile-input"
                        // value={formData.name}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Lahore"
                        className="profile-input"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="w-100"></div>
                    <div className="col-12 ">
                      <label htmlFor="address">Address</label>
                      <input
                      type="text"
                        name="address"
                        placeholder="Gulberg III, Lahore"
                        className="profile-input"
                        // value={formData.message}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="w-100"></div>
                    <div className="col-12 ">
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
  );
};

export default ProfileSection;
