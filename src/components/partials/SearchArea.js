import React from 'react';
import {withStyles} from '@material-ui/core/styles';


class SearchArea extends React.Component {
    render() {
        return (
            <div className="backbone-components">
                <div className="discover-header">
                    <div className="container discover-header__container">
                        <div className="discover-header__search-input-wrap">
                            <div>
                                <div className="search-box" data-functional-selector="search-box">
                                    <div className="react-autosuggest__container">
                                        <div>
                                            <input type="text"
                                                   data-functional-selector="search-box__input-field"
                                                   placeholder="Find me a kahoot about..." value=""
                                                   autoComplete="off" role="combobox" aria-autocomplete="list"
                                                   aria-owns="react-autowhatever-1" aria-expanded="false"
                                                   className="search-field__input"/>
                                            <button type="button" role="button"
                                                    data-functional-selector="search-box__search-button"
                                                    className="icon-button search-box__button"
                                                    aria-label="Search">
                                                            <span className="icon-button__wrap"><span
                                                                className="icon icon-button__icon search-box__icon"><svg
                                                                className="icon__svg" data-functional-selector="icon"
                                                                focusable="false"><use className="icon__use"
                                                                                       href="#search-big"></use></svg></span></span>
                                            </button>
                                        </div>
                                        <div id="react-autowhatever-1"
                                             className="react-autosuggest__suggestions-container"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {};
export default withStyles(styles)(SearchArea);