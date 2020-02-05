import React from 'react'


function EducationList() {
    return (
        <section>
            <div className="section_content">
                <div className="section_top_content">
                    <h2 className="section_title">Education</h2>
                    <div className="section_action">
                        <div><a href=''>Add Education</a></div>
                        <div>
                            <a data-control-name="edit_skills" href="/in/naveed-saleem-101a69a4/detail/skills/" id="ember3332" className="pv-profile-section__edit-action artdeco-button artdeco-button--tertiary artdeco-button--circle ember-view">
                                <li-icon type="pencil-icon" role="img" aria-label="Edit skills">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-supported-dps="24x24" fill="currentColor" focusable="false">
                                        <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                                    </svg>
                                </li-icon>
                                </a>
                        </div>
                    </div>
                </div>
                <div> 
                    <p><b>University of the Punjab, Lahore</b></p>
                    <p>Master's degree</p>
                    <p>2003 - 2006</p>
                    <hr></hr>
                    <p><b>National College Of Business Administration & Economics</b></p>
                    <p>Bachelor's degree</p>
                    <p>2001 - 2003</p>
                    <hr></hr>
                </div>
            </div>
        </section>
    )
}

export default EducationList;