import { MYBLOG_DESCRIPTIONS, MYBLOG_DEVELOPMENT_LOG, MYBLOG_IMAGES, MYBLOG_INFO } from './myBlog'
import ProjectDevelopmentLog from './projectDevelopmentLog'
import ProjectDescription from './projectDescription'
import ProjectCarousel from './projectCarousel'
import ProjectWrapper from './projectWrapper'

const MyProjectContainer = () => {
  return (
    <ProjectWrapper projectInfo={MYBLOG_INFO}>
      <ProjectCarousel imgsInfo={MYBLOG_IMAGES} />
      <ProjectDescription descriptions={MYBLOG_DESCRIPTIONS} />
      <ProjectDevelopmentLog logList={MYBLOG_DEVELOPMENT_LOG} />
    </ProjectWrapper>
  )
}

export default MyProjectContainer
