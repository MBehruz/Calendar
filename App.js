import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Modal} from 'react-native';
import Calendar from 'react-native-calendars/src/calendar';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={{
          backgroundColor: 'black',
          borderRadius: 10,
          margin: 40,
          padding: 10,
          width: 200,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 22}}>Show calendar</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar
          onDayPress={date => {
            console.log(date);
            setShowModal(false);
          }}
          style={{borderRadius: 10, elevation: 4, margin: 40}}

          // onMonthChange={() => {}}
          // initialDate="2022-09-10"
          // minDate="2022-01-01"
          // maxDate="2022-12-31"
          // hideExtraDays={true}

          // hideDayNames={true}
          // hideArrows={true}
          // disableArrowLeft={true}
          // disableArrowRight={true}

          // markedDates={{
          //   '2022-09-10': {
          //     marked: true,
          //     dotColor: 'red',
          //     selected: 'true',
          //     selectedColor: 'purple',
          //     selectedTextColor: 'white',
          //   },
          // }}

          // multi-dot
          // markingType={'multi-dot'}
          // markedDates={{
          //   '2022-09-15': {dots: [{color: 'red'}, {color: 'green'}]},
          //   selected: true,
          //   selectedColor: 'lightblue',
          //   selectedTextColor: 'balck',
          //   '2022-09-22': {dots: [{color: 'orange '}]},
          // }}

          // Periods
          // markingType={'period'}
          // markedDates={{
          //   '2022-09-11': {
          //     startingDay: true,
          //     color: 'lightgreen',
          //     dotColor: 'transparent',
          //   },
          //   '2022-09-12': {
          //     marked: true,
          //     color: 'lightgreen',
          //     dotColor: 'transparent',
          //   },
          //   '2022-09-13': {
          //     marked: true,
          //     color: 'lightgreen',
          //     dotColor: 'transparent',
          //   },
          //   '2022-09-14': {
          //     marked: true,
          //     color: 'lightgreen',
          //     dotColor: 'transparent',
          //   },
          //   '2022-09-15': {
          //     endingDay: true,
          //     color: 'lightgreen',
          //     dotColor: 'transparent',
          //   },
          //   '2022-09-25': {
          //     startingDay: 'true',
          //     endingDay: true,
          //     color: 'orange',
          //   },
          // }}
        />
      </Modal>
    </View>
  );
};

export default App;
