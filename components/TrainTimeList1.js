import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import TrainDetail from '../components/TrainDetail';

export default class App extends Component {
  render() {
    return (
      
		   <View style={styles.container}>
         		<View style={styles.outboundLabel}>
				 	<View style={styles.dateLabel}>
					 	<Text style={styles.month}>MAR</Text>
						<Text style={styles.date}>7</Text>
						<Text style={styles.day}>THU</Text>
					 </View>
					 <View style={styles.travelLoc}>
					 	<Text style={styles.heading}>OUTBOUND</Text>
						<Text style={styles.loc}>New Barnet to Delamere</Text>
						<Text style={styles.adultCount}>1 Adult</Text>
					 </View>
				 </View>
				 <ScrollView>
				<View style={styles.timeLists}>
					<TouchableOpacity style={styles.listRow} onPress={() => this.props.navigation.navigate('TrainDetail')}>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Depart</Text>
							<Text style={styles.labelValue}>07:19</Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Arrives</Text>
							<Text style={styles.labelValue}>11:18</Text>
							<Text style={styles.labelhrs}>3h 59m </Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Changes</Text>
							<Text style={styles.labelValue}>3</Text>
						</View>
						<View style={[styles.labelGrp,styles.borderRightNone]}>
							<Text style={styles.subHead}>Co2</Text>
							<Text style={styles.labelValue}>13.89Kg</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.listRow} onPress={() => this.props.navigation.navigate('TrainDetail')}>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Depart</Text>
							<Text style={styles.labelValue}>07:19</Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Arrives</Text>
							<Text style={styles.labelValue}>11:18</Text>
							<Text style={styles.labelhrs}>3h 59m </Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Changes</Text>
							<Text style={styles.labelValue}>3</Text>
						</View>
						<View style={[styles.labelGrp,styles.borderRightNone]}>
							<Text style={styles.subHead}>Co2</Text>
							<Text style={styles.labelValue}>13.89Kg</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.listRow}>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Depart</Text>
							<Text style={styles.labelValue}>07:19</Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Arrives</Text>
							<Text style={styles.labelValue}>11:18</Text>
							<Text style={styles.labelhrs}>3h 59m </Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Changes</Text>
							<Text style={styles.labelValue}>3</Text>
						</View>
						<View style={[styles.labelGrp,styles.borderRightNone]}>
							<Text style={styles.subHead}>Co2</Text>
							<Text style={styles.labelValue}>13.89Kg</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.listRow}>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Depart</Text>
							<Text style={styles.labelValue}>07:19</Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Arrives</Text>
							<Text style={styles.labelValue}>11:18</Text>
							<Text style={styles.labelhrs}>3h 59m </Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Changes</Text>
							<Text style={styles.labelValue}>3</Text>
						</View>
						<View style={[styles.labelGrp,styles.borderRightNone]}>
							<Text style={styles.subHead}>Co2</Text>
							<Text style={styles.labelValue}>13.89Kg</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.listRow}>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Depart</Text>
							<Text style={styles.labelValue}>07:19</Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Arrives</Text>
							<Text style={styles.labelValue}>11:18</Text>
							<Text style={styles.labelhrs}>3h 59m </Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Changes</Text>
							<Text style={styles.labelValue}>3</Text>
						</View>
						<View style={[styles.labelGrp,styles.borderRightNone]}>
							<Text style={styles.subHead}>Co2</Text>
							<Text style={styles.labelValue}>13.89Kg</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.listRow}>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Depart</Text>
							<Text style={styles.labelValue}>07:19</Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Arrives</Text>
							<Text style={styles.labelValue}>11:18</Text>
							<Text style={styles.labelhrs}>3h 59m </Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Changes</Text>
							<Text style={styles.labelValue}>3</Text>
						</View>
						<View style={[styles.labelGrp,styles.borderRightNone]}>
							<Text style={styles.subHead}>Co2</Text>
							<Text style={styles.labelValue}>13.89Kg</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.listRow}>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Depart</Text>
							<Text style={styles.labelValue}>07:19</Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Arrives</Text>
							<Text style={styles.labelValue}>11:18</Text>
							<Text style={styles.labelhrs}>3h 59m </Text>
						</View>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Changes</Text>
							<Text style={styles.labelValue}>3</Text>
						</View>
						<View style={[styles.labelGrp,styles.borderRightNone]}>
							<Text style={styles.subHead}>Co2</Text>
							<Text style={styles.labelValue}>13.89Kg</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
      		</View>
	 
    );
  }
}


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'flex-start',
	  backgroundColor: '#0a092f',	
	  padding:10,
	},
	row:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent: 'center',
		marginVertical: 20,
		width:'100%',
	},
	
	white:{
		color:'#fff',
	},
	goldColor:{
		color:'#d9a352',
		textAlign:'center',
	},

	outboundLabel:{
		flexDirection:'row',
		marginBottom:20,
		
	},
	dateLabel:{
		width:80,
		flexDirection:'column',
		justifyContent:'space-between',
		borderWidth:1,
		borderColor:'#d9a352',
		borderRadius:5,
		marginRight:15,
	},
	travelLoc:{
	
		flexDirection:'column',
	},
	heading:{
		color:'#d9a352',
		textAlign:'left',
		fontSize:22,
		paddingBottom:7,	

	},
	loc:{
		color:'#fff',
		textAlign:'left',
		fontSize:16,
	},
	adultCount:{
		color:'#fff',
		textAlign:'left',
		fontSize:14,
	},
	month:{
		fontSize:14,
		color:'#fff',
		backgroundColor:'#d9a352',
		textAlign:'center',
		paddingHorizontal:5,
		paddingVertical:5,
	},
	date:{
		fontSize:18,
		textAlign:'center',
		paddingHorizontal:5,
		paddingVertical:2,
		backgroundColor:'#fff',
		color:'#d9a352',
	},
	day:{
		fontSize:14,
		textAlign:'center',
		paddingHorizontal:5,
		paddingBottom:5,
		backgroundColor:'#fff',
		color:'#d9a352',
	},
	listRow:{
		flexDirection:'row',
		width:'100%',
		borderWidth:2,
		borderColor:'#d9a352',
		borderRadius:5,
		paddingVertical:5,
		marginVertical:4,
		backgroundColor:'#fff',
	},
	labelGrp:{
		flexDirection:'column',
		width:'25%',
		paddingVertical:3,
		textAlign:'left',
		borderRightWidth:1,
		borderRightColor:'#d9a352',
		textAlign:'center',
		paddingHorizontal:5,
	},
	subHead:{
		color:'#000',
		textAlign:'center',	
	},
	labelValue:{
		fontSize:16,
		color:'#000',
		paddingTop:2,
		textAlign:'center',
	},
	labelhrs:{
		color:'#000',
		fontSize:11,
		paddingTop:2,
		textAlign:'center',
	},
	borderRightNone:{
		borderRightWidth:0,
	},

});
