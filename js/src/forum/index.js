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

        const esiInfoJson = user.bio()
        let esiInfo = JSON.parse(esiInfoJson)
        let alliance_pic = `https://imageserver.eveonline.com/Alliance/${esiInfo.alliance_id}_32.png`
        let corporation_pic = `https://imageserver.eveonline.com/Corporation/${esiInfo.corporation_id}_32.png`

        


        
        

        return (
            <div>
                <img className="alliance" src={alliance_pic} alt="" /><p className="esiname">{esiInfo.alliance_name}</p><img className="corp" src={corporation_pic} alt="" /><p className="esiname">{esiInfo.corporation_name}</p>
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