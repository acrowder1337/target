import {connect} from 'react-redux';
import {GlobalState} from 'mattermost-redux/types/store';
import {Post} from 'mattermost-redux/types/posts';

import {getCurrentChannelId} from 'mattermost-redux/selectors/entities/channels';

import {Client4} from 'mattermost-redux/client';

import {voiceConnectedChannels, voiceConnectedProfilesInChannel, connectedChannelID} from '../../selectors';

import PostType from './component';

interface OwnProps {
    post: Post,
}

const mapStateToProps = (state: GlobalState, ownProps: OwnProps) => {
    let hasCall = false;
    const currentID = getCurrentChannelId(state);
    const connectedID = connectedChannelID(state) || '';
    const channels = voiceConnectedChannels(state);

    let profiles = [];
    const pictures = [];
    if (channels) {
        const users = channels[currentID];
        if (users && users.length > 0) {
            hasCall = true;
            profiles = voiceConnectedProfilesInChannel(state, currentID);
            for (let i = 0; i < profiles.length; i++) {
                pictures.push(Client4.getProfilePictureUrl(profiles[i].id, profiles[i].last_picture_update));
            }
        }
    }
    return {
        ...ownProps,
        currChannelID: currentID,
        connectedID,
        hasCall,
        pictures,
        profiles,
    };
};

export default connect(mapStateToProps)(PostType);
