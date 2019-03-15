import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, Picker, View,ScrollView,TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
var radio_props = [
	{label: 'Single', value: 0 },
	{label: 'Return', value: 1 }
  ];

export default class TrainSearch extends Component {
	constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
			favColor: undefined,
			passenger : 1,
            items: [
                {
                    label: 'Leave After',
                    value: 'leave_after',
                },
                {
                    label: 'Arrive Before',
                    value: 'arrive_before',
                },
            ]
           
        };
	}
	
	componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                favColor: 'Leave After',
            });
        }, 1000);
	}
	
	passengerItems = () => {
		let arr = [];
		for(i=1;i<=10;i++) {
		  let obj = {};
		  obj['label'] = String(i);
		  obj['value'] = String(i);
		  arr.push(obj);
		}
		return arr
	  }

  render() {
	let passengerItems = this.passengerItems();
    return (
		<ScrollView>
		<View style={styles.container}>
			<View style={styles.radioGroup}>
				<RadioForm
					radio_props={radio_props}
					initial={0}
					borderWidth={1}
					
					buttonColor={'#d9a352'}					
					buttonSize={10}
					buttonOuterSize={25}
					buttonStyle={{}}
					buttonWrapStyle={{}}
		
					formHorizontal={true}
					labelStyle={{fontSize: 16, color: '#d9a352', marginRight:15,}}
					labelWrapStyle={{}}
					style={styles.radioStyle}
					labelHorizontal={true}
					labelColor={'#fff'}
					onPress={(value) => {this.setState({value:value})}}
				/>
			</View>
			
				<View style={styles.source}>
					<Text style={styles.labelBox}>SRC</Text>
					<TextInput style={styles.inputField}
					 placeholder='From' placeholderTextColor='#fff'			
					/>
					<Icon style={styles.trainIcon} name="train" size={30} color="#fff" />
				</View>
				<View style={styles.source}>
					<Text style={styles.labelBox}>DES</Text>
					<TextInput style={styles.inputField}
					 placeholder='To' placeholderTextColor='#fff'			
					/>
					<Icon style={styles.trainIcon} name="train" size={30} color="#fff" />
				</View>
			

				 <View style={[styles.partitionContainer,styles.alignRow]}>
					<View style={styles.passengerContainer}>
						<Text style={[styles.passengerText,styles.goldColor]}>No. of Adult </Text>
						<View style={styles.passengerList}>
							<RNPickerSelect
							value={this.state.passenger}
							hideIcon={true}
							items={passengerItems}
							onValueChange={val => this.setState({passenger:val})}
							style={{...pickerSelectStyles}}
							useNativeAndroidPickerStyle={false}
							placeholder={{
								label: 'Select',
								value: 1,
							}}
							/>
							<Icon style={styles.user} name="user" size={30} color="#fff" />
						</View>                 
					</View>
				</View>
				<View style={styles.dateTime}>
					<View style={styles.fromDateGrp}>
						<View style={styles.datePart}>
							<Text style={[styles.goldColor]}>Depart From</Text>                                  
							<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
								<DatePicker
									style={styles.datepicker}
									date={this.state.PickupDate}
									mode="date"
									placeholder="Select Date"
									format="ddd, MMM D YYYY"
									confirmBtnText="Confirm"
									cancelBtnText="Cancel"
									showIcon={false}
									customStyles={{
									dateIcon: {
										
									},
									dateInput: {
										borderWidth:0,
										margin:5,
									},
										dateText: {
										color: "#FFFFFF",
										fontSize:12,
										textAlign:'center',
										}
									}}
									onDateChange={(date) => {this.setState({PickupDate: date})}}
								/> 
								<Icon
									name='calendar'
									size={16}
									type='font-awesome'
									color='#FFFFFF'
									containerStyle={[styles.iconCalender, styles.fixedIcon]}
									/>
							</View>
						</View>
						
						<View style={styles.selBeforeAfter}>
						<RNPickerSelect
								placeholder={{
									label: 'Select...',
									value: null,
								}}
								items={this.state.items}
								onValueChange={(value) => {
									this.setState({
										favColor: value,
									});
								}}
								onUpArrow={() => {
									this.inputRefs.name.focus();
								}}
								onDownArrow={() => {
									this.inputRefs.picker2.togglePicker();
								}}
								style={{ ...pickerSelectStyles }}
								value={this.state.favColor}
								ref={(el) => {
									this.inputRefs.picker = el;
								}}
                		/>
						</View>								
						<View style={styles.timePick}>
								<Text style={styles.goldColor}>Time</Text> 
								<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>                                 
								  <DatePicker
									  style={styles.datepicker}
									  date={this.state.DropoffTime}
									  mode="time"
									  placeholder="Select Time"
									  confirmBtnText="Confirm"
									  cancelBtnText="Cancel"
									  showIcon={false}
									  customStyles={{
										dateIcon: {
										 
										},
										dateInput: {
											borderWidth:0,
											margin:5,
										},
										  dateText: {
											color: "#FFFFFF",
											fontSize:12,
											textAlign:'center',
										  }
									  }}
									  onDateChange={(date) => this.handleTimePicked(date , 'drop')}
									/> 
									<Icon
									  name='clock-o'
									  size={16}
									  type='font-awesome'
									  color='#FFFFFF'
									   containerStyle={[styles.iconTime, styles.fixedIcon]}
									  />
								</View>
						</View>              
					</View>

					<View style={styles.fromDateGrp}>
						<View style={styles.datePart}>
							<Text style={[styles.goldColor]}>Going To</Text>                                  
							<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
								<DatePicker
									style={styles.datepicker}
									date={this.state.PickupDate}
									mode="date"
									placeholder="Select Date"
									format="ddd, MMM D YYYY"
									confirmBtnText="Confirm"
									cancelBtnText="Cancel"
									showIcon={false}
									customStyles={{
									dateIcon: {
										
									},
									dateInput: {
										borderWidth:0,
										margin:5,
									},
										dateText: {
										color: "#FFFFFF",
										fontSize:12,
										textAlign:'center',
										}
									}}
									onDateChange={(date) => {this.setState({PickupDate: date})}}
								/> 
								<Icon
									name='calendar'
									size={16}
									type='font-awesome'
									color='#FFFFFF'
									containerStyle={[styles.iconCalender, styles.fixedIcon]}
									/>
							</View>
						</View>
						
						<View style={styles.selBeforeAfter}>
						<RNPickerSelect
								placeholder={{
									label: 'Select...',
									value: null,
								}}
								items={this.state.items}
								onValueChange={(value) => {
									this.setState({
										favColor: value,
									});
								}}
								onUpArrow={() => {
									this.inputRefs.name.focus();
								}}
								onDownArrow={() => {
									this.inputRefs.picker2.togglePicker();
								}}
								style={{ ...pickerSelectStyles }}
								value={this.state.favColor}
								ref={(el) => {
									this.inputRefs.picker = el;
								}}
                		/>
						</View>								
						<View style={styles.timePick}>
								<Text style={styles.goldColor}>Time</Text> 
								<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>                                 
								  <DatePicker
									  style={styles.datepicker}
									  date={this.state.DropoffTime}
									  mode="time"
									  placeholder="Select Time"
									  confirmBtnText="Confirm"
									  cancelBtnText="Cancel"
									  showIcon={false}
									  customStyles={{
										dateIcon: {
										 
										},
										dateInput: {
											borderWidth:0,
											margin:5,
										},
										  dateText: {
											color: "#FFFFFF",
											fontSize:12,
											textAlign:'center',
										  }
									  }}
									  onDateChange={(date) => this.handleTimePicked(date , 'drop')}
									/> 
									<Icon
									  name='clock-o'
									  size={16}
									  type='font-awesome'
									  color='#FFFFFF'
									   containerStyle={[styles.iconTime, styles.fixedIcon]}
									  />
								</View>
						</View>              
					</View>

				</View>
				<View style={styles.row}>
					<TouchableOpacity style={styles.button}>
						<Text style={{fontSize:14,fontWeight:'500',color:'#ffffff', textAlign:'center'}}>Search Now</Text>
					</TouchableOpacity>
				</View>
				
			
		</View>
		</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#0a092f',	
	padding:10,
	justifyContent:'center',
  },

  row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
	marginVertical: 20,
	width:'100%',
  },
  partitionContainer:{
	  marginVertical:20,
  },
  passengerContainer:{
		alignItems:'center',
		flexDirection:'row',
		width:'100%',

  },
  passengerList:{
	  marginLeft:15,
	  position:'relative',
	  borderBottomColor:'#d9a352',
	  borderBottomWidth:1,
	  width:100,
  },
  passengerText:{
	  textAlign:'left',
	  fontSize:16,
  },
  user:{
	  color:'#fff',
	  position:'absolute',
	  right:0,
  },
  white:{
	color:'#fff',
  },
  goldColor:{
	color:'#d9a352',
	textAlign:'center',
	fontSize:16,
  },
  radioStyle:{
	color:'#fff',
  },
  outbound:{	 
	  width:'100%',
  },
  source:{
	  borderBottomWidth:1,
	  borderBottomColor:'#d9a352',
	  flexDirection:'row',	 
	  paddingVertical:5,
	  alignItems:'center',
	  marginVertical:10,
	  position:'relative',
  },
  trainIcon:{
	position:'absolute',
	right:0,
	bottom:10,
  },
  labelBox:{
	  
	  backgroundColor:'#d9a352',
	  color:'#fff',
	  fontSize:16,	   
	  paddingHorizontal:15,
	  paddingVertical:10,
	  borderRadius:4,
	  width:'17%',
	  textAlign:'center',	
  },
  inputField:{
	  borderWidth: 0,	 
	  color:'#fff',
	  fontSize:16,
	  borderBottomColor:'#d9a352',
	  paddingVertical:10,
	  paddingHorizontal:15,
	  width:'83%',
	 
	},
	dDate:{
		borderBottomWidth:1,
		borderBottomColor:'#d9a352',
		flexDirection:'row',	 
		paddingVertical:5,
		alignItems:'center',
		position:'relative',
	},
	calender:{
		position:'absolute', 
		right:0,
		bottom:5,
	},
	paddingHorizontalNone:{
		paddingHorizontal:0,
		width:'100%',
	},
	timings:{
		flexDirection:'row',
		justifyContent:'space-between',
	},
	selectBox:{
		borderBottomWidth:1,
		borderBottomColor:'#d9a352',
		color:'#fff',
		fontSize:16,
		paddingVertical:10,
		width:'30%'
	},

	dateTime:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',	
		marginVertical:20,
		width:'100%',
	},
	fromDateGrp:{
		flexDirection:'column',
		borderWidth:1,
		borderColor:'#d9a352',
		paddingVertical:5,
		paddingHorizontal:10,
		borderRadius:5,	
		width:'46%',
	},
	datePart:{
		position:'relative',
		paddingVertical:5,
		borderBottomWidth:1,
		borderBottomColor:'#d9a352',
		width:'100%',
	},
	fixedIcon:{
		position:'absolute',
		bottom:10,
		right:0,
	},
	selBeforeAfter:{
		paddingVertical:5,
		borderBottomWidth:1,
		borderBottomColor:'#d9a352',
	},
	timePick:{
		paddingVertical:5,
	},
	button:{
		backgroundColor:'#d9a352',
		textAlign:'center',
		paddingHorizontal:15,
		paddingVertical:13,
		borderRadius:25,
		width:300,

	},
});


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
	
    inputAndroid: {
        paddingVertical:10,
        paddingHorizontal:10,
        borderBottomColor: '#cccccc',
        borderRadius: 2,
        color: '#ffffff',
        
    },
});