import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SeaShellIcon from '../../../images/seashell-icon.svg'

class ComponentHeader extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="component-header-container">
                {(this.props.heading) ?
                    <h2 className={this.props.className}>{this.props.heading}</h2> :
                    null
                }
                {(this.props.underline) ? 
                    <div className="header-underline">
                        <div className="bar left"></div>
                        <img className="seashell-icon" src={SeaShellIcon} />
                        <div className="bar right"></div>
                    </div> 
                    : null 
                }
            </div>
        )
    }
}

ComponentHeader.defaultProps = {
    className: "",
    underline: false
}

ComponentHeader.propTypes = {
    heading: PropTypes.string,
    className: PropTypes.string,
    underline: PropTypes.bool
}

export default ComponentHeader