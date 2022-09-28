import React from 'react';
import { NavLink } from 'react-router-dom';
import { jobStatuses, currentApplicationStatus } from '../../utils/jobApplicationStatus';
import { upcomingEvents } from '../../utils/upcomingEvents';

const ApplicationStatus = () => {
  const applicationIndex = jobStatuses.indexOf(currentApplicationStatus);

  return (
  <>
    <div className='container application-statuses py-5'>
      {jobStatuses.map((jobStatus, index) => (
        <div className='application-status' key={index}>
          <div className='circle-line-container'>

            {index<applicationIndex ? (
              <div className='progress-circle'></div>
            ) : (
              index===applicationIndex ? (
                <div className='current-progress-circle'>
                  <div className='checkmark'></div>
                </div>
              ) : (
                <div className='no-progress-circle'></div>
              )
            )
            }

            <hr className={index!==jobStatuses.length-1 ? (index<applicationIndex ? 'line' : 'no-line') : ''}/>
          </div>
          <div className={index===applicationIndex ? 'current-status' : 'job-status'}>{jobStatus}</div>
        </div>
      ))}
    </div>

    <div className='applicant-profile-status mt-4'>
      <div className='container text-center mt-3 mb-5'>
        <div className='mb-5'>Your current application status is : <span className='fw-bolder'>&nbsp; {currentApplicationStatus}</span></div>

        <div className='question mb-2'>Is your application status not changing ?</div>
        <div className='hyper-link'>Please feel free to go through the <NavLink to='/faq'>FAQ</NavLink> section where you might get the reason for the application status not being changed.</div>
      </div>

      <div className='upcoming-events p-3'>
        <h5 className='text-center mb-3'>Upcoming Events</h5>
        {upcomingEvents.map((event, index) => (
          <div className='mb-3' key={index}>
            <div className='fw-bold'>{event.title}</div>
            <div>{event.description}</div>
          </div>
        ))}

      </div>
    </div>
  </>
  )
}

export default ApplicationStatus