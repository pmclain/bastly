import { connect } from 'react-redux'
import { setActiveMenu } from '../actions'
import { Menu as MenuComponent } from '../components/Menu'

const mapStateToProps = state => {
  return {
    activeMenu: state.activeMenu
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveMenu: menu => {
      dispatch(setActiveMenu(menu))
    }
  }
}

const Menu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuComponent)

export default Menu