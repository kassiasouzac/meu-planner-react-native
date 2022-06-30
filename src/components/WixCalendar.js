import React from 'react'
import moment from 'moment' 
import { View } from 'react-native' 
import { Calendar } from 'react-native-calendars' 


const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(15, 'days').format(_format)

class WixCalendar extends React.Component {
  // It is not possible to select some to current day.
  initialState = {
      [_today]: {disabled: true}
  }
  
  constructor() {
    super();

    this.state = {
      _markedDates: this.initialState
    }
  }
  
  onDaySelect = (day) => {
      const _selectedDay = moment(day.dateString).format(_format);
      
      let selected = true;
      if (this.state._markedDates[_selectedDay]) {
        // Already in marked dates, so reverse current marked state
        selected = !this.state._markedDates[_selectedDay].selected;
      }
      
      // Create a new object using object property spread since it should be immutable
      // Reading: https://davidwalsh.name/merge-objects
      const updatedMarkedDates = {...this.state._markedDates, ...{ [_selectedDay]: { selected } } }
      
      // Triggers component to render again, picking up the new state
      this.setState({ _markedDates: updatedMarkedDates });
      console.log(this.state._markedDates);
  }
  
  render() {
    return (
      <View>
        <Calendar
            onDayPress={this.onDaySelect}
            markedDates={this.state._markedDates}
        />
      </View>
    );
  }
}

export default WixCalendar
