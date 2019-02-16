import Component from 'flarum/Component'
import LoadingIndicator from 'flarum/components/LoadingIndicator'
import classList from 'flarum/utils/classList'
import extractText from 'flarum/utils/extractText'

/**
 * The `UserBio` component displays a user's bio, optionally letting the user
 * edit it.
 */
export default class UserBio extends Component {
  view() {
    const user = this.props.user
    let subContent = m.trust(bioHtml)
    let content = <div className="UserBio-content">{subContent}</div>
    
    return (
      <div className={'UserBio'}>
        {content}
      </div>
    )
  }
}
