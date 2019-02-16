import { extend } from 'flarum/extend'
import 'autolink-js'
import Component from 'flarum/Component'
import computed from 'flarum/utils/computed'
import UserCard from 'flarum/components/UserCard'
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import classList from 'flarum/utils/classList'
import Model from 'flarum/Model'
import User from 'flarum/models/User'

export default class UserBio extends Component {
    
    view(){

        const user = this.props.user
        let content
        let subContent

        
        const bioHtml = user.bioHtml()
        subContent = m.trust(bioHtml)
        

        content = <div className="UserBio-content">{subContent}</div>

        return (
            <div className="UserBio">
                {content}
            </div>
        )
    }
}


app.initializers.add('instkffff-user-bio',()=> {
    User.proptotype.bio = Model.attribute('bio')
    User.proptotype.bioHtml = <p> {bio} </p>

    extend(UserCard.prototype, 'infoItems' ,function(items){
        let user = this.props.user;
        items.add('bio',
            UserBio.component({
                user
            })
        )
    })
})