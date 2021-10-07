import React, {CSSProperties} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Channel} from 'mattermost-redux/types/channels';
import {UserProfile} from 'mattermost-redux/types/users';
import {Post} from 'mattermost-redux/types/posts';

import moment from 'moment-timezone';

import ActiveCallIcon from '../../components/icons/active_call_icon';
import CallIcon from '../../components/icons/call_icon';
import ConnectedProfiles from '../../components/connected_profiles';

import {newClient} from '../../connection';

interface Props {
    post: Post,
    currChannelID: string,
    connectedID: string,
    hasCall: boolean,
    pictures: string[],
    profiles: UserProfile[],
}

export default class PostType extends React.PureComponent<Props> {
    onJoinCallClick = async () => {
        if (this.props.connectedID) {
            return;
        }

        try {
            window.callsClient = await newClient(this.props.currChannelID);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div style={style.main}>
                <div style={style.callIcon}>
                    <ActiveCallIcon
                        fill='#FFFFFF'
                        style={{width: '100%', height: '100%'}}
                    />
                </div>
                <div style={style.messageWrapper as CSSProperties}>
                    <span style={style.message}>{this.props.post.message}</span>
                    <span style={style.duration}>{moment(this.props.post.props.start_at).fromNow()}</span>
                </div>
                <div style={style.profiles}>
                    <ConnectedProfiles
                        profiles={this.props.profiles}
                        pictures={this.props.pictures}
                        size='md'
                        maxShowedProfiles={2}
                    />
                </div>
                <button
                    className='cursor--pointer style--none'
                    style={style.joinButton}
                    onClick={this.onJoinCallClick}
                >
                    <CallIcon fill='#FFFFFF'/>
                    <span style={{fontWeight: 600, margin: '0 8px'}}>{'Join Call'}</span>
                </button>
            </div>
        );
    }
}

const style = {
    main: {
        display: 'flex',
        alignItems: 'center',
        width: 'min(600px, 100%)',
        padding: '16px',
        background: '#FFFFFF',
        border: '1px solid rgba(61, 60, 64, 0.16)',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
        margin: '4px 0',
    },
    callIcon: {
        background: '#339970',
        borderRadius: '4px',
        padding: '10px',
        width: '40px',
        height: '40px',
    },
    messageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 8px',
    },
    message: {
        fontWeight: 600,
    },
    duration: {
        color: 'rgba(0,0,0,0.5)',
    },
    joinButton: {
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        background: '#339970',
        borderRadius: '4px',
        padding: '10px 16px',
        marginLeft: 'auto',
    },
    profiles: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
    },
};
