import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {MutableRefObject, useEffect, useRef} from 'react'
import {ToggleComponent} from '../../../assets/ts/components'

type PropsType = {
  sidebarRef: MutableRefObject<HTMLDivElement | null>
}

const SidebarLogo = (props: PropsType) => {
  const {config} = useLayout()
  const toggleRef = useRef<HTMLDivElement>(null)

  const appSidebarDefaultMinimizeDesktopEnabled =
    config?.app?.sidebar?.default?.minimize?.desktop?.enabled
  const appSidebarDefaultCollapseDesktopEnabled =
    config?.app?.sidebar?.default?.collapse?.desktop?.enabled
  const toggleType = appSidebarDefaultCollapseDesktopEnabled
    ? 'collapse'
    : appSidebarDefaultMinimizeDesktopEnabled
    ? 'minimize'
    : ''
  const toggleState = appSidebarDefaultMinimizeDesktopEnabled ? 'active' : ''
  const appSidebarDefaultMinimizeDefault = config.app?.sidebar?.default?.minimize?.desktop?.default

  useEffect(() => {
    setTimeout(() => {
      const toggleObj = ToggleComponent.getInstance(toggleRef.current!) as ToggleComponent | null

      if (toggleObj === null) {
        return
      }

      // Add a class to prevent sidebar hover effect after toggle click
      toggleObj.on('kt.toggle.change', function () {
        // Set animation state
        props.sidebarRef.current!.classList.add('animating')

        // Wait till animation finishes
        setTimeout(function () {
          // Remove animation state
          props.sidebarRef.current!.classList.remove('animating')
        }, 300)
      })
    }, 600)
  }, [toggleRef, props.sidebarRef])

  return (
			  <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
				  {/*begin::Logo image*/}
				  <a href="dashboard.html">
					  <img alt="Logo" src="media/logos/logo.svg" className="h-40px app-sidebar-logo-default" />
					  <img alt="Logo" src="media/logos/logo-small.svg"
						  className="h-30px app-sidebar-logo-minimize" />
				  </a>
				  {/*end::Logo image*/}
				  {/*begin::Sidebar toggle*/}
				  <div id="kt_app_sidebar_toggle"
					  className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
					  data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
					  data-kt-toggle-name="app-sidebar-minimize">
					  <i className="ki-duotone ki-black-right-line fs-3 rotate-180">
						  <span className="path1"></span>
						  <span className="path2"></span>
					  </i>
				  </div>
				  {/*end::Sidebar toggle*/}
			  </div>
  )
}

export {SidebarLogo}
