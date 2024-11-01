import {View, Text, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';

const Modals = () => {
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Open Modal"
        onPress={() => {
          setOpenModal(true);
        }}
      />

      {/* custom modal */}
      {/* <Modal onRequestClose={()=> setOpenModal(false)} visible={OpenModal} transparent style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => setOpenModal(false)}
          activeOpacity={1}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.2)',
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              width: '90%',
              height: 200,
              backgroundColor: 'white',
            }}>
                <Text style={{textAlign:"center", fontSize:20, marginTop:35}}>Do You want to Log Out ? </Text>
               <View style={{width:"40%",height:"100%", alignSelf:"center", marginTop:40}}>
               <Button  title='Log Out'/>
               </View>
            </View>
        </TouchableOpacity>
      </Modal> */}

      {/* react native modal */}
      <Modal
        style={{justifyContent: 'center', alignItems: 'center'}}
        isVisible={OpenModal}
        onBackdropPress={() => setOpenModal(false)}
        backdropOpacity={0.2}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationInTiming={1000}
        animationOutTiming={1000}
        >

        <View
          style={{
            width: '90%',
            height: 200,
            backgroundColor: 'white',
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, marginTop: 35}}>
            Do You want to Log Out ?{' '}
          </Text>
          <View
            style={{
              width: '40%',
              height: '100%',
              alignSelf: 'center',
              marginTop: 40,
            }}>
            <Button title="Log Out" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;

// Modal
// 1) onRequestClose || can  close the modal by back button in mobile phone



// react  native modal properties
// 1) isVisible || show modal
// 2) onBackdropPress || when press screen then close
// 3) backdropOpacity || background overlay modal
// 4) animationIn   || many properties to align modal direction from where to In
// 5) animationOut   || many properties to align modal direction from where to Out
// 6) animationInTiming || control modal speed of In
// 7) animationOutTiming || control modal speed of Out