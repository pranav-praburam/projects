
import React,{useState, useEffect} from 'react';
import { SafeAreaView,StyleSheet, Text, Button, View } from 'react-native';


function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

const ShowTime = ({startDate,now}) => {
  return (
    <View style={{backgroundColor:'yellow',margin:10,padding:5}}>
        <Text>started at {startDate.toLocaleDateString("en-US")}</Text>
        <Text>seconds: {Math.round((now- startDate)/1000)}</Text>
        <Text>years: {Math.round((now-startDate)/(1000*60*60*24*365))}</Text>
        <Text>months: {monthDiff(startDate, now)}</Text>
    </View>
  )
}

const Counter = ({children}) => {
  const [now,setNow] = useState(new Date())
  const [dates, setDates] = 
          useState(
            {a:new Date("6/1/2024"),
             b:new Date("1/1/2023")});
  const [changes,setChanges] = useState(0);
  const updateChanges = () => {
    console.log(`updating changes ${now} ${changes}`);
    setNow(new Date());
    setChanges(changes+1)

  }
  useEffect(() => {
     setInterval(updateChanges,1000);
  },
   [])


  return (
    <SafeAreaView style={styles.container}>
        <ShowTime startDate={dates.a} now={now} />
        <ShowTime startDate={dates.b} now={now} />

      <Text>This is Tim Hickey's Newer App</Text>
      <Text>dates: {JSON.stringify(dates)}</Text>
      <Text>A-now: {(now-dates.a)/(1000*60*60*24)}</Text>
      <Text>A-seconds: {Math.round((now-dates.a)/1000)}</Text>
      <Text>B-now: {(now-dates.b)/(1000*60*60*24)}</Text>
      <Text>B-months: {monthDiff(dates.b, new Date())}</Text>
      <Text>{changes}</Text>
      <Button title="reset a" 
           onPress={() => {
              console.log('a');
              aDate = new Date()
              setDates({...dates, a:aDate})
           }
           }/>
      <Button title="sub 1" 
           onPress={() => console.log('b')}/>
      {children}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export {Counter};
export default Counter
