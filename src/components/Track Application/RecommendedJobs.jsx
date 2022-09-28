import React from 'react';
import { recommendedJobsData } from '../../utils/recommendedJobsData';

const RecommendedJobs = () => {
  return (
    <div className='recommended-jobs py-5'>
      <div className='container'>
        <div className='title mb-4'>Recommended Jobs</div>

        <div className='recommended-jobs-container'>
          {recommendedJobsData.map((job, index) => (
            <div className='job-card' key={index}>
              <div className='job-title mb-3'>{job.jobTitle}</div>
              <div className='job-description mb-4'>{job.jobDescription}</div>
              <div className='job-details mb-5'>
                <div className='job-details-specification'>{job.jobType}</div>
                <div className='job-details-specification'>Min. {job.minimumExperience}{job.minimumExperience === 0 || job.minimumExperience === 1 ? 'Year' : 'Years'}</div>
                <div className='job-details-specification'>{job.seniorityLevel}</div>
              </div>
              <div className='job-actions-container'>
                <div className='job-action bg-primary text-white'>Apply</div>
                <div className='job-action bg-secondary bg-opacity-25 text-secondary'>Save</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecommendedJobs