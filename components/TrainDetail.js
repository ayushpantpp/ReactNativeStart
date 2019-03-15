import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, Picker, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
var radio_props = [
	{ label: 'Single', value: 0 },
	{ label: 'Return', value: 1 }
];

export default class TrainDetail extends Component {
	constructor(props) {
		super(props);

		this.inputRefs = {};

		this.state = {
			favColor: undefined,
			passenger: 1,
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
		for (i = 1; i <= 10; i++) {
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
					</View>
				</View>
				<View>
					<Collapse>
						<CollapseHeader>
							<Separator bordered>
								<Text>Return Fares</Text>
							</Separator>
						</CollapseHeader>
						<CollapseBody>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>Standard Off Peak</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Off-Peak Return</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>Standard Anytime</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Anytime Return</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>First Anytime</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Anytime Return (1st Class)</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
						</CollapseBody>
					</Collapse>
					<Collapse>
						<CollapseHeader>
							<Separator bordered>
								<Text>Dual Single Fares</Text>
							</Separator>
						</CollapseHeader>
						<CollapseBody>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>Standard Anytime</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Off-Peak Return</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>First Advance</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>First Anytime</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>First Anytime</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Anytime Return (1st Class)</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
						</CollapseBody>
					</Collapse>
				</View>



				<View style={styles.container}>
					<View style={styles.container}>
						<View style={styles.outboundLabel}>
							<View style={styles.dateLabel}>
								<Text style={styles.month}>MAR</Text>
								<Text style={styles.date}>9</Text>
								<Text style={styles.day}>SAT</Text>
							</View>
							<View style={styles.travelLoc}>
								<Text style={styles.heading}>INBOUND</Text>
								<Text style={styles.loc}>New Barnet to Delamere</Text>
								<Text style={styles.adultCount}>1 Adult</Text>
							</View>
						</View>
					</View>
				</View>
				<View>
					<Collapse>
						<CollapseHeader>
							<Separator bordered>
								<Text>Return Fares</Text>
							</Separator>
						</CollapseHeader>
						<CollapseBody>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>Standard Off Peak</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Off-Peak Return</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>Standard Anytime</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Anytime Return</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>First Anytime</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Anytime Return (1st Class)</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
						</CollapseBody>
					</Collapse>
					<Collapse>
						<CollapseHeader>
							<Separator bordered>
								<Text>Dual Single Fares</Text>
							</Separator>
						</CollapseHeader>
						<CollapseBody>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>Standard Anytime</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Off-Peak Return</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>First Advance</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>First Anytime</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
							<ListItem >
								<Collapse>
									<CollapseHeader>
											<Text>First Anytime</Text>
									</CollapseHeader>
									<CollapseBody>
										<ListItem >
											<Text>Anytime Return (1st Class)</Text>
										</ListItem>
									</CollapseBody>
								</Collapse>
							</ListItem>
						</CollapseBody>
					</Collapse>
				</View>
				<TouchableOpacity style={styles.listRow}>
						<View style={styles.labelGrp}>
							<Text style={styles.subHead}>Total Fare</Text>
							<Text style={styles.labelValue}>$719</Text>
						</View>
						<View style={styles.labelGrpProceed}>
							<Text style={{fontSize:14,fontWeight:'500',color:'#ffffff', textAlign:'center'}}>Proceed</Text>
						</View>
					</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		backgroundColor: '#0a092f',
		padding: 10,
		justifyContent: 'center',
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		width: '100%',
	},
	partitionContainer: {
		marginVertical: 20,
	},
	passengerContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',

	},
	passengerList: {
		marginLeft: 15,
		position: 'relative',
		borderBottomColor: '#d9a352',
		borderBottomWidth: 1,
		width: 100,
	},
	passengerText: {
		textAlign: 'left',
		fontSize: 16,
	},
	user: {
		color: '#fff',
		position: 'absolute',
		right: 0,
	},
	white: {
		color: '#fff',
	},
	goldColor: {
		color: '#d9a352',
		textAlign: 'center',
		fontSize: 16,
	},
	radioStyle: {
		color: '#fff',
	},
	outbound: {
		width: '100%',
	},
	source: {
		borderBottomWidth: 1,
		borderBottomColor: '#d9a352',
		flexDirection: 'row',
		paddingVertical: 5,
		alignItems: 'center',
		marginVertical: 10,
		position: 'relative',
	},
	trainIcon: {
		position: 'absolute',
		right: 0,
		bottom: 10,
	},
	labelBox: {

		backgroundColor: '#d9a352',
		color: '#fff',
		fontSize: 16,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 4,
		width: '17%',
		textAlign: 'center',
	},
	inputField: {
		borderWidth: 0,
		color: '#fff',
		fontSize: 16,
		borderBottomColor: '#d9a352',
		paddingVertical: 10,
		paddingHorizontal: 15,
		width: '83%',

	},
	dDate: {
		borderBottomWidth: 1,
		borderBottomColor: '#d9a352',
		flexDirection: 'row',
		paddingVertical: 5,
		alignItems: 'center',
		position: 'relative',
	},
	calender: {
		position: 'absolute',
		right: 0,
		bottom: 5,
	},
	paddingHorizontalNone: {
		paddingHorizontal: 0,
		width: '100%',
	},
	timings: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	selectBox: {
		borderBottomWidth: 1,
		borderBottomColor: '#d9a352',
		color: '#fff',
		fontSize: 16,
		paddingVertical: 10,
		width: '30%'
	},

	dateTime: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 20,
		width: '100%',
	},
	fromDateGrp: {
		flexDirection: 'column',
		borderWidth: 1,
		borderColor: '#d9a352',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		width: '46%',
	},
	datePart: {
		position: 'relative',
		paddingVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#d9a352',
		width: '100%',
	},
	fixedIcon: {
		position: 'absolute',
		bottom: 10,
		right: 0,
	},
	selBeforeAfter: {
		paddingVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#d9a352',
	},
	timePick: {
		paddingVertical: 5,
	},
	button: {
		backgroundColor: '#d9a352',
		textAlign: 'center',
		paddingHorizontal: 15,
		paddingVertical: 13,
		borderRadius: 25,
		width: 300,

	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		width: '100%',
	},

	white: {
		color: '#fff',
	},
	goldColor: {
		color: '#d9a352',
		textAlign: 'center',
	},

	outboundLabel: {
		flexDirection: 'row',
		marginBottom: 20,

	},
	dateLabel: {
		width: 80,
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: '#d9a352',
		borderRadius: 5,
		marginRight: 15,
	},
	travelLoc: {

		flexDirection: 'column',
	},
	heading: {
		color: '#d9a352',
		textAlign: 'left',
		fontSize: 22,
		paddingBottom: 7,

	},
	loc: {
		color: '#fff',
		textAlign: 'left',
		fontSize: 16,
	},
	adultCount: {
		color: '#fff',
		textAlign: 'left',
		fontSize: 14,
	},
	month: {
		fontSize: 14,
		color: '#fff',
		backgroundColor: '#d9a352',
		textAlign: 'center',
		paddingHorizontal: 5,
		paddingVertical: 5,
	},
	date: {
		fontSize: 18,
		textAlign: 'center',
		paddingHorizontal: 5,
		paddingVertical: 2,
		backgroundColor: '#fff',
		color: '#d9a352',
	},
	day: {
		fontSize: 14,
		textAlign: 'center',
		paddingHorizontal: 5,
		paddingBottom: 5,
		backgroundColor: '#fff',
		color: '#d9a352',
	},
	listRow: {
		flexDirection: 'row',
		width: '100%',
		borderWidth: 2,
		borderColor: '#d9a352',
		borderRadius: 5,
		paddingVertical: 5,
		marginVertical: 4,
		backgroundColor: '#fff',
	},
	labelGrp: {
		flexDirection: 'column',
		width: '50%',
		paddingVertical: 3,
		textAlign: 'left',
		borderRightWidth: 1,
		borderRightColor: '#d9a352',
		textAlign: 'center',
		paddingHorizontal: 5,
	},
	labelGrpProceed: {
		flexDirection: 'column',
		width: '50%',
		paddingVertical: 3,
		backgroundColor: '#0a092f',
		textAlign: 'left',
		borderRightWidth: 1,
		borderRightColor: '#d9a352',
		textAlign: 'center',
		paddingHorizontal: 5,
		color:'#fff'
	},
	subHead: {
		color: '#000',
		textAlign: 'center',
	},
	subHead2: {
		color: '#fff',
		textAlign: 'center',
	},
	labelValue: {
		fontSize: 16,
		color: '#000',
		paddingTop: 2,
		textAlign: 'center',
	},
	labelhrs: {
		color: '#000',
		fontSize: 11,
		paddingTop: 2,
		textAlign: 'center',
	},
	borderRightNone: {
		borderRightWidth: 0,
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
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderBottomColor: '#cccccc',
		borderRadius: 2,
		color: '#ffffff',

	},
});