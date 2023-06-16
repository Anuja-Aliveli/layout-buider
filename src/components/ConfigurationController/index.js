// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onChangeLeftNavBar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavBar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="layout-bg-container">
          <h1 className="layout-text">Layout</h1>
          <div className="checkbox-container">
            <div className="input-container">
              <input
                type="checkbox"
                id="content"
                className="input"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label-text">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="left"
                className="input"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavBar}
              />
              <label htmlFor="left" className="label-text">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="right"
                className="input"
                checked={showRightNavbar}
                onChange={onChangeRightNavBar}
              />
              <label htmlFor="right" className="label-text">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext>
)
export default ConfigurationController
