import {
  View,
  Text,
  Button,
  useWindowDimensions,
  useColorScheme,
  TextInput,
  Switch,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import UseCallBackExe from './UseCallBackExe';

// # ===> PROBLEM is when i clicked any of the increase and deacrease buttons
// the id changed why ? to solve this problem we will use useMemo() and useCallback()

// useMemo()
// so we use useMemo() to prevent randering the id when clicking the buttons
// means this will cache the data in useMemo()

// useCallback()
// useCallback works same as useMemo but the deffrence is we can't call useMemo()
// function and and call only useCallback()

const HooksPart4 = () => {
  const [Count, setCount] = useState(0);
  const [rndNum, setRndNum] = useState(0);

  // const {width, height} = useWindowDimensions(); // get window dimensions
  // const colorSchem = useColorScheme(); // get theme of mobile
  // console.log(colorSchem);

  // =============================================================================
  // [ USE MEMO EXAMPLE ]

  // const id = Math.random() * 30; // instead of this
  // we use useMemo() to generate random values once when component renders
  const id = useMemo(() => {
    // now it will only generate new id when component reload for first time
    // not by clicking the increase and decrease buttons
    return Math.random() * 30;
  }, []);
  // =============================================================================

  // [ USE CALLBACK EXAMPLE ]
  // now using useCallBack and wrap child component UseCallBackExe.js with memo will
  // not call unessary only once when reaload
  const incrementFunc = useCallback(()=>{
     setRndNum(prev => prev + 1)
  },[])

  const decrementFunc = useCallback(()=>{
    setRndNum(prev => prev - 1)
  },[])

  return (
    <>
      <View
        style={{
          // width: width, // above dimensions builtin function
          // height: height, // above height from react native builtin function
          flex: 2 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          // backgroundColor: colorSchem === 'light' ? 'yellow' : 'white',
          backgroundColor: 'yellow',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          use Memo
        </Text>

        <Text style={{fontSize: 40, fontWeight: 'bold'}}>{Count}</Text>

        <View style={{alignSelf: 'center', gap: 20, flexDirection: 'row'}}>
          <Button title="Increment" onPress={() => setCount(Count + 1)} />
          <Button title="Dicrement" onPress={() => setCount(Count - 1)} />
        </View>
      </View>

      <View
        style={{
          flex: 2 / 3,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          backgroundColor: 'red',
        }}>
        <Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            use Memo
          </Text>
        </Text>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>{id}</Text>
      </View>

      <View
        style={{
          flex: 2 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 20,
          backgroundColor: 'blue',
        }}>
          <Text style={{fontSize:30, color:"white"}}>
            {rndNum}
          </Text>
        {/* by using useCallBack() this component will not render untill any changes occured inside it */}
        <UseCallBackExe incrementFunc={incrementFunc} decrementFunc={decrementFunc} />
      </View>
    </>
  );
};

export default HooksPart4;
