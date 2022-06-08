import ProjectDescription from './projectDescription'
import ProjectCarousel from './projectCarousel'
import { MYBLOG_DESCRIPTIONS, MYBLOG_DEVELOPMENT_LOG, MYBLOG_IMAGES } from './myBlog'
import ProjectWrapper from './projectWrapper'
import ProjectDevelopmentLog from './projectDevelopmentLog'

const MyProjectContainer = () => {
  return (
    <ProjectWrapper title='My Blog' date='2022-02-08 ~ ing...' git='https://github.com/jgjgill/my_project_portfolio'>
      <ProjectCarousel imgsInfo={MYBLOG_IMAGES} />
      <ProjectDescription descriptions={MYBLOG_DESCRIPTIONS} />
      <ProjectDevelopmentLog logContents={MYBLOG_DEVELOPMENT_LOG} />
    </ProjectWrapper>
  )
}

export default MyProjectContainer
