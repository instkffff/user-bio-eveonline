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
            <div className="UserBio">
                <p>
                    <img src={alliance_pic} alt="" />{esiInfo.alliance_name}<img src={corporation_pic} alt="" />{esiInfo.corporation_name}
                </p>
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