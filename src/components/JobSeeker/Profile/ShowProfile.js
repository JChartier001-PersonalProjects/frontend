import React from 'react'
import ResumeList from '../Resume/ResumeList'
import EducationList from '../Education/EducationList'
import SkillList from '../Skill/SkillList'
import '../JobSeeker.css'

function ShowProfile() {
    return (
        <div className="profile-content">
            <div>Tanveer Saleem</div>
            <div>Website Link</div>
            <SkillList />
            <ResumeList />
            <EducationList />
        </div>
    )
}

export default ShowProfile;
