import React from 'react';
import {withStyles} from '@material-ui/core/styles';


class Header extends React.Component {
    render() {
        return (
            <header role="heading" className="layout__head">
                <div className="">
                    <nav id="top-menu-bar" className="base-top-bar top-bar" data-functional-selector="topbar">
                        <div className="top-bar__inner">
                            <button type="button" role="button" data-functional-selector="button"
                                    className="icon-button top-bar__menu"><span className="icon-button__wrap"><span
                                className="icon icon-button__icon"><svg className="icon__svg"
                                                                        data-functional-selector="icon"
                                                                        focusable="false"><use
                                className="icon__use" href="#menu"></use></svg></span></span></button>
                            <button type="button" role="button" data-functional-selector="button"
                                    className="text-button kahoot-logo top-bar__logo">Kahoot!
                            </button>
                            <ul className="list top-bar__main-links list--unordered list--inline">

                                <li className="list__item top-bar__main-links-item"><a
                                    className="media-link top-bar-link"
                                    data-functional-selector="kahoots-top-link"
                                    href="/kahoots"><span
                                    className="icon media-link__media top-bar-link__media"><svg className="icon__svg"
                                                                                                data-functional-selector="icon"
                                                                                                focusable="false"><use
                                    className="icon__use" href="#kahoots"><svg id="kahoots" viewBox="0 0 32 32"
                                                                               width="100%" height="100%"><path
                                    d="M11 15h14v2H11v-2zm0-6h14v2H11V9zm0 12h14v2H11v-2zm-3 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg></use></svg></span>
                                    <div className="media-link__text top-bar-link__text">Kudo</div>
                                </a></li>

                            </ul>
                            <div className="top-bar__actions">
                                <button type="button" role="button" data-functional-selector="button"
                                        className="icon-button top-bar__primary-button button button--white"><span
                                    className="icon-button__wrap"><span className="icon icon-button__icon"><svg
                                    className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                    className="icon__use" href="#add"></use></svg></span><span
                                    className="icon-button__text">Tạo mới</span></span></button>
                                <div className="top-bar__action-menu">
                                    <div aria-haspopup="true"
                                         className="action-menu top-bar-action-menu action-menu--static">
                                        <button type="button" role="button"
                                                data-functional-selector="action-menu__toggle"
                                                className="icon-button action-menu__icon-button"><span
                                            className="icon-button__wrap"><span
                                            className="icon icon-button__icon action-menu__toggle-icon top-bar-action-menu__icon top-bar-action-menu__icon--settings-menu"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#settings-menu"><svg id="settings-menu"
                                                                                             viewBox="0 0 32 32"
                                                                                             width="100%" height="100%"><g
                                            transform="translate(6 6)"><circle cx="10" cy="10" r="2"></circle><path
                                            d="M19.98 12.573a.979.979 0 0 1-.117.696l-2.042 3.464a1.018 1.018 0 0 1-.62.465 1.041 1.041 0 0 1-.775-.1l-1.407-.795a8.266 8.266 0 0 1-1.956 1.111V19c0 .552-.456 1-1.021 1H7.958a1.01 1.01 0 0 1-1.021-1v-1.585a8.308 8.308 0 0 1-1.957-1.113l-1.407.795a1.034 1.034 0 0 1-1.394-.367l-.43-.73-1.612-2.732a.976.976 0 0 1-.077-.838.998.998 0 0 1 .45-.529l1.404-.794A7.96 7.96 0 0 1 1.832 10a7.6 7.6 0 0 1 .082-1.107V8.89L.51 8.098a1.02 1.02 0 0 1-.45-.528.974.974 0 0 1-.043-.519c.02-.111.06-.22.12-.319L1.747 4l.432-.73a1.034 1.034 0 0 1 1.394-.367l1.407.795a8.308 8.308 0 0 1 1.957-1.113V1c0-.552.456-1 1.02-1h4.085a1.01 1.01 0 0 1 1.021 1v1.586a8.266 8.266 0 0 1 1.956 1.111l1.407-.795c.234-.133.514-.168.775-.1.262.068.484.236.62.465l2.042 3.464c.13.22.164.466.117.696A1.02 1.02 0 0 0 19.956 7h-2.609l-.127.072.364-.207-1.02-1.731-1.149.649c-.39.221-.883.164-1.211-.14a6.215 6.215 0 0 0-2.453-1.392 1.003 1.003 0 0 1-.73-.958V2H8.979v1.293c0 .441-.296.832-.73.958a6.21 6.21 0 0 0-2.333 1.284v.011c-.04.034-.082.062-.12.099a1.04 1.04 0 0 1-1.212.138l-1.147-.648-1.02 1.731 1.145.648c.08.046.153.101.216.164a.987.987 0 0 1 .267.933 5.966 5.966 0 0 0-.17 1.455c.004.433.06.865.17 1.324a.983.983 0 0 1-.483 1.096l-1.146.648 1.02 1.731 1.148-.648.032-.017a1.04 1.04 0 0 1 1.18.155c.038.037.08.065.12.099v.01A6.21 6.21 0 0 0 8.25 15.75c.433.126.729.517.729.958V18h2.042v-1.293c0-.442.297-.832.73-.958a6.215 6.215 0 0 0 2.453-1.392 1.038 1.038 0 0 1 1.211-.14l1.148.649 1.021-1.731-.364-.207.127.072h2.609c.035-.14.05-.285.024-.427zm-3.52-.077l-.126-.092a.998.998 0 0 1-.407-.773.992.992 0 0 0 .51.853l.022.012zm-.334-2.43zm-.199-1.697a.998.998 0 0 1 .407-.773l.125-.092-.021.012a.992.992 0 0 0-.511.853zM18.168 10z"></path><path
                                            d="M.02 12.573a.979.979 0 0 0 .117.696l2.042 3.464c.136.229.358.397.62.465.261.068.54.033.775-.1l1.407-.795a8.266 8.266 0 0 0 1.956 1.111V19c0 .552.456 1 1.021 1h4.084a1.01 1.01 0 0 0 1.021-1v-1.585a8.308 8.308 0 0 0 1.957-1.113l1.407.795a1.033 1.033 0 0 0 1.394-.367l.43-.73 1.612-2.732a.976.976 0 0 0 .077-.838.998.998 0 0 0-.45-.529l-1.404-.794A7.96 7.96 0 0 0 18.168 10a7.6 7.6 0 0 0-.082-1.107V8.89l1.404-.793a1.02 1.02 0 0 0 .45-.528.974.974 0 0 0 .043-.519.976.976 0 0 0-.12-.319L18.253 4l-.432-.73a1.034 1.034 0 0 0-1.394-.367l-1.407.795a8.308 8.308 0 0 0-1.957-1.113V1c0-.552-.456-1-1.02-1H7.957a1.01 1.01 0 0 0-1.021 1v1.586A8.266 8.266 0 0 0 4.98 3.697l-1.407-.795a1.041 1.041 0 0 0-.775-.1 1.018 1.018 0 0 0-.62.465L.137 6.731a.979.979 0 0 0-.117.696A1.02 1.02 0 0 1 .044 7h2.609l.127.072-.364-.207 1.02-1.731 1.149.649c.39.221.883.164 1.211-.14A6.215 6.215 0 0 1 8.25 4.251c.433-.126.73-.516.73-.958V2h2.042v1.293c0 .441.296.832.73.958a6.21 6.21 0 0 1 2.333 1.284v.011c.04.034.082.062.12.099a1.04 1.04 0 0 0 1.212.138l1.147-.648 1.02 1.731-1.145.648c-.08.046-.153.101-.216.164a.987.987 0 0 0-.267.933 5.966 5.966 0 0 1 .17 1.455 5.93 5.93 0 0 1-.17 1.324.983.983 0 0 0 .483 1.096l1.146.648-1.02 1.731-1.148-.648a1.04 1.04 0 0 0-1.212.138c-.038.037-.08.065-.12.099v.01a6.21 6.21 0 0 1-2.334 1.285 1.003 1.003 0 0 0-.729.958V18H8.98v-1.293c0-.442-.297-.832-.73-.958a6.215 6.215 0 0 1-2.453-1.392 1.038 1.038 0 0 0-1.211-.14l-1.148.649-1.021-1.731.364-.207-.127.072H.044a1.02 1.02 0 0 1-.024-.427zm3.52-.077l.126-.092a.998.998 0 0 0 .407-.773.992.992 0 0 1-.51.853l-.022.012zm.334-2.43zm.199-1.697a.998.998 0 0 0-.407-.773l-.125-.092.021.012a.992.992 0 0 1 .511.853zM1.832 10z"></path></g></svg></use></svg></span><div
                                            className="visibly-hidden" id="settings-menu__accessibility-description">Open the settings</div></span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

const styles = {};
export default withStyles(styles)(Header);