import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  FlatList,
  Image,
  Platform,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  AsyncStorage,
  Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme, { createTheme, createStyle, createThemedComponent } from 'react-native-theming';
import { Avatar } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
const isAndroid = Platform.OS == "android";
const viewPadding = 10;

const themes = [
  createTheme({
    backgroundColor: 'white',
    textColor: 'black',
    buttonColor: 'blue',
    buttonText: 'white',
    //icon: require('./icons/default.png'),
    statusBar: 'dark-content',
  }, 'Light'),
  createTheme({
    backgroundColor: 'black',
    textColor: 'white',
    buttonColor: 'yellow',
    buttonText: 'black',
    //icon: require('./icons/colorful.png'),
    statusBar: 'light-content',
  }, 'Dark'),
];

const styles1 = createStyle({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '@backgroundColor',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '@textColor',
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '@buttonColor',
    borderRadius: 3,
    flex: 1,
    alignItems: 'center',
  },
  genericButton: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 14,
  },
  bottomTab: {
    backgroundColor: '@backgroundColor',
  },
});

const TButton = createThemedComponent(TouchableOpacity);
const Bar = createThemedComponent(StatusBar, ['barStyle', 'backgroundColor']);


class MenuScreen extends React.Component {
  nightMode = () => {
    this.setState({backgroundColor : '#000000'});
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Theme.View style={styles1.container}>



        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Avatar size = "large" rounded title="MB" />

        <Button
          title="Go to GPA Calculator"
          onPress={() => this.props.navigation.navigate('GPA')}
        />
        <Button
          title="Go to Final Grade Calculator"
          onPress={() => this.props.navigation.navigate('FinalGrade')}
        />
          <Button
            title="Go to Previous Calculations"
            onPress={() => this.props.navigation.navigate('Previous')}
          />
          <Button
          title="Go to TODO List"
          onPress={() => this.props.navigation.navigate('TODO')}
        />

          <Button
          title="Sign Out"
          onPress={() => navigate("First")}
        />
        </View>

        <View style={{ flexDirection: 'row' }}>
          { themes.map(theme => (
            <TButton key={theme.name} style={[styles1.button, styles1.genericButton]} onPress={() => theme.apply()}>
              <Theme.Text style={[styles1.buttonText, { color: '@buttonText' }]}>{theme.name}</Theme.Text>
            </TButton>
            ))
          }
          </View>
        </Theme.View>
    );
  }
}
class GPAScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      grade1: '',
      grade2: '',
      grade3: '',
      grade4: '',
      grade5: '',
      grade6: '',
      classes: '',
      gcalc: 0
    };
  }

  buttonPressed = () => {
    const { grade1, grade2, grade3, grade4, grade5, grade6, classes } = this.state;
    this.setState({
      gcalc: ((Number(grade1) + Number(grade2) + Number(grade3) + Number(grade4) + Number(grade5) + Number(grade6)) / Number(classes))
    });
  }

  nightMode = () => {
    this.setState({backgroundColor : '#000000'});
  }
  clearText(){
    this.setState({
    grade1: '',
    grade2: '',
    grade3: '',
    grade4: '',
    grade5: '',
    grade6: '',
    classes: ''
    })
  }
  render() {
    return (

      <Theme.View style={styles1.container}>
      <ScrollView>
      <View style={{padding: 20}}>
      </View>
        <Bar barStyle="@statusBar" backgroundColor="@backgroundColor" />
        <Theme.Image source="@icon" />
        <Theme.Text style={styles1.welcome}>
          GPA Calculator
        </Theme.Text>
        <Text style={styles1.instructions}>
        Use this calculator to determine your total GPA!
        </Text>

          <View style={{ flexDirection: 'row' }}>
          <Theme.Text style={styles1.welcome}>
            Enter Grade 1
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 3.0)"
            keyboardType ='numeric'
            onChangeText={(grade1) => this.setState({grade1})}
            value={this.state.grade1}

          />
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Theme.Text style={styles1.welcome}>
            Enter Grade 2
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 3.0)"
            keyboardType ='numeric'
            onChangeText={(grade2) => this.setState({grade2})}
            value={this.state.grade2}

          />
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Theme.Text style={styles1.welcome}>
            Enter Grade 3
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 3.0)"
            keyboardType ='numeric'
            onChangeText={(grade3) => this.setState({grade3})}
            value={this.state.grade3}

          />
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Theme.Text style={styles1.welcome}>
            Enter Grade 4
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 3.0)"
            keyboardType ='numeric'
            onChangeText={(grade4) => this.setState({grade4})}
            value={this.state.grade4}

          />
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Theme.Text style={styles1.welcome}>
            Enter Grade 5
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 3.0)"
            keyboardType ='numeric'
            onChangeText={(grade5) => this.setState({grade5})}
            value={this.state.grade5}

          />
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Theme.Text style={styles1.welcome}>
            Enter Grade 6
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 3.0)"
            keyboardType ='numeric'
            onChangeText={(grade6) => this.setState({grade6})}
            value={this.state.grade6}

          />
          </View>

          <View style={{ flexDirection: 'row' }}>

          <Theme.Text style={styles1.welcome}>
            Enter Number of Classes
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 4)"
            keyboardType ='numeric'
            onChangeText={(classes) => this.setState({classes})}
            value={this.state.classes}

          />
          </View>


          <View style={{ flexDirection: 'row' }}>

          <Button title={"Compute"} onPress={this.buttonPressed}/>
          <Button title={"Clear"} onPress={()=>this.clearText()}/>

          </View>
          <View style={{ flexDirection: 'row' }}>

          <Theme.Text style ={styles1.welcome}>{`Your total GPA is ${this.state.gcalc.toFixed(2)} `}</Theme.Text>
          </View>




          </ScrollView>

      </Theme.View>


    );
  }
}
class TODOScreen extends React.Component {
  state = {
    tasks: [],
    text: ""
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text: text }),
            text: ""
          };
        },
        () => Tasks.save(this.state.tasks)
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
  };

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button title="X" onPress={() => this.deleteTask(index)} />
              </View>
              <View style={styles.hr} />
            </View>}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add TODO"
          returnKeyType="done"
          returnKeyLabel="done"
        />
      </View>
    );
  }
}
class FinalGradeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      grade: '',
      desired: '',
      final: '',
      calc: 0
    };
  }

  buttonPressed = () => {
    const { grade, desired, final } = this.state;
    this.setState({
      //calc: ( Number(desired) - ((Number( 1 - final)) * Number(grade))) / Number(final)
      calc: ((Number(desired)/100) - ((1 - (Number(final)/100)) * (Number(grade)/100))) / (Number(final)/100) * 100
    });
  }

  nightMode = () => {
    this.setState({backgroundColor : '#000000'});
  }
  clearText(){
    this.setState({
    grade: '',
    desired: '',
    final: ''
    })
  }

  render() {
    return (

      /*<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Edited!</Text>
        <Button
          title="Go to New"
          onPress={() => this.props.navigation.navigate('New')}
        />
        <Button
          title="Go to Previous Calculations"
          onPress={() => this.props.navigation.navigate('Previous')}
        />
      </View>*/
      <Theme.View style={styles1.container}>
      <ScrollView>
      <View style={{padding: 20}}>
      </View>
        <Bar barStyle="@statusBar" backgroundColor="@backgroundColor" />
        <Theme.Image source="@icon" />
        <Theme.Text style={styles1.welcome}>
          Final Grade Calculator
        </Theme.Text>
        <Text style={styles1.instructions}>
        Use this calculator to determine what grade you need on your final exam in order to get a desired grade in a class.
        </Text>

          <View style={{ flexDirection: 'row'}}>
          <Theme.Text style={styles1.welcome}>
            Enter Current Grade %
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 87.3)"
            keyboardType ='numeric'
            onChangeText={(grade) => this.setState({grade})}
            value={this.state.grade}

          />
          </View>

          <View style={{ flexDirection: 'row' }}>

          <Theme.Text style={styles1.welcome}>
            Enter Desired Grade %
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 95)"
            keyboardType ='numeric'
            onChangeText={(desired) => this.setState({desired})}
            value={this.state.desired}
          />
          </View>

          <View style={{ flexDirection: 'row' }}>

          <Theme.Text style={styles1.welcome}>
            Enter Final %
          </Theme.Text>
          <TextInput
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            color: '#888'}}
            placeholderTextColor='gray'
            placeholder="(e.g. 20)"
            keyboardType ='numeric'
            onChangeText={(final) => this.setState({final})}
            value={this.state.final}

          />
          </View>
          <View style={{ flexDirection: 'row' }}>

          <Button title={"Compute"} onPress={this.buttonPressed}/>
          <Button title={"Clear"} onPress={()=>this.clearText()}/>

          </View>
          <View style={{ flexDirection: 'row' }}>

          <Theme.Text style ={styles1.welcome}>{`You need a ${this.state.calc.toFixed(2)}% on the final`}</Theme.Text>
          </View>

          <View style={{ flexDirection: 'row' }}>



        </View>
          </ScrollView>

      </Theme.View>


    );
  }
}

class PreviousScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Previous Calculations!</Text>
      </View>
    );
  }
}
const GPAStack = createStackNavigator({
  GPA: { screen: GPAScreen },
  Previous: { screen: PreviousScreen },
});

const MenuStack = createStackNavigator({
  Menu: { screen: MenuScreen },
  Previous: { screen: PreviousScreen },
});

const FinalGradeStack = createStackNavigator({
  FinalGrade: { screen: FinalGradeScreen },
  Previous: { screen: PreviousScreen },
});

const TODOStack = createStackNavigator({
  TODO: { screen: TODOScreen },
  Previous: { screen: PreviousScreen },
})

export default createAppContainer(createBottomTabNavigator(
  {
    Menu: { screen: MenuStack },
    GPA: {screen: GPAStack },
    FinalsCalc: { screen: FinalGradeStack },
    TODO: {screen: TODOStack},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = `ios-person`;
        } else if (routeName === 'FinalsCalc') {
          iconName = `ios-copy`;
        } else if (routeName === 'GPA') {
          iconName = `ios-clipboard`;
        }
          else if (routeName === 'TODO') {
            iconName = 'ios-add';
          }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      activeBackgroundColor: 'tomato',
      inactiveBackgroundColor: 'tomato',
    },
  }
));

let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.convertToArrayOfObject(tasks, callback)
    );
  },
  save(tasks) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
})