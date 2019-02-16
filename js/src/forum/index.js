import { extend } from 'flarum/extend'
import 'autolink-js'
import Component from 'flarum/Component'
import computed from 'flarum/utils/computed'
import UserCard from 'flarum/components/UserCard'
import classList from 'flarum/utils/classList'
import Model from 'flarum/Model'
import User from 'flarum/models/User'

export default class UserBio extends Component {
    
    view(){

        const user = this.props.user
        let content
        let subContent

        const esiInfoJson = user.bio()
        let esiInfo = JSON.parse(esiInfoJson)

        let allianceIcon = `https://imageserver.eveonline.com/Alliance/${esiInfo.alliance_id}_32.png` 
        subContent = m.trust(allianceIcon)
        

        content = <div className="UserBio-content">{subContent}</div>

        return (
            <div className="UserBio">
                {content}
            </div>
        )
    }
}


app.initializers.add('instkffff-user-bio',()=> {
    User.prototype.bio = Model.attribute('bio')

    extend(UserCard.prototype, 'infoItems' ,function(items){
        let user = this.props.user;
        items.add('bio',
            UserBio.component({
                user
            })
        )
    })
})