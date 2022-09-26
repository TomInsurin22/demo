import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Image,  ScrollView, ImageBackground, TouchableOpacity, Alert,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, TextInput, Chip,   IconButton, Snackbar, HStack, AppBar,  FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import CalendarPicker from 'react-native-calendar-picker';














function HomeScreen({navigation}) {
  return (

    <ScrollView backgroundColor="white">

    <View style={styles.container}>
    

    

    <View style={styles.home}>



       <Image  fadeDuration={1000} source={require("./assets/TOP.png")}/>
         
         
       
       <TextInput style={{width:200}}
      label="email"
      variant="outlined"
      leading={props => <Icon name="account" style={{color:'#de568a'}} {...props} />}
    />

<TextInput style={{width:200}}
      label="password"
      variant="outlined"
      leading={props => (
        <IconButton icon={props => <Icon name="eye" style={{color:'#de568a'}} {...props} />} {...props} />
      )}
    />

<View ><Text style={{justifyContent:'center', fontSize:12}}>forgot your password? </Text></View>

<View style={styles.middle}>
           <Button 
        title="Login" color='#de568a' tintColor="white" uppercase={false} style={{width:150, fontWeight:'800', color:'white'}}
        onPress={() => navigation.navigate('Details')}
      /></View>



<View style={styles.middle}><Text style={{justifyContent:'center', fontSize:12}}>Don't have an account? </Text></View> 
           
           <View style={{marginBottom:50}}>
           <Button 
        title="Create now" uppercase={false} variant='outlined' color="#de568a"  style={{width:150,fontWeight:"bold"}}
        onPress={() => navigation.navigate('Details')}
      /></View>


         

     

    </View>

   

    

    
    </View>

    </ScrollView>

  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function DetailsScreen({navigation}) {
  return (

    
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>
   
   
   
         
   <View style={styles.middle}><Text style={{justifyContent:'center', fontWeight:'bold'}}>
         Lets get started 
         </Text></View>

         <View style={styles.middle}>
         <Text style={{alignContent:'center', fontSize:12}}>
         Are you a parent, guardian or someone living with Type 1 Diabetes?
         </Text>
         </View>
         <View style={styles.middle} ><Chip leading={props => <Icon name="home" style={{color:'#C665E4'}} {...props} />} color="#C665E4" variant="outlined" label="Parent or Guardian" style={{width:200}} onPress={() => navigation.navigate('Parent1')} /></View>

         <View style={styles.middle}><Chip leading={props => <Icon name="account" style={{color:'#C665E4'}} {...props} />} color="#C665E4" variant="outlined" label="Type 1 Diabetic " style={{width:200}} onPress={() => navigation.navigate('Details3')} /></View>

         
         
      
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button color='#de568a' tintColor="white" uppercase={false} title="Lets get started" onPress={() => navigation.navigate('Details3')} style={{width:200,marginBottom:20}}/>
      </View>

      <View style={styles.middle}>
      <Text style={{alignContent:'center', fontSize:12}}>
         Already have an account? Login
         </Text></View>
      
      


</View>




</View>
    
 
  );
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function DetailsScreen2({navigation}) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>
    
    <ImageBackground source={require('./assets/back2.png')} resizeMode="cover" style={styles.image}>
         
         <Text style={styles.middle}>
         How long have you been Type 1 Diabetic? 
         </Text>
         <View style={styles.middle}><Button color="black" uppercase={false} title="Less than a year" style={styles.Button} onPress={() => Alert.alert('Less than one year')} /></View>

         <View style={styles.middle}><Button color="black" title="1-4 years" style={styles.Button} onPress={() => Alert.alert('1-4 years')}/></View>

         <View style={styles.middle}><Button color="black" title="5-9 years" style={styles.Button} onPress={() => Alert.alert('5-9 years')}/></View>

         <View style={styles.middle}><Button color="black" title="10 + years" style={styles.Button} onPress={() => Alert.alert('10+ years')} /></View>
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button color="#03989e" title="Next" onPress={() => navigation.navigate('Details3')} style={{width:150,}}/>
      </View>
      
      


</View>


</ImageBackground>

</View>
    
 
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function DetailsScreen3({navigation}) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      <Image source={require('./assets/icon.png')} style={{height: 80, width:80,}} />   
      
     
      
       <Text style={{justifyContent:'center', fontWeight:'bold'}}>
         Lets introduce ourselves
         </Text>
         
         <Text style={{alignContent:'center', fontSize:12}}>
         Im Gluco, your new best buddy! 
         </Text>
         <Text style={{alignContent:'center', fontSize:12}}>
         Whats your name? 
         </Text>
         <View style={styles.middle}>
         <Text style={{alignContent:'center', fontSize:12}}>
         First name 
         </Text>
         <TextInput style={{width:200,color:'#de568a'}}
      label="Your first name"
      variant="outlined" color='#de568a'
      leading={props => <Icon name="account" style={{color:'#de568a'}} {...props} />}
    />
      </View>

      <View style={styles.middle}>
      <Text style={{alignContent:'center', fontSize:12}}>
         Last name 
         </Text>
      <TextInput style={{width:200}}
      label="Your last name"
      variant="outlined" color='#de568a'
      leading={props => <Icon name="account" style={{color:'#de568a'}} {...props} />}
    />
      </View>
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next" tintColor="white" color='#de568a' uppercase={false} onPress={() => navigation.navigate('Details4')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}


  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function DetailsScreen4({navigation}) {

 

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

<Image source={require('./assets/icon.png')} style={{height: 100, width:100, marginTop:20}} /> 
      
     
      
         
       <Text style={{justifyContent:'center', fontWeight:'bold', marginTop:30, marginBottom:20}}>
         Hey Emma. 
         </Text>

         <Text style={{alignContent:'center', fontSize:12}}>
         Enter your phone number to create your account. 
         </Text>
         
        <View>

       <View style={{alignContent:'center', fontSize:12, marginBottom:20}}>
        <Text style={{alignContent:'center', fontSize:12,  marginTop:20}}>
         Phone number 
         </Text>
        <TextInput style={{width:200, color:'#de568a'}}
      label="phone number"
      variant="outlined"
      leading={props => <Icon name="phone" {...props} />}
    />
         </View>
      </View>

      
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next" tintColor='white'  color='#de568a' uppercase={false} onPress={() => navigation.navigate('Details5')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function DetailsScreen5({navigation}) {

 

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

<Image source={require('./assets/icon.png')} style={{height: 80, width:80, marginTop:40}} /> 
      
     
      
         
         <Text style={{justifyContent:'center', fontWeight:'bold', marginBottom:20}}>
         Enter your code. 
         </Text>

         <Text style={{alignContent:'center', fontSize:12, marginHorizontal:40}}>
         Please enter your verification code sent to 07754635321. 
         </Text>

         <View style={styles.middle2}  >


         <TextInput style={{width:50, color:'#de568a', padding:1}}
      label=""
      variant="outlined"
      leading={props => <Icon name="star" style={{color:'#de568a'}} {...props} />}
    />
    <TextInput style={{width:50, color:'#de568a', padding:1}}
      label=""
      variant="outlined"
      leading={props => <Icon name="star" style={{color:'#de568a'}} {...props} />}
    />
    <TextInput style={{width:50, color:'#de568a', padding:1}}
      label=""
      variant="outlined"
      leading={props => <Icon name="star" style={{color:'#de568a'}} {...props} />}
    />
    <TextInput style={{width:50, color:'#de568a', padding:1}}
      label=""
      variant="outlined"
      leading={props => <Icon name="star" style={{color:'#de568a', padding:1}} {...props} />}
    />
         
      </View>

      
         
         
        
         
         
         <View >
         
      <View style={{alignItems:'center', marginTop:-200}}>
      <Button  title="Verify" tintColor='white'  color='#de568a' uppercase={false} onPress={() => navigation.navigate('Details6')} style={{width:150,}}/>
      </View>
      
      

      <Text style={{justifyContent:'center', fontSize:12}}>
         Didn't get a code? Tap to resend 
         </Text>

</View>

</View>
    
 
  );
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function DetailsScreen6({navigation}) {

  

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      <Image source={require('./assets/icon.png')} style={{height: 80, width:80,}} />   
      
     
      
         <View style={styles.middle}>
         <Text style={{fontWeight:'bold'}}>
         Link up with guardian. 
         </Text></View>
         <View style={styles.middle}>


         <TextInput style={{width:200, }}
      label="telephone number"
      variant="outlined"
      leading={props => <Icon name="phone" style={{color:'#de568a'}} {...props} />}
    />
         
      </View>

     

      
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next" uppercase={false} color='#de568a' tintColor='white' onPress={() => navigation.navigate('Congrats')} style={{width:150,marginBottom:20}}/>
      <Button  title="Not now" uppercase={false}  color='#de568a' tintColor='white' onPress={() => navigation.navigate('CongNoCon')} style={{width:150}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function CongratsSignUp({navigation}) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      
      
     
      
         
         
         <View style={styles.middle}>

         <Image source={require('./assets/icon.png')}  style={{height: 100, width:100, alignSelf:'center'}} /> 

         <Text style={{fontWeight:'bold'}}>
         Link up request sent! 
         </Text>
         
      </View>

     

      
         
         
        
         
         
         <View style={{marginTop:50,}}>
         
      <View style={styles.middle}>
      <Button  title="Ok" uppercase={false} color='#de568a' tintColor='white' onPress={() => navigation.navigate('Onb1')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function Onb1({navigation}) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      
      
     
      
         
         
         <View style={styles.middle}>

         <Image source={require('./assets/icon.png')}  style={{height: 80, width:80, alignSelf:'center'}} /> 

         <Text style={{fontWeight:'bold', alignSelf:'center'}}>
         Tell me a little more
         </Text>
         <Text style={{marginTop:10,fontSize:12}}>
         Providing me with more information will give you better insights
         </Text>
         
      </View>

      
      <View style={{justifyContent:'center', marginBottom:10, marginTop:10}}>
      <Chip leading={props => <Icon name="account" {...props} />} color="#de568a" variant="outlined" label="Male" style={{width:200, justifyContent:'center'}} />
      </View>

      
<View style={{justifyContent:'center', marginBottom:10}}>
      
      <Chip leading={props => <Icon name="account" {...props} />} color="#de568a" variant="outlined" label="Female " style={{width:200, justifyContent:'center'}} /></View>

      <Text style={{marginTop:10, fontSize:12, alignSelf:'center'}}>
         When is your birthday?
         </Text>

      
      <View style={{marginTop:10}}>  
      <TextInput style={{width:200}}
      label="date of birth"
      variant="outlined"
      leading={props => <Icon name="calendar" style={{color:'#de568a'}} {...props} />}
    />
        </View> 
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next" tintColor='white' uppercase={false} color='#de568a' onPress={() => navigation.navigate('Onb2')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function Onb2({navigation}) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      
      
     
      
         
         
         <View style={styles.middle}>

         <Image source={require('./assets/icon.png')}  style={{height: 50, width:50, alignSelf:'center'}} /> 

         <Text style={{fontWeight:'bold'}}>
         When were you diagnosed?
         </Text>
         <Text style={{marginTop:10, marginBottom:20, fontSize:12}}>
         Living with type one isn't easy, help me understand more about your journey
         </Text>
         
      </View>

      
     

      <Text style={{marginTop:10, marginBottom:20, fontSize:12}}>
         What age were you diagnosed?
         </Text>

      
      <View style={{marginTop:30}}>  
      <TextInput style={{width:80, }}
      label=" "
      variant="outlined"
      leading={props => <Icon name="" {...props} />}
    />
        </View> 
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next" tintColor='white' uppercase={false} color='#de568a' onPress={() => navigation.navigate('Onb3')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function Onb3({navigation}) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      
      
     
      
         
         
       

         <Image source={require('./assets/icon.png')}  style={{height: 50, width:50, alignSelf:'center'}} /> 

         <Text style={{fontWeight:'bold', marginBottom:30, marginHorizontal:30,}}>
         How's it going?
         </Text>
         <Text style={{marginTop:10, marginBottom:10, marginHorizontal:40, fontSize:12}}>
         I want to know how you really feel living with type one so I can help as best I can.
         </Text>
         
     

      
     

      <Text style={{marginTop:10, marginBottom:10,marginHorizontal:40, fontSize:12}}>
         How confident are you in managing your condition?
         </Text>

      
      <View style={{marginTop:30}}>  
      



      <Chip leading={props => <Icon name="" {...props} />} color="#de568a" variant="outlined" label="Not at all" style={{width:200, justifyContent:'center', marginBottom:20}} />

      <Chip leading={props => <Icon name="" {...props} />} color="#de568a" variant="outlined" label="Kinda.." style={{width:200, justifyContent:'center', marginBottom:20}} />


      <Chip leading={props => <Icon name="" {...props} />} color="#de568a" variant="outlined" label="Very confident" style={{width:200, justifyContent:'center'}} />







        </View> 
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next" tintColor='white' color="#de568a" uppercase={false} onPress={() => navigation.navigate('CongOnb')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function CongOnb({navigation}) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      
      
     
      
         
         
         <View style={styles.middle}>

         <Image source={require('./assets/icon.png')}  style={{height: 100, width:100, alignSelf:'center'}} /> 

         <Text style={{fontWeight:'bold', marginBottom:30, alignSelf:'center'}}>
         Completed!
         </Text>
         <Text style={{fontSize:12,}}>Now its time to become confident in managing your condition. </Text>
         
      </View>

     

      
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next"  tintColor='white' color="#de568a" uppercase={false} onPress={() => navigation.navigate('Dash1')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function CongNoCon({navigation}) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      
      
     
      
         
         
         <View style={styles.middle}>

         <Image source={require('./assets/icon.png')}  style={{height: 100, width:100, alignSelf:'center'}} /> 

         <Text style={{fontWeight:'bold', marginBottom:30, alignSelf:'center'}}>
         Account created
         </Text>
         <Text style={{fontSize:12}}>We want to personalise your experience, answer a few more questions to help us get to know you better. </Text>
         
      </View>

     

      
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next"  tintColor='white' color="#de568a" uppercase={false}  onPress={() => navigation.navigate('Onb1')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function Parent1({navigation}) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

      <Image source={require('./assets/icon.png')} style={{height: 80, width:80,}} />   
      
     
      
       <Text style={{fontWeight:'bold', marginBottom:10, marginHorizontal:30,}}>
         Lets introduce ourselves
         </Text>
         
         <Text style={{marginTop:10, marginBottom:20, fontSize:12, marginHorizontal:70}}>
         Im Gluco, here to help you and your loved one. What's your name? 
         </Text>
         <Text style={{marginTop:10,  fontSize:12}}>
         Whats your name? 
         </Text>
         <View style={styles.middle}>
         <TextInput style={{width:200}}
      label="first name"
      variant="outlined"
      leading={props => <Icon name="account" style={{color:'#de568a'}} {...props} />}
    />
      </View>

      <View style={styles.middle}>
      <TextInput style={{width:200}}
      label="last name"
      variant="outlined"
      leading={props => <Icon name="account" style={{color:'#de568a'}} {...props} />}
    />
      </View>
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Next"  tintColor='white' color="#de568a" uppercase={false} onPress={() => navigation.navigate('Parent2')} style={{width:150,}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function Parent2({navigation}) {

 

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

<Image source={require('./assets/icon.png')} style={{height: 100, width:100,}} /> 
      
     
      
         
       <Text style={{fontWeight:'bold', marginBottom:10, marginHorizontal:30,}}>
         Finish creating your acount. 
         </Text>

         <Text style={{marginTop:10, marginBottom:20, fontSize:12, marginHorizontal:40}}>
         Enter your phone number to finish setting up your account. 
         </Text>
         
        <View>

        <TextInput style={{width:200}}
      label="phone number"
      variant="outlined"
      leading={props => <Icon name="phone" style={{color:'#de568a'}} {...props} />}
    />
         
      </View>

      
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Create account" uppercase={false}  tintColor='white' color="#de568a" onPress={() => navigation.navigate('ParentCon')} style={{width:200}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function ParentCon({navigation}) {

 

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

<Image source={require('./assets/icon.png')} style={{height: 100, width:100,}} /> 
      
     
      
         
       <Text style={{fontWeight:'bold', marginBottom:10, marginHorizontal:30,}}>
         We found a connection. 
         </Text>

         <Text style={{marginTop:10, marginBottom:20, fontSize:12, marginHorizontal:40}}>
         Your phone number has been matched to Emma Corbett. Would you like to link accounts?. 
         </Text>
         
        <View>

     
         
      </View>

      
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Link account" uppercase={false}  tintColor='white' color="#de568a" onPress={() => navigation.navigate('AccCreate')} style={{width:200,marginBottom:20}}/>
      <Button  title="No thanks" variant='outlined' uppercase={false} color='#de568a' onPress={() => navigation.navigate('AccCreate')} style={{width:200}}/>
      </View>
      
      


</View>


</View>
    
 
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen
function AccCreate({navigation}) {

 

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

<Image source={require('./assets/icon.png')} style={{height: 100, width:100,}} /> 
      
     
      
         
       <Text style={{fontWeight:'bold', marginBottom:10, marginHorizontal:30,}}>
         Account created 
         </Text>

         <Text style={{marginTop:10, marginBottom:20, fontSize:12, marginHorizontal:40}}>
         Your account is linked up and ready to go. 
         </Text>
         
        <View>

     
         
      </View>

      
         
         
        
         
         
         <View style={{margin:5,}}>
         
      <View style={styles.middle}>
      <Button  title="Okay" uppercase={false}  tintColor='white' color="#de568a" onPress={() => navigation.navigate('Dash1')} style={{width:200,marginBottom:20}}/>
      
      </View>
      
      


</View>


</View>
    
 
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Dash1

function Dash1({navigation}) {
  return (

    <ScrollView backgroundColor="white">

    <View style={styles.container}>
    

    

    <View style={styles.home}>



       
         
         
       
       <View style={styles.middle}>
        <CalendarPicker selectedDayColor='#de568a' style={{marginTop:20}}
          
        />

        <View>
          <Text style={{marginHorizontal:30, fontWeight:'bold'}}>September 4th - Today</Text>
        </View>
      </View>







<View style={styles.middle}>

<Snackbar
      message="Create a log"
      action={<Image source={require('./assets/plus.png')} style={{height: 50, width:50,}} /> }
      style={{ alignSelf:'center', width:'110%', end: 10, bottom: 16, marginBottom:20, fontWeight:'bold' }}
    />

<View>
          <Text style={{ fontWeight:'bold'}}>Your logs</Text>
        </View>

        <HStack m={4} mt={10} spacing={6}>
        <IconButton
        icon={props => <Icon name="plus" {...props} />}
       
      />
        <IconButton
      icon={props => <Icon name="food" {...props} />}
     
    />   <IconButton
    icon={props => <Icon name="brain" {...props} />}
   
  />   <IconButton
  icon={props => <Icon name="emoticon-neutral" {...props} />}
 
/>   <IconButton
        icon={props => <Icon name="dots-vertical" {...props} />}
       
      />
   
  </HStack>

</View>


         

     

    </View>

   

    

    
    </View>

    </ScrollView>

  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////About Screen

///////////////////////////////////////////////////////////////////////////////// App Function All   ------ Stack Navigator\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signUp">
        <Stack.Screen name="Welcome" component={HomeScreen} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="Details2" component={DetailsScreen2} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="Details3" component={DetailsScreen3} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="Details4" component={DetailsScreen4} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
         <Stack.Screen name="Details5" component={DetailsScreen5} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
         <Stack.Screen name="Details6" component={DetailsScreen6} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="Congrats" component={CongratsSignUp} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="Onb1" component={Onb1} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
         <Stack.Screen name="Onb2" component={Onb2} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="Onb3" component={Onb3} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="CongOnb" component={CongOnb} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>
        <Stack.Screen name="CongNoCon" component={CongNoCon} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>

<Stack.Screen name="Parent1" component={Parent1} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>

<Stack.Screen name="Parent2" component={Parent2} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>

<Stack.Screen name="ParentCon" component={ParentCon} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>

<Stack.Screen name="AccCreate" component={AccCreate} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>

<Stack.Screen name="Dash1" component={Dash1} options={{ headerTitle: props => <LogoTitle {...props} />
        }}/>



        
        
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon2.png')}
    />
  );
}

function LogoTitle2() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/screen.png')}
    />
  );
}





const styles = StyleSheet.create({

  App:{
    backgroundColor: '#fff',
    color:'black', 
    fontFamily:'Poppins-Bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
  },

  Button:{
    padding: 10,
    borderRadius: 10,
    backgroundColor:'#de568a',
    borderRadius:1,
    color:'white',
    borderColor:'#de568a',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:200,
    fontFamily:'bold'
    
  },



  middle:{
    top: 10,
    
    paddingTop: 20,
    paddingBottom:20,
    paddingLeft:45,
    paddingRight:45,
    justifyContent: 'center',
    
    

},

middle2:{
  top: 10,
  
  paddingTop: 20,
  
  paddingLeft:45,
  paddingRight:45,
  justifyContent: 'center',
  flexDirection: "row",
  flex:1,
  
  

},



image: {
  flex: 1,
  justifyContent: "center",
  padding:60,
 
  
},

home: {

    alignItems: 'center',
    justifyContent: 'center',
    top: 5,

},

space: {
    width: 20, // or whatever size you need
    height: 10,
  },
});


export default App;


