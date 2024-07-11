import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
import CoursInfo from '../../../_metronic/layout/components/CoursDetailComponent/coursInfo'
import CoursImage from '../../../_metronic/layout/components/CoursDetailComponent/coursImage'
import CoursProgression from '../../../_metronic/layout/components/CoursDetailComponent/CoursProgression'

import CourscardList from '../../../_metronic/layout/components/CoursDetailComponent/CourCardList'
import CoursCard from '../../../_metronic/layout/components/CoursDetailComponent/CoursCard'
const CoursDetail = () => {
    const intl = useIntl();
  return (
    <div>
     <PageTitle breadcrumbs={[]}>
				{intl.formatMessage({ id: "Bonjour Sanae Mrabet," })}
			</PageTitle>
      <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
        <CoursImage/>
        <CoursInfo/>
        <CoursProgression/>
      </div>
      <CourscardList/> 
      
    </div>
  )
}

export default CoursDetail
