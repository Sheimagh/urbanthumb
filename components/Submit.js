import React from 'react';
import { Button, Icon } from 'react-native-elements';
import TextSearch from './TextSearch';

export default class Submit extends React.Component {
    render () {
        return (
            <Button
            icon= {
                <Icon
                name="search"
                size={30}
                color="white"
                />
            }
            
            // onPress={TextSearch.search}
            // value={TextSearch.search}
            />
        );
    }
}


