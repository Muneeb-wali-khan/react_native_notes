import {View, Text, Button, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
// ===>  useRef
// avoid unncessary renders
// will not rerender the component
// can directly call the dom methods

// useCallback

const HooksPart2 = () => {
  // example useRef()
  const ref = useRef(0);

  // want to access the dom methods using useRef()
  const inputRef = useRef();

  // want to increase the value of ref
  const [Count, setCount] = useState(0);
  useEffect(() => {
    ref.current = ref.current + 1;
  }, [Count]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      {/* want to use dom methods directly using useRef() */}
      <TextInput ref={inputRef} style={{width:"80%", height:50,borderWidth:1,alignSelf:"center"}} />

      <Text style={{fontSize: 40, fontWeight: 600}}>
        {`ref value: ` + ref.current + ' Count: ' + Count}
      </Text>

      <View style={{marginTop: 20}}>
        {/* will not rerender the component and the ref value will not increase */}
        {/* <Button onPress={()=> ref.current = ref.current + 1} title='Increase value'/> */}

        {/* will render the component and the ref value will increase with click */}
        <Button
          onPress={() => {
            setCount(Count + 1);
            inputRef.current.focus() /* when click on this button this will focus the input to add text to it*/
          }}
          title="Increase value"
        />
      </View>
    </View>
  );
};

export default HooksPart2;
