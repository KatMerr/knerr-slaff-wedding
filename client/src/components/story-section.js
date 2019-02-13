import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InlineImage from './inline-image'
import ComponentHeader from './component-header'

class StorySection extends Component {

    render(){
        return (
            <div>
                {(this.props.includeHeader) ? <ComponentHeader heading={this.props.headerTitle} underline={true} /> : null}
                <div className="story-section clearfix">
                    {(this.props.floatedImage) ? <InlineImage src={this.props.floatedImage} float={this.props.floatDirection} /> : null}
                    {(this.props.paragraphs && this.props.subHeader) ? 
                        <div>
                            <h3>{this.props.subHeader}</h3>
                            {this.props.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                        </div>
                        : null
                    }
                    {this.props.content}
                </div>
            </div>
        )
    }
}

StorySection.defaultProps = {
    floatedImage: "",
    floatDirection: "right",
    subHeader: "",
    paragraphs: [],
    includeHeader: false,
    headerTitle: ""

}

StorySection.propTypes = {
    floatedImage: PropTypes.string,
    floatDirection: PropTypes.string,
    subHeader: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
    includeHeader: PropTypes.bool,
    headerTitle: PropTypes.string
}

export default StorySection