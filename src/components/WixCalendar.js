import React, {useState} from 'react'
import moment from 'moment' 
import { View } from 'react-native' 
import { Calendar, LocaleConfig } from 'react-native-calendars' 


const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';

export default ({initialState, receiveData, minDate}) => {
 
  //console.log(minDate)
  const [ _markedDates, setMarkedDates] = useState(initialState);
  const [days, setDays] = useState([]);
  
  onDaySelect = (day) => {
      const _selectedDay = moment(day.dateString).format(_format);
      
      let selected = true;
      if (_markedDates[_selectedDay]) {
     
        selected = false;
      }
     
      let index = days.findIndex(i=> i === day.dateString);
      let updateDays = [...days]
      if(index === -1){
            updateDays.push(day.dateString);
        }else{
          updateDays.splice(index, 1);
            
        }
        setDays(updateDays)
    
      const updatedMarkedDates = {..._markedDates, ...{ [_selectedDay]: { selected } } }
  
      setMarkedDates(updatedMarkedDates);
      receiveData(updateDays);

  }
  
    return (
      <View>
        <Calendar
            onDayPress={onDaySelect}
            markedDates={_markedDates}
            minDate={minDate}
            maxDate={_today}
            theme={{
              selectedDayBackgroundColor: '#FF985F',
            }}
        />
      </View>
    );
  }



