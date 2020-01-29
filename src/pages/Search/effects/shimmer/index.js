import React from 'react';
import {View} from 'react-native';
import * as style from './style';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const DownloadShimmer = (props) => {
    let rows = []
    for(let indice = 0; indice < props.numRows; indice++){
        rows.push(
        <View key={indice} style={style.containerShimmer}>
            <ShimmerPlaceHolder style={style.imageShimmer} width={500} height={200} autoRun={true} />
            <ShimmerPlaceHolder style={style.titleShimmer} width={370} height={15} autoRun={true}/>
            <ShimmerPlaceHolder style={style.descricaoShimmer} width={340} height={8} autoRun={true}/>
            <ShimmerPlaceHolder style={style.descricaoShimmer} width={340} height={8} autoRun={true}/>
            <ShimmerPlaceHolder style={style.descricaoShimmer} width={340} height={8} autoRun={true}/>
         </View>
         )
    }
    return (<>{rows}</>)
}


export default DownloadShimmer;