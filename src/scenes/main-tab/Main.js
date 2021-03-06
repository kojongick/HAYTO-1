import React, {Component} from "react";
import {View,Text,Dimensions} from "react-native";

import {Actions} from "react-native-router-flux";
import ScrollableTabView from "react-native-scrollable-tab-view";
import ImageTabBar from "../../components/ImageTabBar";
import MainTab from "./MainTab";
import EmotionTab from "./EmotionTab";
import styles from "../../commons/mainStyle";
const {width,height} = Dimensions.get('window')

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount(){
    }

    render(){
        return(
            <View style={{flexDirection: "column", flex:1,}}>
                <ScrollableTabView
                    //style={{flexDirection: "column"}}
                    locked={false}
                    tabBarPosition="bottom"
                    renderTabBar={() =><View/>}
                    tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                    tabBarActiveTextColor={global.mainColor}
                    tabBarInactiveTextColor='#bdbdbd'
                    initialPage={0}>

                    <MainTab tabLabel="메인"/>
                    <EmotionTab tabLabel="기록"/>
                </ScrollableTabView>
            </View>
        )
    }

    componentDidMount(){
        //Actions.refresh({title:this.getCurrentLabel(this.tabView)})
    }

}

export default Main;
