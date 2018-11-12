import { connect } from 'react-redux'
import { setActiveMenu } from '../actions'
import { Content as ContentComponent } from '../components/Content'

const mapStateToProps = state => {
  return {
    activeMenu: state.activeMenu,
    activeService: state.activeService,
    activeVersion: state.activeVersion
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveMenu: menu => {
      dispatch(setActiveMenu(menu))
    }
  }
}

const Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentComponent)

export default Content